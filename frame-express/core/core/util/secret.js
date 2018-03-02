// 加密类
const cryptos = require('cryptos');

module.exports = {
  /**
   * md5加密
   * @param str 字符串
   */
  md5: function (str) {
    return cryptos.hash(str, {
      algorithm: 'md5',
      input_encoding: 'utf-8',
      output_encoding: 'hex'
    });
  },
  /**
   * 哈希加密
   * @param str 字符串
   */
  sha1: function (str) {
    return cryptos.hash(str, {
      algorithm: 'sha1',
      input_encoding: 'utf-8',
      output_encoding: 'hex'
    });
  }
};