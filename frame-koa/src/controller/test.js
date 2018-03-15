const looger = getLogger(__filename);

module.exports = (ctx) => {
  ctx.response.body = 'test';
  looger.info('test');
};
