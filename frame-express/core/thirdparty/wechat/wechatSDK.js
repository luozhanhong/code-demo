/**
 * 微信SDK
 */
const LOGGER = logUtil.getLogger(module.filename);
const fs = require("fs");
const request = require("request");
const util = require("util");

// 配置
const appId = 'wx71b54f7bb3586db2';
const appSecret = 'd4f9d23bc820623e46541a0f845caf0b';
const token = '95e89e8d486ce73d5528477aa5cd44f0';
const encodingAESKey = 'agAnWG0R3Pgvnyseqm0nDZ2wniQYBWRixjWumYKZhnZ';
const mchId = '1269149901';
const originalId = 'gh_9a3a69cb306b';

// https证书配置
const agentOptions = {
  key: filesystem.isLinux() ? fs.readFileSync('/srv/etc/cert/wechatSDK_key.pem') : fs.readFileSync(AppDir + '/../gu-core/src/resources/cert/wechatSDK_key.pem'),
  cert: filesystem.isLinux() ? fs.readFileSync('/srv/etc/cert/wechatSDK_cert.pem') : fs.readFileSync(AppDir + '/../gu-core/src/resources/cert/wechatSDK_cert.pem'),
  passphrase: '1269149901'
};


module.exports = {
  /**
   * 获取AccessToken
   */
  getAccessToken: async function () {
    return await cacheUtil.get('wechatSDK:accessToken', 7200, _getAccessToken);
  },
  /**
   * 获取jsapi ticket
   * @param accessToken
   */
  getTicket: async function (accessToken) {
    return await cacheUtil.get('wechatSDK:ticket', 7200, _getTicket, accessToken);
  },
  /**
   * 生成微信分享数据
   * @param url 要分享的网络地址
   */
  genWechatShareData: async function (url) {
    let accessToken = await this.getAccessToken();
    let ticket = await this.getTicket(accessToken);

    // 计算sign值
    let nonceStr = secret.md5(timeUtil.nanoTime() + String.valueOf(random.rand(100000000, 999999999)));
    let timestamp = timeUtil.now();
    let signature = secret.sha1("jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url);

    // 返回的数据
    return {
      "jsapi_ticket": ticket,
      "nonceStr": nonceStr,
      "timestamp": timestamp,
      "signature": signature,
      "appId": appId,
      "link": url
    };
  },
  /**
   * 商户支付给用户
   * @param openId 用户的第三方id
   * @param orderId 订单id
   * @param amount 支付金额(单位：分)
   * @param ip 请求支付端的ip地址
   */
  mchPay: async function (openId, orderId, amount, ip) {
    let param = {};
    param.mch_appid = appId;
    param.mchid = mchId;
    param.nonce_str = secret.md5(timeUtil.nanoTime() + '' + random.rand(100000000, 999999999));
    param.partner_trade_no = orderId;
    param.openid = openId;
    param.check_name = "NO_CHECK";
    param.amount = amount;
    param.desc = "G币提现";
    param.spbill_create_ip = ip;
    param.sign = genWechatSign(param);
    let xml = await post("https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers", json2xml(param));
    return stringUtil.xml2json(xml);
  },
  /**
   * 微信二维码支付
   * @param orderId 订单id
   * @param description 支付描述(例如：G点充值)
   * @param ip 支付机器的ip
   * @param amount 要支付的金额(单位：分)
   * @param attach 附加数据
   * @param notifyUrl 回调地址
   */
  payByWechatQRCode: async function (orderId, description, ip, amount, attach, notifyUrl) {
    let param = {};
    param.appid = appId;
    param.mch_id = mchId;
    param.nonce_str = secret.md5(timeUtil.nanoTime() + random.rand(100000000, 999999999));
    param.body = description;
    param.out_trade_no = orderId.toString();
    param.total_fee = amount.toString();
    param.spbill_create_ip = ip;
    param.notify_url = notifyUrl;
    param.trade_type = "NATIVE";
    param.attach = attach;
    param.sign = genWechatSign(param);
    let xml = await post("https://api.mch.weixin.qq.com/pay/unifiedorder", stringUtil.json2xml(param));
    return stringUtil.xml2json(xml);
  },
  /**
   * 通过code换取网页授权access_token
   * @param code 用户授权后获得的code
   */
  getAccessTokenByCode: async function (code) {
    return await cacheUtil.get('wechatSDK:accessTokenByCode', 1, _getAccessTokenByCode, code);
  },
  /**
   * 用户授权页面
   * @param callback 如果用户授权成功要回调页面url
   * @param res res对象
   */
  authorize: function (callback, res) {
    let scope = "snsapi_userinfo";
    let url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=%s&state=1#wechat_redirect";
    url = util.format(url, appId, encodeURIComponent(callback), scope);
    LOGGER.warn("redirect to: %s", url);
    res.redirect(url);
  },
  /**
   * 获取用户信息
   * @param accessToken 用户首页的访问凭据
   * @param openId 用户的第三方id
   */
  getUserInfo: async function (accessToken, openId) {
    let url = "https://api.weixin.qq.com/sns/userinfo";
    let data = {
      "access_token": accessToken,
      "openid": openId,
      "lang": "zh_CN"
    };
    return JSON.parse(await get(url, data));
  },
  /**
   * 判断微信是不是来自微信客户端
   * @param req
   */
  isFromWechat: function (req) {
    // 1.判断ua
    let ua = req.headers['user-agent'];
    if (_.toInteger(ua.indexOf('MicroMessenger')) <= 0) {
      LOGGER.warn('this request is not = require( wechat app, ua is error! ua: %s', ua);
      return false;
    }
    return true;
  },
  /**
   * 解析回调数据
   * 鉴于微信这么恶心的字节流回调和nodejs这么恶心的解析字节流的方法，所以写了这个函数
   * 这个是目前比较优雅的办法了
   * @param req 请求对象
   */
  parseCallbackData: async function (req) {
    let bytes = '';
    return new Promise(function (resolve, reject) {
      req.on('data', function (data) {
        bytes += data.toString();
      });
      req.on('end', function () {
        resolve(stringUtil.xml2json(bytes));
      });
    }).catch(function (error) {
      LOGGER.error(error);
    });
  }
};

/**
 * 获取AccessToken
 */
async function _getAccessToken() {
  let data = {
    'grant_type': 'client_credential',
    'appid': appId,
    'secret': appSecret
  };
  let json = JSON.parse(await get('https://api.weixin.qq.com/cgi-bin/token', data));
  return json.access_token;
}

/**
 * 通过code换取网页授权access_token
 * @param code 用户授权后获得的code
 */
async function _getAccessTokenByCode(code) {
  let url = "https://api.weixin.qq.com/sns/oauth2/access_token";
  let data = {
    "appid": appId,
    "secret": appSecret,
    "code": code,
    "grant_type": "authorization_code"
  };
  let json = await get(url, data);
  LOGGER.warn("get accessToken by code = require( wechat, code: %s, data: %s", code, json);
  return JSON.parse(json);
}

/**
 * 获取jsapi ticket
 * @param accessToken
 */
async function _getTicket(accessToken) {
  let data = {
    'access_token': accessToken,
    'type': 'jsapi'
  };
  let json = JSON.parse(await get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', data));
  return json.ticket;
}

/**
 * post获取数据
 * @param url 请求地址
 * @param data 请求数据
 */
function post(url, data) {
  return new Promise(function (resolve, reject) {
    request.post({url: url, form: data, agentOptions: agentOptions}, function (err, httpResponse, body) {
      if (err) {
        reject(err);
        return;
      }
      resolve(body);
    })
  }).catch(function (e) {
    LOGGER.error(e);
  });
}

/**
 * get获取数据
 * @param url 请求地址
 * @param data 请求数据
 */
function get(url, data) {
  url += '?';
  _.forEach(data, function (v, k) {
    url += k + '=' + v + '&';
  });
  return new Promise(function (resolve, reject) {
    request.get({url: url, form: data, agentOptions: agentOptions}, function (err, httpResponse, body) {
      if (err) {
        reject(err);
        return;
      }
      resolve(body);
    })
  }).catch(function (e) {
    LOGGER.error(e);
  });
}

/**
 * 生成微信接口sign值
 * @param data
 */
function genWechatSign(data) {
  let str = '';

  // 按照key排序
  let keyList = sortUtil.sortKey(data);
  keyList.forEach(function (obj) {
    str += obj.key;
    str += '=';
    str += obj.value;
    str += '&';
  });
  str += 'key=GongZuoShi2015InTitAndRoomIsCCIC';
  return secret.md5(str).toUpperCase();
}