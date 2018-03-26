module.exports = class {
  constructor(ctx) {
    this.ctx = ctx;
    this.restful = false;

    let category = (new Error()).stack.split('\n')[2];
    category = category.substring(category.indexOf('(') + 1, category.indexOf(':'));
    this.logger = getLogger(category);
  }
};
