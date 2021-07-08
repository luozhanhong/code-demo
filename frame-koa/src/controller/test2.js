module.exports = class extends G.Controller {
  get() {
    this.logger.info('this is test');
    return 'get2';
  }
  GET() {
    this.logger.info('this is test');
    return 'GET2';
  }
};