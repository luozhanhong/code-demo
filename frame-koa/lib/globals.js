const fs = require('fs');
const path = require('path');
const logger = require('./plugin/logger');

// 初始化配置
global.G.config = require('./config');

global.G.Mongooes = require('./extend/mongooes');
global.G.Service = require('./extend/service');
global.G.Controller = require('./extend/controller');

/**
 * get a logger
 * @param filename
 * @returns {Logger}
 */
global.getLogger = (filename = '') => {
  const channel = filename.replace(/.*src/, '').replace('.js', '').trim();
  return logger.getLogger(channel.substring(1).split(path.sep).filter(v => !!v).join('.'));
};

/**
 * get a model
 * @param modelName
 */
global.getModel = (modelName) => {
  const modelPath = `${G.APP_PATH}${path.sep}model${path.sep}${modelName}`;
  if (!fs.existsSync(modelPath)) {
    throw new Error(`${modelName} model not find!`);
  }
  const Model = require(modelPath);
  return new Model();
}
