/**
 * 支付宝SDK
 */
const LOGGER = logUtil.getLogger(module.filename);

// 配置
const alipayPid = '2088021676233141';
const alipayMD5Key = 'd8xomx73cmw2emc2nr1v5r7x66k8saxr';
const alipaySignType = 'MD5';
const inputCharset = 'utf-8';


module.exports = {
	/**
	 * 支付宝-跳转到支付宝收银台支付
	 * @param orderId 订单id
	 * @param description 支付描述
	 * @param rmb 人民币
	 * @param attach 附加数据
	 * @param notifyUrl 服务器异步通知页面路径
	 * @param returnUrl 页面跳转同步通知页面路径
	 * @param errorNotifyUrl 请求出错时的通知页面路径
	 */
	payByAlipay: function (orderId, description, rmb, attach, notifyUrl, returnUrl, errorNotifyUrl) {
		let data = {};
		data.service = "create_direct_pay_by_user";//接口名称
		data.partner = alipayPid;//合作者身份ID
		data._input_charset = inputCharset;//参数编码字符集
		data.notify_url = notifyUrl;//服务器异步通知页面路径
		data.return_url = returnUrl;//页面跳转同步通知页面路径
		data.error_notify_url = errorNotifyUrl;//请求出错时的通知页面路径
		data.seller_id = alipayPid;//卖家支付宝用户号
		data.out_trade_no = orderId;//商户网站唯一订单号
		data.subject = description;//商品名称
		data.payment_type = "1";//支付类型
		data.total_fee = rmb;//交易金额
		data.it_b_pay = "2h";//过期时间
		data.extra_common_param = attach;//公用回传参数String(100)

		//除去数组中的空值和签名参数
		let sPara = buildSign(data, alipaySignType);

		LOGGER.warn("sPara: %s", JSON.stringify(sPara));

		let html = "";
		html += '\<form id="alipaysubmit" name="alipaysubmit" action="https://mapi.alipay.com/gateway.do" method="get">';
		_.forEach(sPara, function (value, key) {
			html += '\<input type="hidden" name="' + key + '" value="' + value + '">';
		});
		html += '\<input type="submit" value="确定" style="display:none;"></form>';
		html += '\<script>document.forms["alipaysubmit"].submit();</script>';

		return html;
	},
	/**
	 * 组合支付宝验证接口参数
	 * @param notifyId
	 */
	alipayNotifyVerify: function (notifyId) {
		let data = {};
		data.service = "notify_verify";//接口名称
		data.partner = alipayPid;//合作者身份ID
		data.notify_id = notifyId;
		return buildSign(data, alipaySignType);
	}
};

/**
 * 生成签名结果
 * @param sParaTemp 要签名的数组
 * @param signType 签名方式
 */
function buildSign(sParaTemp, signType) {
	//除去数组中的空值和签名参数
	let sPara = paraFilter(sParaTemp);
	//把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
	let prestr = createLinkString(sPara);
	let mysign = "";
	if (signType == "MD5") {
		mysign = secret.md5(prestr + alipayMD5Key);
		//签名结果与签名方式加入请求提交参数组中
		sPara.sign = mysign;//签名
		sPara.sign_type = signType;//签名方式
	}
	return sPara;
}
/**
 * 除去数组中的空值和签名参数
 * @param sArray 签名参数组
 */
function paraFilter(sArray) {
	let result = {};
	if (!sArray) {
		return result;
	}
	_.forEach(sArray, function (value, key) {
		if ((!value && value != 0) || key.toLowerCase() == 'sign' || key.toLowerCase() == 'sign_type') {
			return;
		}
		result[key] = value;
	});
	return result;
}

/**
 * 把数组所有元素排序，并按照“参数=参数值”的模式用“&”字符拼接成字符串
 * @param params 需要排序并参与字符拼接的参数组
 */
function createLinkString(params) {
	let keyValueList = sortUtil.sortKey(params);
	let prestr = "";
	keyValueList.forEach(function (obj) {
		prestr += obj.key;
		prestr += '=';
		prestr += obj.value;
		prestr += '&';
	});
	return prestr.substr(0, prestr.length - 1);
}