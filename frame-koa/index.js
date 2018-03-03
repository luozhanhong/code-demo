global.AppDir = __dirname;

const LOGGER = require('./src/utils/logUtil')(__filename);

const Koa = require('koa');
const app = new Koa();

const test = require('./src/controller/test');
app.use(test);

app.listen(3000, () => {
  LOGGER.info('server start on http://127.0.0.1:3000');
});
