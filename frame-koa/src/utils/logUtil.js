// 日志工具
const log4js = require('log4js');
const filesystem = require('./filesystem');

// 判断如果是windows系统，移除写文件的代码

module.exports = (obj) => {
  let category = 'unkonwn';
  if (obj) {
    let arr = [];
    if (filesystem.isWindows()) {
      arr = obj.split('\\');
    } else {
      arr = obj.split('/');
    }
    const str = arr[arr.length - 1];
    if (str && str.indexOf('-') <= -1) {
      category = str;
    }
    category = category.replace('.js', '');
  }

  // 加载日志配置
  const log4config = require('../config/log4js')(category);
  log4js.configure(log4config);
  return log4js.getLogger(category);
};
