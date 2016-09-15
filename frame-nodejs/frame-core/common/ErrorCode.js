// 错误码
// 格式：3001001(abbbccc)
// a：固定编号
// b：模块编号
// c：错误编号
var errorCode = function (errorCode, errorMessage) {
	return {
		errorCode: errorCode,
		errorMessage: errorMessage
	}
};

module.exports = {
	/**
	 * 系统模块
	 */
	systemError: {
		/**
		 * sign错误(1001001)
		 */
		signError: errorCode(1001001, "sign错误"),
		/**
		 * 接口超时(1001002)
		 */
		timeOut: errorCode(1001002, "接口超时"),
		/**
		 * 请求参数错误(1001003)
		 */
		parameterError: errorCode(1001003, "请求参数错误"),
		/**
		 * 系统未知错误(1001004)
		 */
		unknowError: errorCode(1001004, "系统代码错误"),
		/**
		 * 图片没有上传(1001005)
		 */
		imageNullError: errorCode(1001005, "图片没有上传"),
		/**
		 * 亲,你的版本太旧了,快去更新吧！(1001006)
		 */
		versionOldError: errorCode(1001006, "亲，你的版本太旧了，快去更新吧！"),
		/**
		 * 您未登录(1001007)
		 */
		noLoginError: errorCode(1001007, "亲爱的用户，您尚未登录！")
	},
	/**
	 * 充值支付模块(1002001)
	 */
	payError: {
		/**
		 * 套餐不存在(1002001)
		 */
		chargeCompanyNotExists: errorCode(1002001, "套餐不存在"),
		/**
		 * 订单已过期(1002002)
		 */
		orderTimeOut: errorCode(1002002, "订单已过期")
	},
	/**
	 * 用户模块
	 */
	userError: {
		/**
		 * 错误的手机号码(2001001)
		 */
		mobileError: errorCode(2001001, "错误的手机号码"),
		/**
		 * 您的操作太快啦
		 */
		operatingTooFast: errorCode(2001002, "您的操作太快啦"),
		/**
		 * 验证码超时(2001003)
		 */
		verifyCodeTimeout: errorCode(2001003, "验证码超时"),
		/**
		 * 验证码错误(2001004)
		 */
		verifyCodeError: errorCode(2001004, "验证码错误"),
		/**
		 * 验证码错误(2001005)
		 */
		sexError: errorCode(2001005, "用户性别错误"),
		/**
		 * 错误的qq(2001006)
		 */
		qqError: errorCode(2001006, "错误的qq"),
		/**
		 * 错误的微信(2001007)
		 */
		wechatError: errorCode(2001007, "错误的微信"),
		/**
		 * 错误的微博(2001008)
		 */
		weiboError: errorCode(2001008, "错误的微博"),
		/**
		 * 错误的openid(2001009)
		 */
		openidError: errorCode(2001009, "错误的openid"),
		/**
		 * 错误的昵称(2001010)
		 */
		nicknameError: errorCode(2001010, "错误的昵称"),
		/**
		 * 昵称已经被使用(2001011)
		 */
		nicknameOnlyError: errorCode(2001011, "昵称已经被使用"),
		/**
		 * 用户不存在(2001012)
		 */
		userNotExists: errorCode(2001012, "用户不存在"),
		/**
		 * 用户关注该企业(2001013)
		 */
		userHasFocusCpmpany: errorCode(2001013, "用户已关注该企业"),
		/**
		 * 用户关注企业失败(2001014)
		 */
		userFocusCompanyError: errorCode(2001014, "用户关注企业失败"),
		/**
		 * 关注用户失败(2001015)
		 */
		userFocusError: errorCode(2001015, "关注用户失败"),
		/**
		 * 密码错误(2001016)
		 */
		passwordError: errorCode(2001016, "密码错误"),
		/**
		 * 生日大于当前时间(2001017)
		 */
		birthdayError: errorCode(2001017, "生日大于当前时间"),
		/**
		 * 手机已经被使用(2001018)
		 */
		mobileOnlyError: errorCode(2001018, "手机已经被使用"),
		/**
		 * 错误的省份id(2001019)
		 */
		provinceIdError: errorCode(2001019, "错误的省份id"),
		/**
		 * 错误的城市id(2001020)
		 */
		cityIdError: errorCode(2001020, "错误的城市id"),
		/**
		 * 错误的一句话亮身份(2001021)
		 */
		identityError: errorCode(2001021, "错误的一句话亮身份"),
		/**
		 * 您的帐号已在另外一台设备登录，请及时修改您的密码(2001022)
		 */
		otherLoginError: errorCode(2001022, "您的帐号已在另外一台设备登录，请及时修改您的密码"),
		/**
		 * 用户未关注该企业(2001023)
		 */
		userHasNotFocusCpmpany: errorCode(2001023, "用户未关注该企业"),
		/**
		 * 用户取消关注企业失败(2001024)
		 */
		userUnFocusCompanyError: errorCode(2001024, "用户取消关注企业失败"),
		/**
		 * 微信号已经被绑定(2001025)
		 */
		wechatIsBindError: errorCode(2001025, "你的微信已经被绑定，请通过意见反馈联系我们。"),
		/**
		 * 微信未绑定(2001026)
		 */
		wechatNotBindError: errorCode(2001026, "微信未绑定"),
		/**
		 * G点小于设定值无法提现(2001027)
		 */
		checkoutLimitError: errorCode(2001027, "G点小于设定值无法提现"),
		/**
		 * 提现失败(2001028)
		 */
		checkoutError: errorCode(2001028, "提现失败"),
		/**
		 * 你已经关注此用户(2001029)
		 */
		userHasFocusError: errorCode(2001029, "你已经关注此用户"),
		/**
		 * 用户不匹配(2001030)
		 */
		userNotEqual: errorCode(2001030, "用户不匹配"),
		/**
		 * 用户实名认证已通过(2001031)
		 */
		userIsProve: errorCode(2001031, "用户实名认证已通过"),
		/**
		 * 你还没关注此用户(2001032)
		 */
		userHasNotFocusError: errorCode(2001032, "你还没关注此用户"),
		/**
		 * 取消关注用户失败(2001033)
		 */
		userUnFocusError: errorCode(2001033, "取消关注用户失败"),
		/**
		 * 请先通过实名认证(2001034)
		 */
		userNotIsProve: errorCode(2001034, "请先通过实名认证"),
		/**
		 * 临时错误码(2001035)
		 */
		userTemporaryError: errorCode(2001035, "很抱歉，您今天没有抢到卡位名额... 可以明天再试！ 或待全面更新2.0版本时再行注册～您没注册奖品是不会随便送出的喔！"),
		/**
		 * 今天支付密码累计输错5次，钱包冻结一天(2001036)
		 */
		paymentPasswordFrozen: errorCode(2001036, "今天支付密码累计输错5次，钱包冻结一天，请明天再试！"),
		/**
		 * 支付密码错误(2001037)
		 */
		paymentPasswordError: errorCode(2001037, "支付密码错误"),
		/**
		 * 最少提现100G点(2001038)
		 */
		checkoutMinError: errorCode(2001038, "最少提现100G点"),
		/**
		 * 支付密码未设置(2001039)
		 */
		paymentPasswordNotSetError: errorCode(2001039, "支付密码未设置"),
		/**
		 * 重复关注别人会给对方造成骚扰(2001040)
		 */
		repeatFocusUserError: errorCode(2001040, "重复关注别人会给对方造成骚扰！"),
		/**
		 * 最多提现2000000G点(2001041)
		 */
		checkoutMaxError: errorCode(2001041, "最多提现2000000G点"),
		/**
		 * 剩余的G点不足(2001042)
		 */
		gpointsNotEnoughError: errorCode(2001042, "剩余的G点不足"),
		/**
		 * 不可以关注自己(2001043)
		 */
		canNotFocusYourselfError: errorCode(2001043, "不可以关注自己"),
		/**
		 * 不可以取消关注自己(2001044)
		 */
		canNotUnFocusYourselfError: errorCode(2001044, "不可以取消关注自己"),
		/**
		 * 您未设置收货地址(2001045)
		 */
		userAddressNotExistsError: errorCode(2001045, "用户未设置收货地址"),
		/**
		 * 您已经输入过优惠码(2001046)
		 */
		userHasUseDiscount: errorCode(2001046, "您已经输入过优惠码"),
		/**
		 * 优惠码不存在(2001047)
		 */
		userCodeNotExists: errorCode(2001047, "优惠码不存在"),
		/**
		 * 您不能输入自己的优惠码(2001048)
		 */
		userCanNotInputYourselfCode: errorCode(2001048, "您不能输入自己的优惠码"),
		/**
		 * 微博已经被绑定(2001049)
		 */
		weiboIsBindError: errorCode(2001049, "你的微博已经被绑定，请通过意见反馈联系我们。"),
		/**
		 * 微博未绑定(2001050)
		 */
		weiboNotBindError: errorCode(2001050, "微博未绑定"),
		/**
		 * QQ号已经被绑定(2001051)
		 */
		qqIsBindError: errorCode(2001051, "你的QQ已经被绑定，请通过意见反馈联系我们。"),
		/**
		 * QQ未绑定(2001052)
		 */
		qqNotBindError: errorCode(2001052, "QQ未绑定"),
		/**
		 * 用户输入的内容超过15个字(2001053)
		 */
		inputLagerThan15Error: errorCode(2001053, "您输入的内容超过15个字符"),
		/**
		 * 错误的用户职业(2001054)
		 */
		jobError: errorCode(2001054, "错误的用户职业"),
		/**
		 * 错误的用户特长(2001055)
		 */
		specialtyError: errorCode(2001055, "错误的用户特长"),
		/**
		 * 帐号被封(2001056)
		 */
		UserAcountBanError: errorCode(2001056, "您的帐号已被封！如有疑问请联系客服QQ：2655142901"),
		/**
		 * 错误的用户兴趣领域(2001057)
		 */
		interestError: errorCode(2001057, "错误的用户特长"),
		/**
		 * 对不起，您的等级尚未开放此功能(2001058)
		 */
		noPermissionError: errorCode(2001058, "对不起，您的等级尚未开放此功能"),
		/**
		 * 用户未注册(2001059)
		 */
		userNoReg: errorCode(2001059, "您尚未注册，请先注册再来登录吧！"),
		/**
		 * 用户token失效(2001060)
		 */
		userTokenInvalid: errorCode(2001060, "用户token失效"),
		/**
		 * 此手机号已绑定(2001061)
		 */
		mobileIsBindError: errorCode(2001061, "此手机号已绑定")
	},
	/**
	 * 企业模块
	 */
	companyError: {
		/**
		 * 企业名字已被使用(2003001)
		 */
		companyOnlyError: errorCode(2003001, "企业名字已被使用"),
		/**
		 * 企业不存在(2003002)
		 */
		companyNotExists: errorCode(2003002, "企业不存在"),
		/**
		 * 企业充值套餐已下架(2003003)
		 */
		chargeCompanyIsTimeOut: errorCode(2003003, "企业充值套餐已下架"),
		/**
		 * 邮箱已被注册(2003004)
		 */
		emailOnlyError: errorCode(2003004, "邮箱已被注册"),
		/**
		 * 企业名称已被注册(2003005)
		 */
		nameOnlyError: errorCode(2003005, "企业名称已被注册"),
		/**
		 * 企业注册失败(2003006)
		 */
		companyRegError: errorCode(2003006, "企业注册失败"),
		/**
		 * 企业token失效(2003007)
		 */
		companyTokenInvalid: errorCode(2003007, "企业token失效"),
		/**
		 * 您的帐号已在另外一台设备登录，请及时修改您的密码(2003008)
		 */
		otherLoginError: errorCode(2003008, "您的帐号已在另外一台设备登录，请及时修改您的密码"),
		/**
		 * 账号密码错误(2003009)
		 */
		accountPasswordError: errorCode(2003009, "账号密码错误")
	}
	,
	/**
	 * 创意人模块
	 */
	userCreativeError: {
		/**
		 * 创意人不存在(3001001)
		 */
		userNotExists: errorCode(3001001, "创意人不存在"),
		/**
		 * 密码错误(3001002)
		 */
		passwordError: errorCode(3001002, "密码错误"),
		/**
		 * 您的操作太快啦(3001003)
		 */
		operatingTooFast: errorCode(3001003, "您的操作太快啦"),
		/**
		 * 验证码超时(3001004)
		 */
		verifyCodeTimeout: errorCode(3001004, "验证码超时"),
		/**
		 * 验证码错误(3001005)
		 */
		verifyCodeError: errorCode(3001005, "验证码错误"),
		/**
		 * 被回复的用户不存在(3001006)
		 */
		replyUserNotExists: errorCode(3001006, "被回复的用户不存在")
	}
	,
	/**
	 * 项目模块
	 */
	projectError: {
		/**
		 * 项目不存在(3002001)
		 */
		projectNotExists: errorCode(3002001, "项目不存在"),
		/**
		 * 项目已过期(3002002)
		 */
		projectOvertime: errorCode(3002002, "项目已过期"),
		/**
		 * 项目调研阶段已结束(3002003)
		 */
		projectResearchOver: errorCode(3002003, "项目调研阶段已结束"),
		/**
		 * 项目创意阶段已结束(3002004)
		 */
		projectIdeaOver: errorCode(3002004, "项目创意阶段已结束")
	}
	,
	/**
	 * 点子模块
	 */
	ideaError: {
		/**
		 * 点子不存在(3003001)
		 */
		ideaNotExists: errorCode(3003001, "点子不存在"),
		/**
		 * 点子用户不匹配(3003002)
		 */
		ideaUserNotEqual: errorCode(3003002, "点子用户不匹配"),
		/**
		 * 点子已点赞(3003003)
		 */
		isPraiseError: errorCode(3003003, "点子已点赞"),
		/**
		 * 点子没有点赞(3003004)
		 */
		notPraiseError: errorCode(3003004, "点子没有点赞"),
		/**
		 * 点子评论不存在(3003005)
		 */
		ideaCommentNotExists: errorCode(3003005, "点子评论不存在")
	}
	,
	/**
	 * 资料调研模块
	 */
	researchError: {
		/**
		 * 资料不存在(3004001)
		 */
		researchNotExists: errorCode(3004001, "资料不存在")
	}
}
;