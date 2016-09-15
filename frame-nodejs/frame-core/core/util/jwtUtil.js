// 邮件工具
import jwt from "jsonwebtoken";

// 加密选项
let options = {algorithm: 'HS512'};

module.exports = {
	/**
	 * 加密
	 * @param data 要加密的数据
	 */
	sign: function (data) {
		return jwt.sign(data, properties['system.key'], options);
	},
	/**
	 * 解密
	 * @param data 要解密的数据
	 */
	verify: function (data) {
		data = jwt.decode(data, options);
		delete data['iat'];
		return data;
	}
};