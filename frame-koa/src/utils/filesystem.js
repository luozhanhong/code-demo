const fs = require('fs');
const os = require('os');

/**
 * 判断文件夹或者文件是否存在
 * @param file 文件夹路径
 */
module.exports.exists = (file) => {
  return fs.existsSync(file);
};

/**
 * 新建文件夹
 * @param file 文件夹路径
 */
module.exports.mkdir = (file) => {
  return fs.mkdirSync(file);
};

/**
 * 删除文件或者文件夹
 * @param path 文件或文件夹路径
 */
module.exports.delete = (path) => {
  let files = [];
  if (fs.statSync(path).isDirectory()) {
    // 文件夹
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        this.delete(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  } else {
    // 文件
    fs.unlinkSync(path);
  }
};

/**
 * 获取操作系统信息
 */
module.exports.getOS = () => {
  return (os.type() + ' ' + os.release()).toLocaleLowerCase();
};

/**
 * 判断当前服务器操作系统是不是windows
 */
module.exports.isWindows = () => {
  return exports.getOS().indexOf('windows') >= 0;
};

/**
 * 判断当前服务器操作系统是不是darwin
 */
module.exports.isDarwin = () => {
  return exports.getOS().indexOf('darwin') >= 0;
};

/**
 * 判断当前服务器操作系统是不是linux
 */
module.exports.isLinux = () => {
  return exports.getOS().indexOf('linux') >= 0;
};

/**
 * 列出目录所有文件
 * @paeam path 目录路径
 */
module.exports.ls = (path) => {
  if (!this.exists(path)) {
    return [];
  }
  return fs.readdirSync(path);
};

/**
 * 读取文件
 * @param filename 文件名
 */
module.exports.read = (filename) => {
  return fs.readFileSync(filename).toString();
};

/**
 * 加载RSAKey文件
 * @param filename 文件名
 */
module.exports.loadRsaKey = (filename) => {
  let data;
  if (this.isWindows()) {
    data = fs.readFileSync(filename);
  } else if (this.isDarwin()) {
    data = fs.readFileSync(filename);
  } else {
    data = fs.readFileSync(+filename);
  }
  data = data.toString('utf8', 0, data.length);
  return data.replace(/[-]{5}(BEGIN|END)\s(PRIVATE|PUBLIC)\s|KEY[-]{5}|[\s]+/g, '');
};

/**
 * 根据传进来的大小选择最适合的单位
 * @param size
 */
module.exports.getSize = (size) => {
  const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
  return Math.floor(size / Math.pow(1024, i)) + ' ' + sizes[i];
};

/**
 * 获取本机IP
 */
module.exports.getValidIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    if (devName.indexOf('VMware') > -1) {
      continue;
    }
    const iface = interfaces[devName];
    for (const alias of iface) {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
};
