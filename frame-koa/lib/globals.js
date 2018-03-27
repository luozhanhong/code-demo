const fs = require('fs');
const path = require('path');
const logger = require('./plugin/logger');

/**
 * get a logger
 * @param filename
 * @returns {Logger}
 */
global.getLogger = (filename = '') => {
  const channel = filename.replace(G.ROOT_PATH, '').replace('.js', '').trim();
  return logger.getLogger(channel.split(path.sep).filter(v => !!v).join('.'));
};

/**
 * get a model
 * @param modelName
 */
global.getModel = (modelName) => {
  const modelPath = path.join(G.APP_PATH, 'model', modelName);
  if (!fs.existsSync(modelPath)) {
    throw new Error(`${modelName} model not find!`);
  }
  const Model = require(modelPath);
  return new Model();
};

/**
 * get a controller
 * @param path
 */
global.getController = function (path) {
  // if path is empty, require base controller
  const controllerPath = path || path.join(G.ROOT_PATH, 'lib', 'extend', 'controller');
  return require(controllerPath) || null;
};

global.G.AppError = require('./extend/apperror');
// global.G.Mysql2 = require('./extend/mysql2');
global.G.Mongooes = require('./extend/mongooes');
global.G.Service = require('./extend/service');
global.G.Controller = require('./extend/controller');
