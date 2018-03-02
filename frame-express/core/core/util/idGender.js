const moment = require("moment");

let atomicInteger = 0;

module.exports = {
  /**
   * 生成唯一id
   */
  genUniqueId: function () {
    atomicInteger += 1;
    if (atomicInteger > 99) {
      atomicInteger = 1;
    }
    let base = moment().format('YYYYMMDDHHmmssSSS');
    if (atomicInteger < 10) {
      base = (base * 10).toString();
    } else {
      base = base.toString();
    }
    return _.toNumber(base + atomicInteger.toString());
  }
};