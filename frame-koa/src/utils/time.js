module.exports = {
  /**
   * 获取当前时间(毫秒)
   * @returns {number}
   */
  nowMillicsend() {
    return new Date().getTime();
  },
  /**
   * 获取当前时间(秒)
   * @returns {Number}
   */
  now() {
    return parseInt(new Date().getTime() / 1000, 10);
  }
}
