const Pool = require('../plugin/mysql2');
module.exports = class {
  constructor() {
    let category = (new Error()).stack.split('\n')[2];
    category = category.substring(category.indexOf('(') + 1, category.indexOf(':'));

    this.logger = getLogger(category);
    this.conn = {};

    Pool.getConnection().then((conn) => {
      this.conn = conn;
    }).catch(err => {
      this.logger.error(err);
      process.exit(1);
    });
  }
};
