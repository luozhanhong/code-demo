import fs from "fs";
import os from "os";

/**
 * 判断文件夹或者文件是否存在
 * @param file 文件夹路径
 */
module.exports.exists = function (file) {
	return fs.existsSync(file);
};

/**
 * 新建文件夹
 * @param file 文件夹路径
 */
module.exports.mkdir = function (file) {
	return fs.mkdirSync(file);
};

/**
 * 删除文件或者文件夹
 * @param path 文件或文件夹路径
 */
module.exports.delete = function (path) {
	var files = [];
	if (fs.statSync(path).isDirectory()) {
		// 文件夹
		files = fs.readdirSync(path);
		files.forEach(function (file, index) {
			let curPath = path + "/" + file;
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
module.exports.getOS = function () {
	return (os.type() + ' ' + os.release()).toLocaleLowerCase();
};

/**
 * 判断当前服务器操作系统是不是windows
 */
module.exports.isWindows = function () {
	return exports.getOS().indexOf('windows') >= 0;
};

/**
 * 判断当前服务器操作系统是不是darwin
 */
module.exports.isDarwin = function () {
	return exports.getOS().indexOf('darwin') >= 0;
};

/**
 * 判断当前服务器操作系统是不是linux
 */
module.exports.isLinux = function () {
	return exports.getOS().indexOf('linux') >= 0;
};

/**
 * 列出目录所有文件
 * @paeam path 目录路径
 */
module.exports.ls = function (path) {
	if (!this.exists(path)) {
		return [];
	}
	return fs.readdirSync(path);
};

/**
 * 读取文件
 * @param filename 文件名
 */
module.exports.read = function (filename) {
	return fs.readFileSync(filename).toString();
};

/**
 * 加载properties文件
 * @param filename 文件名
 */
module.exports.loadProperties = function (filename) {
	let data;
	let properties = {};
	if (this.isWindows()) {
		data = fs.readFileSync(__dirname + '/../../../../gu-core/src/resources/' + filename);
	} else if (this.isDarwin()) {
		data = fs.readFileSync(__dirname + '/../../../../gu-core/src/resources/' + filename);
	} else {
		data = fs.readFileSync(__dirname + '/../../../../etc/' + filename);
	}
	data = data.toString('utf8', 0, data.length);
	let array = data.split('\n');
	for (let i in array) {
		let str = array[i].toString();
		if (parseInt(str.indexOf('#')) > -1) {
			continue;
		}
		let index = parseInt(str.indexOf('='));
		if (index <= -1) {
			continue;
		}
		let key = str.substring(0, index).toString().trim();
		let value = str.substring(index + 1).toString().trim();
		properties[key] = value;
	}
	return properties;
};

/**
 * 加载json文件
 * @param filename 文件名
 */
 module.exports.loadJSONFile = function (filename) {
	let data;
	let array;
	if (filesystem.isWindows()) {
		data = fs.readFileSync(CoreDir + '/../gu-core/src/resources/' + filename);
		array = data.toString();
	} else if (filesystem.isDarwin()) {
		data = fs.readFileSync(CoreDir + '/../gu-core/src/resources/' + filename);
		data = data.toString('utf8', 0, data.length);
		array = data.toString();
	} else {
		data = fs.readFileSync(CoreDir + '/../etc/' + filename);
		array = data.toString();
	}
	return JSON.parse(array);
};

/**
 * 加载RSAKey文件
 * @param filename 文件名
 */
module.exports.loadRsaKey = function (filename) {
	let data;
	if (this.isWindows()) {
		data = fs.readFileSync(__dirname + '/../../../../gu-core/src/resources/' + filename);
	} else if (this.isDarwin()) {
		data = fs.readFileSync(__dirname + '/../../../../gu-core/src/resources/' + filename);
	} else {
		data = fs.readFileSync(__dirname + '/../../../../etc/' + filename);
	}
	data = data.toString('utf8', 0, data.length);
	return data.replace(/[\-]{5}(BEGIN|END)\s(PRIVATE|PUBLIC)\s|KEY[\-]{5}|[\s]+/g, "");
};

/**
 * 根据传进来的大小选择最适合的单位
 * @param size
 */
module.exports.getSize = function (size) {
	let sizes = new Array("Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
	let i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
	return Math.floor(size / Math.pow(1024, i)) + " " + sizes[i];
};

/**
 * 获取本机IP
 */
module.exports.getValidIPAddress = function () {
	var interfaces = os.networkInterfaces();
	for (let devName in interfaces) {
		if (devName.indexOf('VMware') > -1) {
			continue;
		}
		let iface = interfaces[devName];
		for (let alias of iface) {
			if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
				return alias.address;
			}
		}
	}
};