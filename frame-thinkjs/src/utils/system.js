module.exports = {
  /**
   * 睡眠
   * @param milliSeconds 毫秒
   */
  sleep(milliSeconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliSeconds);
    });
  }
};
