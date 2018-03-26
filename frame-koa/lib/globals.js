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
}

global.G.Mongooes = require('./extend/mongooes');
global.G.Service = require('./extend/service');
global.G.Controller = require('./extend/controller');
