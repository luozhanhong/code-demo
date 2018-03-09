global.AppDir = __dirname;

const LOGGER = require('./src/utils/logUtil')(__filename);

const Koa = require('koa');
const Route = require('koa-router');
const bodyParser = require('koa-bodyparser');
// const convert = require('koa-convert');
// const otherParser = require('koa-better-body');

const app = new Koa();
const route = new Route();

const test = require('./src/controller/test');

app.use(bodyParser());
// app.use(convert(otherParser()));

app.use(async (ctx, next) => {
  LOGGER.debug(`Process ${ctx.request.method} ${ctx.request.url} ...`);
  await next();
});

route.get('/', test);

app.use(route.routes());

app.listen(3000, () => {
  LOGGER.info('server start on http://127.0.0.1:3000');
});
