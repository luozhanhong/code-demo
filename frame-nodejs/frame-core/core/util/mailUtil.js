// 邮件工具
import nodemailer from "nodemailer";
const LOGGER = logUtil.getLogger(module.filename);

// 邮件配置
const smtpConfig = {
	pool: true,
	host: properties['mail.smtp.host'],
	port: properties['mail.smtp.port'],
	secure: properties['mail.smtp.ssl.enable'], // use SSL
	auth: {
		user: properties['mail.sender.user'],
		pass: properties['mail.sender.pass']
	}
};

// 初始化邮件
const transporter = nodemailer.createTransport(smtpConfig);
// replace(/<!?\/?[a-zA-Z]+[^><]*>/g,'').trim()
/*
* attachments: [
 fileName: "logo.png"
 filePath: "./public/images/email/logo.png"
 cid: "logo@myapp"
 ]
* */
module.exports = {
	/**
	 * 发送文本邮件
	 * @param title 邮件标题
	 * @param content 邮件内容(自动识别是普通文本还是HTML文本)
	 * @param to 收件者列表
	 */
	send: function (title, content, ...to) {
		let toList = '';
		for (let i in to) {
			toList += to[i];
			toList += ',';
		}
		toList = toList.substring(0, toList.length - 1);
		let mailOptions = {};
		mailOptions.from = '"' + properties['mail.smtp.alias'] + '" <' + properties['mail.sender.user'] + '>';
		mailOptions.to = toList;
		mailOptions.subject = title;

		// 如果经过html过滤之后不等于它本身，就是html文本
		if (content !== content.replace(/<!?\/?[a-zA-Z]+[^><]*>/g, '').trim()) {
			mailOptions.html = content;
		} else {
			mailOptions.text = content;
		}
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				throw new Error(error);
			}
			LOGGER.warn('message send success: %s', JSON.stringify(info));
		});
	}
};