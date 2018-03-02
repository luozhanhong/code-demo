// dao工程入口
global.DaoDir = __dirname;
const logger = require('../core/core/util/logUtil');
const LOGGER = logger.getLogger(module.filename);

module.exports = async function () {
  try {
    global.Path.model = {};
    global.Path.model = DaoDir + '/model';
    global.Path.dao = DaoDir + '/dao';

    // 初始化数据库链接
    global.dbService = require('./db/dbService');

    // 注入Dao全局方法
    global.requireDao = function (fileName) {
      if (!Path.dao) {
        return;
      }
      fileName = Path.dao + '/' + fileName + '.js';
      if (!filesystem.exists(fileName)) {
        LOGGER.fatal('can not find %s', fileName);
        process.exit();
        return;
      }
      return require(fileName);
    };

    // 注入T全局方法
    global.requireT = function (fileName) {
      fileName = Path.model + '/' + fileName + '.js';
      if (!filesystem.exists(fileName)) {
        LOGGER.fatal('can not find %s', fileName);
        process.exit();
        return;
      }
      return require(fileName);
    };

    LOGGER.warn('dao init...');
  } catch (e) {
    LOGGER.error(e);
    process.exit();
  }
};