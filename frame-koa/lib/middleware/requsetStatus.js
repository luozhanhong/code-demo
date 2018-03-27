const LOGGER = getLogger(__filename);

/**
 * circulate size
 */
function circulateSize(size) {
  const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = parseInt(Math.floor(Math.log(size) / Math.log(1024)), 10);
  return `${Math.floor(size / (1024 ** i))} ${sizes[i]}`;
}

module.exports = () => async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const cost = new Date().getTime() - start;
  LOGGER.info(`${ctx.method} ${ctx.path} ${ctx.status} ${cost < 100000 ? `${cost}ms` : `${Math.round(cost / 1000)}s`}`);
  if (G.config.requestLog) {
    LOGGER.debug(`request: ${JSON.stringify(ctx.params)}`);
    LOGGER.debug(`response, size: ${circulateSize(JSON.stringify(ctx.body || '').length)}, data: ${JSON.stringify(ctx.body)}`);
  }
};
