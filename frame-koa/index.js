global.AppDir = __dirname;
require('./src/bootstrap/globals');
const logger = getLogger();

const Koa = require('koa');
const Route = require('koa-router');
const bodyParser = require('koa-bodyparser');
// const convert = require('koa-convert');

const app = new Koa();
const route = new Route();

const test = require('./src/controller/test');

app.use(bodyParser());

app.use(async (ctx, next) => {
  // const start =
  logger.info(`${ctx.request.method} ${ctx.request.url} ...`);
  await next();
});

route.get('/', test);

app.use(route.routes());

app.listen(3000, () => {
  logger.info('server start on http://127.0.0.1:3000');
});
