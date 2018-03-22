const Base = require('./base.js');
const {sleep} = require('../utils/system');

const Tiangan = require('../model/tiangan');
const Dizhi = require('../model/dizhi');

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

    const tiangan = new Tiangan();
    data.tiangan = await tiangan.find();

    const dizhi = new Dizhi();
    data.dizhi = await dizhi.find();

    return this.json(data);
  }

  postAction() {
    const data = this.post();
    return this.json(data);
  }
};
