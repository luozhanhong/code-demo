/**
 * http客户端
 */
import logger from "../util/logUtil";
import request from "request";
import fs from "fs";
const LOGGER = logger.getLogger(module.filename);

module.exports = {
	/**
	 * post获取数据(异步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	post: function (url, data) {
		try {
			request.post({url: url, form: data}, function (err, httpResponse, body) {
				LOGGER.warn(body);
			});
		} catch (e) {
			LOGGER.error(e);
		}
	},
	/**
	 * post获取数据(同步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	postAsync: function (url, data) {
		return new Promise(function (resolve, reject) {
			request.post({url: url, form: data}, function (err, httpResponse, body) {
				if (err) {
					reject(err);
					return;
				}
				resolve(body);
			})
		}).catch(function (e) {
			LOGGER.error(e);
		});
	},
	/**
	 * get获取数据(异步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	get: function (url, data) {
		try {
			url += '?';
			_.forEach(data, function (v, k) {
				url += k + '=' + v + '&';
			});
			request.get({url: url, form: data}, function (err, httpResponse, body) {
				LOGGER.warn(body);
			});
		} catch (e) {
			LOGGER.error(e);
		}
	},
	/**
	 * get获取数据(同步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	getAsync: function (url, data) {
		url += '?';
		_.forEach(data, function (v, k) {
			url += k + '=' + v + '&';
		});
		return new Promise(function (resolve, reject) {
			request.get({url: url, form: data}, function (err, httpResponse, body) {
				if (err) {
					reject(err);
					return;
				}
				resolve(body);
			})
		}).catch(function (e) {
			LOGGER.error(e);
		});
	},
	/**
	 * put获取数据(异步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	put: function (url, data) {
		try {
			request.put({url: url, form: data}, function (err, httpResponse, body) {
				LOGGER.warn(body);
			});
		} catch (e) {
			LOGGER.error(e);
		}
	},
	/**
	 * put获取数据(同步版)
	 * @param url 请求地址
	 * @param data 请求数据
	 */
	putAsync: function (url, data) {
		return new Promise(function (resolve, reject) {
			request.put({url: url, form: data}, function (err, httpResponse, body) {
				if (err) {
					reject(err);
					return;
				}
				resolve(body);
			})
		}).catch(function (e) {
			LOGGER.error(e);
		});
	},
	/**
	 * 下载文件
	 * @param uri 文件网络地址
	 * @param filename 文件本地地址
	 */
	downloadFile: function (uri, filename) {
		return new Promise(function (resolve, reject) {
			var stream = fs.createWriteStream(filename);
			request(uri).pipe(stream).on('close', function () {
				resolve(filename);
			});
		}).catch(function (e) {
			LOGGER.error(e);
		});
	}
};