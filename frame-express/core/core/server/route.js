const logger = require('../util/logUtil');
const filesystem = require('../util/filesystem');
const fs = require('fs');
const LOGGER = logger.getLogger(module.filename);

/**
 * 扫描controller包，构建路由列表
 */
module.exports = function () {
  let path = AppDir + '/controller';
  let fileList = filesystem.ls(path);
  let route = {};
  let urlMap = {};
  fileList.forEach(function (item) {
    let file = path + "/" + item;
    let stats = fs.statSync(file);
    if (!stats.isDirectory()) {
      let controller = require(file);
      _.forEach(controller, function (v_map, k_funcName) {
        let funObj = v_map.func;
        if (_.isFunction(funObj)) {
          let url = v_map.url;
          let method = v_map.method.toString().toLowerCase();
          //检查url不能为空
          if (!url) {
            process.exit();
          }
          if (urlMap[url] == url) {
            process.exit();
          }
          route[url] = v_map;
          urlMap[url] = url;
          LOGGER.info('request mapping url: [%s], method: [%s] on %s function %s()', url, method, file, k_funcName);
        }
      });
    }
  });
  return route;
};

