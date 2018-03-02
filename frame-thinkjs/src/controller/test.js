const Base = require('./base.js');
const {sleep} = require('../utils/system');
module.exports = class extends Base {
  indexAction() {
    return this.json(think.env);
  }

  async getAction() {
    const data = this.get();
    data.b = 2;
    data.t1 = Date.now();
    await sleep(1000);
    data.t2 = Date.now();
    think.logger.warn('111');
    return this.json(data);
  }

  postAction() {
    const data = this.post();
    return this.json(data);
  }
};
