const LOGGER = getLogger(__filename);
const fs = require('fs');
const path = require('path');
module.exports = () => async (ctx, next) => {
  const nowTime = new Date().getTime();
  try {
    ctx.params = Object.assign({}, ctx.request.query, ctx.request.body);

    const ctxPath = ctx.path.replace(new RegExp(/(\/){2,}/g), '/');
    const arr = ctxPath.split('/').filter(v => !!v);
    // 没路由
    if (arr.length == 0) {
      ctx.status = 200;
      ctx.body = { code: 0, data: {}, time: nowTime };
      return next();
    }
    let action = arr.splice(-1, 1)[0];
    let filename = arr.splice(-1, 1)[0];
    // 只有一层路由，当成restful处理
    if (!filename) {
      filename = action;
      action = ctx.request.method;
    }
    // not restful
    const controllerPath = path.join(G.APP_PATH, 'controller', ...arr, `${filename}.js`);
    const controllerName = controllerPath.replace(G.ROOT_PATH, '').replace('.js', '').trim().split(path.sep).filter(v => !!v).join('.');
    if (!fs.existsSync(controllerPath)) {
      ctx.status = 404;
      G.config.requestLog && LOGGER.warn(`controller ${controllerName} not exists!`);
      return next();
    }
    const controller = new (getController(controllerPath))(ctx);
    if (typeof controller[action] !== 'function') {
      ctx.status = 404;
      G.config.requestLog && LOGGER.warn(`action ${controllerName}.${action}() not exists`);
      return next();
    }

    const result = await controller[action]();
    ctx.status = 200;
    if (ctx.oneOwn) {
      ctx.body = result;
      return next();
    }
    if (result === undefined || result === null) {
      ctx.body = { code: 0, data: {}, time: nowTime };
      return next();
    }
    ctx.body = { code: 0, data: result, time: nowTime };
    return next();
  } catch (err) {
    if (err instanceof G.AppError) {
      LOGGER.warn(err);
      ctx.body = { code: err.code || 1, msg: err.msg, time: nowTime };
      ctx.status = 200;
    } else {
      LOGGER.error(err);
      ctx.status = 500;
    }
    return next();
  }
};
// module.exports = () => async (ctx, next) => {
//   // 在它之后注册的中间件的next后的执行比它先
//   return next().then(async () => {
//     logger.info('route begin');
//   });
// }
