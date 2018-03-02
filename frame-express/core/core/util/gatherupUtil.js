// gu项目工具库
const httpClient = require("./httpClient");
const secret = require("./secret");
const gatherupHost = 'https://gatherup.cc';
module.exports = {
  /**
   * 公共获取页码方法
   * @param page
   */
  getPage: function (page) {
    page = _.toInteger(page);
    return page <= 0 ? 1 : page;
  },
  /**
   * 公共获取页面大小方法
   * @param pageSize
   */
  getPageSize: function (pageSize) {
    pageSize = _.toInteger(pageSize);
    pageSize = pageSize <= 0 ? 1 : pageSize;
    return pageSize > 30 ? 30 : pageSize;
  },
  /**
   * post获取数据
   * @param url 请求地址
   * @param data 请求数据
   */
  post: async function (url, data) {
    data.version = 999;
    data.platform = 4;
    data.mobileType = 'nodejs';
    data.time = timeUtil.now();
    data.sign = this.makeSign(data);
    url = gatherupHost + url;
    return await httpClient.postAsync(url, data);
  },
  /**
   * get获取数据
   * @param url 请求地址
   * @param data 请求数据
   */
  get: async function (url, data) {
    data.time = timeUtil.now();
    data.sign = this.makeSign(data);
    url = gatherupHost + url;
    return await httpClient.getAsync(url, data);
  },
  /**
   * 生成sign值
   * @param data json数据
   */
  makeSign: function (data) {
    let tmp = [];
    for (let value in data) {
      tmp.push({'key': value});
    }
    tmp = _.sortBy(tmp, function (o) {
      return o.key;
    });
    let sign = '';
    _.forEach(tmp, function (a) {
      sign += encodeURIComponent(data[a.key].toString()).trim();
    });
    sign += properties['system.key'];
    return secret.md5(sign);
  }
};