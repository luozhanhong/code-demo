module.exports = class extends G.Controller {
  get() {
    this.logger.info('this is test');
    return 'test';
  }
};
