const logger = getLogger(__filename);
module.exports = async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const cost = new Date().getTime() - start;
  logger.info(`${ctx.method} ${ctx.url} ${ctx.status} ${cost < 100000 ? `${cost}ms` : `${Math.round(cost / 1000)}s`}`);
};
