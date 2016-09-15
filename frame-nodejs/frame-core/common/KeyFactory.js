// redis key 工厂

const userKey = "User:";
const companyKey = "Acompany:";
const chargeLogKey = "AchargeLog:";
const userAddressKey = "AuserAddress:";
const projectKey = "Aproject:";
const projectIdeaKey = "AprojectIdea:";
const projectIdeaFileKey = "AprojectIdeaFile:";
const projectIdeaLinkKey = "AprojectIdeaLink:";
const projectIdeaAddedKey = "AprojectIdeaAdded:";
const projectResearchKey = "AprojectResearch:";
const projectIdeaCommentKey = "AprojectIdeaComment:";
const projectIdeaCommentReplyKey = "AprojectIdeaCommentReply:";
const projectResearchCommentKey = "AprojectResearchComment:";
const projectProgressKey = "AprojectProgress:";
const projectTopIdeaKey = "AprojectTopIdea:";
const superstarInfoKey = "AsuperstarInfo:";
const projectTagKey = "AprojectTag:";
const executiveUserKey = "AexecutiveUser:";
const executiveCompanyKey = "AexecutiveCompany:";
const executiveUserPackageKey = "AexecutiveUserPackage:";
const executiveCompanyPackageKey = "AexecutiveCompanyPackage:";
const executiveUserOpusKey = "AexecutiveUserOpus:";
const executiveCompanyOpusKey = "AexecutiveCompanyOpus:";
const ideaKey = "Aidea:";
const caseKey = "Acase:";
const companyTokenKey = "AcompanyToken:";
const userTokenKey = "AuserToken:";
const defineTagKey = "AdefineTag:";
const indexImageKey = "AindexImage:";
const userSettingKey = "AuserSetting:";
const userDimensionKey = "AuserDimension:";
const teambitionEmailKey = "AteambitionEmail:";
const companyMessageKey = "AcompanyMessage:";
const userMessageKey = "AuserMessage:";
const caseReport = "AcaseReport:";
const caseExecuteMediaKey = "AcaseExecuteMedia:";
const executiveRecommendKey = "AexecutiveRecommend:";
const executiveOfferKey = "AexecutiveOffer:";
const executiveTaskKey = "AexecutiveTask:";
const ideaAttachModuleKey = "AideaAttachModule:";
const executiveUserMoneyLogKey = "AexecutiveUserMoneyLog:";
const executiveCompanyMoneyLogKey = "AexecutiveCompanyMoneyLog:";
const executiveUserCommentKey = "AexecutiveUserComment:";
const executiveCompanyCommentKey = "AexecutiveCompanyComment:";
const executiveCheckoutKey = "AexecutiveCheckout:";
const openWechatKey = "AopenWechat:";
const openWeiboKey = "AopenWeibo:";
const openQqKey = "AopenQq:";
const ideaCommentKey = "AideaComment:";
const ideaCommentReplyKey = "AideaCommentReply:";
const caseProgressKey = "AcaseProgress:";

module.exports = {
	_userKey: userKey,
	_companyKey: companyKey,
	_chargeLogKey: chargeLogKey,
	_userAddressKey: userAddressKey,
	_projectKey: projectKey,
	_projectIdeaKey: projectIdeaKey,
	_projectIdeaFileKey: projectIdeaFileKey,
	_projectIdeaLinkKey: projectIdeaLinkKey,
	_projectIdeaAddedKey: projectIdeaAddedKey,
	_projectResearchKey: projectResearchKey,
	_projectIdeaCommentKey: projectIdeaCommentKey,
	_projectIdeaCommentReplyKey: projectIdeaCommentReplyKey,
	_projectResearchCommentKey: projectResearchCommentKey,
	_projectProgressKey: projectProgressKey,
	_projectTopIdeaKey: projectTopIdeaKey,
	_superstarInfoKey: superstarInfoKey,
	_projectTagKey: projectTagKey,
	_executiveUserKey: executiveUserKey,
	_executiveCompanyKey: executiveCompanyKey,
	_executiveUserPackageKey: executiveUserPackageKey,
	_executiveCompanyPackageKey: executiveCompanyPackageKey,
	_executiveUserOpusKey: executiveUserOpusKey,
	_executiveCompanyOpusKey: executiveCompanyOpusKey,
	_ideaKey: ideaKey,
	_caseKey: caseKey,
	_defineTagKey: defineTagKey,
	_indexImageKey: indexImageKey,
	_userDimensionKey: userDimensionKey,
	_teambitionEmailKey: teambitionEmailKey,
	_caseReport: caseReport,
	_caseExecuteMediaKey: caseExecuteMediaKey,
	_executiveRecommendKey: executiveRecommendKey,
	_executiveOfferKey: executiveOfferKey,
	_executiveTaskKey: executiveTaskKey,
	_companyMessageKey: companyMessageKey,
	_ideaAttachModuleKey: ideaAttachModuleKey,
	_executiveUserMoneyLogKey: executiveUserMoneyLogKey,
	_executiveCompanyMoneyLogKey: executiveCompanyMoneyLogKey,
	_executiveUserCommentKey: executiveUserCommentKey,
	_executiveCompanyCommentKey: executiveCompanyCommentKey,
	_executiveCheckoutKey: executiveCheckoutKey,
	_ideaCommentKey: ideaCommentKey,
	_ideaCommentReplyKey: ideaCommentReplyKey,
	_caseProgressKey: caseProgressKey,
	/**
	 * 用户key
	 * @param userId 用户id
	 */
	userKey: function (userId) {
		return userKey + userId;
	},
	/**
	 * 用户key
	 * @param mobile 手机号
	 */
	mobileKey: function (mobile) {
		return userKey + mobile;
	},
	/**
	 * 充值对象key
	 * @param orderId 订单号
	 */
	chargeLogKey: function (orderId) {
		return chargeLogKey + orderId;
	},
	/**
	 * 企业充值列表
	 * @param companyId
	 */
	chargeLogListKey: function (companyId) {
		// 曾用 chargeLogList: 废弃日期  2016-01-08
		return "ChargeLogList:" + companyId;
	},
	/**
	 * 用户收货地址
	 * @param userId 用户id
	 */
	userAddressKey: function (userId) {
		return userAddressKey + userId;
	},
	/**
	 * 获取验证码的key
	 * @param mobile 手机号
	 */
	verificationCodeKey: function (mobile) {
		return "verifyCode:" + mobile;
	},
	/**
	 * 统计每天可以发送的短信数量
	 * @param mobile 机号
	 */
	verificationPerDayKey: function (mobile) {
		return "verifyPerDay:" + mobile + "_" + timeUtil.date("YYYYMMDD");
	},
	/**
	 * 验证码是否可以发送key
	 * @param mobile 手机号
	 */
	verificationCodeSendKey: function (mobile) {
		return "verifySend:" + mobile;
	},
	/**
	 * 统计每个ip每天可以发送的短信数量
	 * @param ip ip地址
	 */
	verificationPerIPKey: function (ip) {
		return "verifyPerIp:" + ip + "_" + timeUtil.date("YYYYMMDD");
	},
	/**
	 * 验证码每个ip是否可以发送key
	 * @param ip ip地址
	 */
	verificationCodeSendIpKey: function (ip) {
		return "verifySendIp:" + ip;
	},
	/**
	 * 用户创意人列表
	 */
	userCreativeManListKey: function () {
		return "userCreativeMan";
	},
	/**
	 * 用户参与项目列表
	 */
	projetcUserJoinList: function (userId) {
		return "projetcUserJoinList:" + userId;
	},
	/**
	 * 企业key
	 * @param companyIdEmail
	 */
	companyKey: function (companyIdEmail) {
		return companyKey + companyIdEmail;
	},
	/**
	 * 项目key
	 * @param projectId
	 */
	projectKey: function (projectId) {
		return projectKey + projectId;
	},
	/**
	 * 进行中的项目列表
	 */
	allGoingProjectList: function () {
		return "allGoingProjectList";
	},
	/**
	 * 已结束的项目列表
	 */
	allOverProjectList: function () {
		return "allOverProjectList";
	},
	/**
	 * 项目创意
	 */
	projectIdeaKey: function (ideaId) {
		return projectIdeaKey + ideaId;
	},
	/**
	 * 项目创意文件
	 */
	projectIdeaFileKey: function (ideaFileId) {
		return projectIdeaFileKey + ideaFileId;
	},
	/**
	 * 项目创意链接
	 */
	projectIdeaLinkKey: function (ideaLinkId) {
		return projectIdeaLinkKey + ideaLinkId;
	},
	/**
	 * 创意点赞列表
	 * @param ideaId
	 */
	projectIdeaPraiseList: function (ideaId) {
		return "projectIdeaPraiseList:" + ideaId;
	},
	/**
	 * 项目创意最近更新排列
	 * @param projectId
	 * @param tagId
	 */
	projectIdeaLastEditTopKey: function (projectId, tagId) {
		tagId = parseInt(tagId);
		return "projectIdeaLastEditTopKey:" + projectId + (!tagId ? "" : "_" + tagId);

	},
	/**
	 * 项目创意点赞数排列
	 * @param projectId
	 * @param tagId
	 */
	projectIdeaPraiseTopKey: function (projectId, tagId) {
		tagId = parseInt(tagId);
		return "projectIdeaPraiseTopKey:" + projectId + (!tagId ? "" : "_" + tagId);
	},
	/**
	 * 项目创意评论数排列
	 * @param projectId
	 * @param tagId
	 */
	projectIdeaCommentNumTopKey: function (projectId, tagId) {
		tagId = parseInt(tagId);
		return "projectIdeaCommentNumTopKey:" + projectId + (!tagId ? "" : "_" + tagId);
	},
	/**
	 * 项目创意创意值排列
	 * @param projectId
	 */
	projectIdeaCreativeTopKey: function (projectId) {
		return "projectIdeaCreativeTopKey:" + projectId;
	},
	/**
	 * 项目资料key
	 * @param researchId 资源id
	 */
	projectResearchKey: function (researchId) {
		return projectResearchKey + researchId;
	},
	/**
	 * 项目资料列表key
	 * @param projectId 项目id
	 */
	projectResearchListKey: function (projectId) {
		return "projectResearchList:" + projectId;
	},
	/**
	 * 点子文件列表
	 * @param ideaId
	 */
	projectIdeaFileList: function (ideaId) {
		return "projectIdeaFileList:" + ideaId;
	},
	/**
	 * 点子链接列表
	 * @param ideaId
	 */
	projectIdeaLinkList: function (ideaId) {
		return "projectIdeaLinkList:" + ideaId;
	},
	/**
	 * 项目点子补充key
	 * @param ideaAddedId
	 */
	projectIdeaAddedKey: function (ideaAddedId) {
		return projectIdeaAddedKey + ideaAddedId;
	},
	/**
	 * 项目点子补充列表
	 * @param ideaId
	 */
	projectIdeaAddedList: function (ideaId) {
		return 'projectIdeaAddedList:' + ideaId;
	},
	/**
	 * 项目点子评论key
	 * @param ideaCommentId 项目评论id
	 */
	projectIdeaCommentKey: function (ideaCommentId) {
		return projectIdeaCommentKey + ideaCommentId;
	},
	/**
	 * 项目点子评论列表
	 * @param ideaId 项目点子id
	 */
	projectIdeaCommentList: function (ideaId) {
		return 'projectIdeaCommentList:' + ideaId;
	},
	/**
	 * 项目点子评论回复key
	 * @param ideaCommentReplyKeyId 项目点子评论回复id
	 */
	projectIdeaCommentReplyKey: function (ideaCommentReplyKeyId) {
		return projectIdeaCommentReplyKey + ideaCommentReplyKeyId;
	},
	/**
	 * 项目点子评论回复列表
	 * @param ideaCommentId 项目点子评论id
	 */
	projectIdeaCommentReplyList: function (ideaCommentId) {
		return 'projectIdeaCommentReplyList:' + ideaCommentId;
	},
	/**
	 * 项目调研资料评论
	 * @param researchCommentId 调研资料评论id
	 */
	projectResearchCommentKey: function (researchCommentId) {
		return projectResearchCommentKey + researchCommentId;
	},
	/**
	 * 项目调研资料评论列表
	 * @param researchId 资料id
	 */
	projectResearchCommentListKey: function (researchId) {
		return "projectResearchCommentList:" + researchId;
	},
	/**
	 * 项目贡献者列表
	 * @param projectId 项目id
	 */
	projectContributorListKey: function (projectId) {
		return "projectContributorList:" + projectId;
	},
	/**
	 * 项目人员key
	 * @param projectId 项目id
	 */
	projectPersonKey: function (projectId) {
		return "projectPerson:" + projectId;
	},
	/**
	 * 项目阶段列表key
	 * @param projectId 项目id
	 */
	projectProgressListKey: function (projectId) {
		return "projectProgressList:" + projectId;
	},
	/**
	 * 项目阶段key
	 * @param projectProgressId 项目阶段id
	 */
	projectProgressKey: function (projectProgressId) {
		return projectProgressKey + projectProgressId;
	},
	/**
	 * 项目获奖点子列表
	 * @param projectId 项目id
	 */
	projectTopIdeaListKey: function (projectId) {
		return "projectTopIdeaList:" + projectId;
	},
	/**
	 * 获奖点子
	 * @param id 自增id
	 */
	projectTopIdeaKey: function (id) {
		return projectTopIdeaKey + id;
	},
	/**
	 * 大咖介绍key
	 * @param userId 用户id
	 */
	superstarInfoKey: function (userId) {
		return superstarInfoKey + userId;
	},
	/**
	 * 项目标签key
	 * @param tagId 标签id
	 */
	projectTagKey: function (tagId) {
		return projectTagKey + tagId;
	},
	/**
	 * 项目标签列表key
	 * @param projectId 项目id
	 */
	projectTagListKey: function (projectId) {
		return "projectTagList:" + projectId;
	},
	/**
	 * 用户成为执行方
	 * @param userId 用户id
	 */
	executiveUserKey: function (userId) {
		return executiveUserKey + userId;
	},
	/**
	 * 企业成为执行方
	 * @param companyId 企业id
	 */
	executiveCompanyKey: function (companyId) {
		return executiveCompanyKey + companyId;
	},
	/**
	 * 用户执行方套餐列表
	 * @param userId 用户id
	 */
	executiveUserPackageListKey: function (userId) {
		return "executiveUserPackageList:" + userId;
	},
	/**
	 * 企业执行方套餐列表
	 * @param companyId 企业id
	 */
	executiveCompanyPackageListKey: function (companyId) {
		return "executiveCompanyPackageList:" + companyId;
	},
	/**
	 * 用户执行方作品列表
	 * @param userId 用户id
	 */
	executiveUserOpusListKey: function (userId) {
		return "executiveUserOpusList:" + userId;
	},
	/**
	 * 企业执行方作品列表
	 * @param companyId 企业id
	 */
	executiveCompanyOpusListKey: function (companyId) {
		return "executiveCompanyOpusList:" + companyId;
	},
	/**
	 * 用户执行方套餐
	 * @param id 自增id
	 */
	executiveUserPackageKey: function (id) {
		return executiveUserPackageKey + id;
	},

	/**
	 * 企业执行方套餐
	 * @param id 自增id
	 */
	executiveCompanyPackageKey: function (id) {
		return executiveCompanyPackageKey + id;
	},

	/**
	 * 用户执行方作品
	 * @param id 自增id
	 */
	executiveUserOpusKey: function (id) {
		return executiveUserOpusKey + id;
	},

	/**
	 * 企业执行方作品
	 * @param id 自增id
	 */
	executiveCompanyOpusKey: function (id) {
		return executiveCompanyOpusKey + id;
	},
	/**
	 * 创意key
	 * @param ideaId 创意id
	 */
	ideaKey: function (ideaId) {
		return ideaKey + ideaId;
	},
	/**
	 * caseKey
	 * @param caseId 专案id
	 */
	caseKey: function (caseId) {
		return caseKey + caseId;
	},
	/**
	 * 优惠码key
	 * @param code 优惠码
	 */
	discountCodeKey: function (code) {
		return "discountCode:" + code;
	},
	/**
	 * 优惠码列表
	 */
	discountCodeListKey: function () {
		return "discountCodeList";
	},
	/**
	 * 企业token key
	 * @param companyId 企业id
	 */
	companyTokenKey: function (companyId) {
		return companyTokenKey + companyId;
	},
	/**
	 * 用户token key
	 * @param userId 用户id
	 */
	userTokenKey: function (userId) {
		return userTokenKey + userId;
	},
	/**
	 * 自定义标签
	 * @param tagId 标签id
	 */
	defineTagKey: function (tagId) {
		return defineTagKey + tagId;
	},
	/**
	 * 用户所有专案的标签
	 * @param userId 用户id
	 */
	userCaseTagListKey: function (userId) {
		return "userCaseTagList:" + userId;
	},
	/**
	 * 用户兴趣领域标签
	 * @param userId 用户id
	 */
	userInterestTagListKey: function (userId) {
		return "userInterestTagList:" + userId;
	},
	/**
	 * 企业所有专案的标签
	 * @param companyId 企业id
	 */
	companyCaseTagListKey: function (companyId) {
		return "companyCaseTagList:" + companyId;
	},
	/**
	 * 分类首页图片列表
	 * @param indexImageType 类型
	 */
	indexImageListKey: function (indexImageType) {
		return "indexImageList:" + indexImageType;
	},
	/**
	 * 首页图片key
	 * @param indexImageId
	 */
	indexImageKey(indexImageId) {
		return indexImageKey + indexImageId;
	},
	/**
	 * 微信第三方
	 * @param userId 用户id
	 */
	openWechatKey: function (userId) {
		return openWechatKey + userId;
	},
	/**
	 * 微博第三方
	 * @param userId 用户id
	 */
	openWeiboKey: function (userId) {
		return openWeiboKey + userId;
	},
	/**
	 * QQ第三方
	 * @param userId 用户id
	 */
	openQqKey: function (userId) {
		return openQqKey + userId;
	},
	/**
	 * 微信第三方
	 * @param openId 第三方id
	 */
	openWechatListKey: function (openId) {
		return "openWechatList:" + openId;
	},
	/**
	 * 微博第三方
	 * @param openId 第三方id
	 */
	openWeiboListKey: function (openId) {
		return "openWeiboList:" + openId;
	},
	/**
	 * QQ第三方
	 * @param openId 第三方id
	 */
	openQqListKey: function (openId) {
		return "openQqList:" + openId;
	},
	/**
	 * 用户设置
	 * @param userId 用户id
	 */
	userSettingKey: function (userId) {
		return userSettingKey + userId;
	},
	/**
	 * 用户维度
	 * @param userId 用户id
	 */
	userDimensionKey: function (userId) {
		return userDimensionKey + userId;
	},
	/**
	 * teambition邮箱
	 * @param phone 用户手机
	 */
	teambitionEmailKey: function (phone) {
		return teambitionEmailKey + phone;
	},
	/**
	 * 日活跃用户列表(分时)
	 * @param date 日期
	 * @param hour 小时
	 */
	dailyActiveUserListKey: function (date, hour) {
		return "dailyActiveUserList:" + date + (hour ? "_" + hour : '');
	},
	/**
	 * 最近7天活跃用户key
	 * @author ruan
	 * @param startDate 开始日期
	 * @param endDate 结束日期
	 */
	userRecent7ActiveKey: function (startDate, endDate) {
		return "userRecent7Active:" + startDate + "_" + endDate;
	},
	/**
	 * 最近14天活跃用户key
	 * @author ruan
	 * @param startDate 开始日期
	 * @param endDate 结束日期
	 */
	userRecent14ActiveKey: function (startDate, endDate) {
		return "userRecent14Active:" + startDate + "_" + endDate;
	},
	/**
	 * 用户在线
	 * @author ruan
	 * @param time 时间(格式：yyyyMMddHHmm)
	 */
	onlineUserKey: function (time) {
		return "onlineUser:" + time;
	},
	/**
	 * 用户关注的人列表
	 * @param userId 用户id
	 */
	userFocusKey: function (userId) {
		return "userFocusList:" + userId;
	},
	/**
	 * 用户好友列表
	 * @param userId 用户id
	 */
	userFriendsKey: function (userId) {
		return "userFriendsList:" + userId;
	},
	/**
	 * 用户圈子列表
	 * @param userId 用户id
	 */
	userCircleKey: function (userId) {
		return "userCircleList:" + userId;
	},
	/**
	 * 用户粉丝列表
	 * @param userId 用户id
	 */
	userFansKey: function (userId) {
		return "userFansList:" + userId;
	},
	/**
	 * 判断用户是否可以关注某用户
	 * @param userId 关注人id
	 * @param friendId 被关注人id
	 */
	isCanFocusKey: function (userId, friendId) {
		return "isCanFocus:" + userId + "_" + friendId + "_" + timeUtil.date("YYYYMMDD");
	},
	/**
	 * 验证码key
	 * @param req 请求对象
	 */
	captchaKey: function (req) {
		return "captcha:" + req.sessionID + (req.params.ip ? '_' + req.params.ip : '');
	},
	/**
	 * 企业专案列表
	 * @param companyId 企业id
	 */
	companyCaseListKey: function (companyId) {
		if (!companyId) {
			return "companyCaseList";
		} else {
			return "companyCaseList:" + companyId;
		}
	},
	/**
	 * 企业进行中的专案列表
	 * @param companyId 企业id
	 * @param caseType 专案类型
	 */
	goingCaseListKey: function (companyId, caseType) {
		if (!caseType) {
			return "companyGoingCaseList:" + companyId;
		} else {
			return "companyGoingCaseList:" + companyId + "_" + caseType;
		}
	},
	/**
	 * 专案阶段列表key
	 * @param caseId 专案id
	 */
	caseProgressListKey: function (caseId) {
		return "caseProgressList:" + caseId;
	},
	/**
	 * 专案进度
	 * @param progressId 进度id
	 */
	caseProgressKey: function (progressId) {
		return caseProgressKey + progressId;
	},
	/**
	 * 企业报告
	 * @param reportId 报告id
	 */
	caseReportKey: function (reportId) {
		return caseReport + reportId;
	},
	/**
	 * 企业报告
	 * @param caseId 专案id
	 */
	caseReportByCaseIdKey: function (caseId) {
		return "caseReportByCaseId:" + caseId;
	},
	/**
	 * 企业报告列表(进行中)
	 * @param companyId 企业id
	 */
	caseReportGoingListKey: function (companyId) {
		return "caseReportGoingList:" + companyId;
	},
	/**
	 * 企业报告列表(已结束)
	 * @param companyId 企业id
	 */
	caseReportOverListKey: function (companyId) {
		return "caseReportOverList:" + companyId;
	},
	/**
	 * 充值企业总表
	 */
	chargeCompanyListKey: function () {
		return "chargeCompanyList";
	},
	/**
	 * 充值企业月表
	 */
	chargeCompanyMonthlyListKey: function () {
		return "chargeCompanyList:" + timeUtil.time2str(timeUtil.now(), "YYYYMM");
	},
	/**
	 * 月充值新增企业
	 */
	chargeNewCompanyMonthlyListKey: function () {
		return "chargeNewCompanyList:" + timeUtil.time2str(timeUtil.now(), "YYYYMM");
	},
	/**
	 * 企业消息体
	 * @param id 消息id
	 */
	companyMessageKey: function (id) {
		return companyMessageKey + id;
	},
	/**
	 * 企业消息列表
	 * @param companyId 企业id
	 * @param type 消息类型(大类或者小类)
	 */
	companyMessageListKey: function (companyId, type) {
		return "companyMessageList:" + companyId + "_" + type;
	},
	/**
	 * 用户消息体
	 * @param userMessageId 用户消息id
	 */
	userMessageKey: function (userMessageId) {
		return userMessageKey + userMessageId;
	},
	/**
	 * 用户消息列表
	 * @param userId 用户id
	 * @param type 消息类型
	 */
	userMessageListKey: function (userId, type) {
		return "userMessageList:" + userId + "_" + type;
	},
	/**
	 * 企业消息条数
	 * @author ruan
	 * @param companyId 企业id
	 */
	companyMessageNumKey: function (companyId) {
		return "companyMessageNum:" + companyId;
	},
	/**
	 * 用户消息条数
	 * @author luo
	 * @param userId 用户id
	 */
	userMessageNumKey: function (userId) {
		return "userMessageNum:" + userId;
	},
	/**
	 * 用户消息列表(根据分类名称取)
	 * @param userId 用户id
	 * @param classify 分类名称
	 */
	userMessageClassifyListKey: function (userId, classify) {
		return "userMessageClassifyKey:" + userId + "_" + classify;
	},
	/**
	 * 一个专案中,转发此用户的用户ID集合Sets
	 * @param caseId 专案id
	 * @param userId 用户id
	 */
	caseForwardUserIdSets: function (caseId, userId) {
		return "caseForwardUserSets:" + caseId + "_" + userId;
	},
	/**
	 * 创意ideaTimeCreativeTopKey
	 * @param caseId 专案id<br/>
	 * 新创意置顶x小时<br/>
	 * x小时内：按最新发布的点子排先<br/>
	 * x小时后：按照他的创意值大小排列<br/>
	 */
	ideaNewTimeTopKey: function (caseId) {
		return "ideaNewTimeTopKey:" + caseId;
	},
	/**
	 * 创意CreativeTopKey
	 * @param caseId 专案id
	 */
	ideaCreativeTopKey: function (caseId) {
		return "ideaCreativeTop:" + caseId;
	},
	/**
	 * 创意第n阶段CreativeTopKey
	 * @param caseId 专案id
	 * @param stage 阶段(stage不能是1)
	 */
	ideaCreativeTopStageKey: function (caseId, stage) {
		return "ideaCreativeTopStage:" + caseId + "_" + stage;
	},
	/**
	 * 创意第n阶段CreateTimeTopKey
	 * @param caseId 专案id
	 * @param stage 阶段(stage不能是1)
	 */
	ideaCreateTimeTopStageKey: function (caseId, stage) {
		return "ideaCreateTimeTopStage:" + caseId + "_" + stage;
	},
	/**
	 * 单个专案记录奖励数据(hash map 结构)
	 * @param caseId 专案id
	 * @param userId 用户id
	 */
	caseFinishV3UserBonusKey: function (caseId, userId) {
		return "caseFinishV3UserBonus:" + caseId + "_" + userId;
	},
	/**
	 * 专案实时奖金排行榜(标准榜)
	 * @param caseId 专案id
	 */
	caseBonusRealTimeStandardKey: function (caseId) {
		return "caseBonusRealTimeStandardList:" + caseId;
	},
	/**
	 * 专案实时奖金排行榜(比较榜)
	 * @param caseId 专案id
	 */
	caseBonusRealTimeCompareKey: function (caseId) {
		return "caseBonusRealTimeCompareList:" + caseId;
	},
	/**
	 * 专案参与奖励名单
	 * @param caseId 专案id
	 */
	caseJoinAwardKey: function (caseId) {
		return "caseJoinAward:" + caseId;
	},
	/**
	 * 专案执行方媒体配置
	 * @param caseId
	 * @return
	 */
	caseExecuteMediaKey: function (caseId) {
		return caseExecuteMediaKey + caseId;
	},
	/**
	 * 全部专案列表
	 */
	allCaseListKey: function () {
		return "AllCaseList";
	},
	/**
	 * 置顶专案列表
	 */
	topCaseListKey: function () {
		return "topCaseList";
	},
	/**
	 * 最新专案列表
	 */
	newCaseListKey: function () {
		return "newCaseList";
	},
	/**
	 * 最热专案列表
	 */
	hotCaseListKey: function () {
		return "hotCaseList";
	},
	/**
	 * 个人专案列表
	 * @param userId 用户id
	 */
	userCaseListKey: function (userId) {
		if (!userId) {
			return "userCaseList";
		} else {
			return "userCaseList:" + userId;
		}
	},
	/**
	 * 企业专案列表
	 * @param companyId 企业id
	 */
	companyCasePageListKey: function (companyId) {
		return "companyCasePageList:" + companyId;
	},
	/**
	 * 执行方推荐
	 * @param id 推荐id
	 */
	executiveRecommendKey: function (id) {
		return executiveRecommendKey + id;
	},
	/**
	 * 执行方推荐列表
	 * @param caseId 专案id
	 * @param tag 执行方标签
	 */
	executiveRecommendListKey: function (caseId, tag) {
		return "executiveRecommendList:" + caseId + "_" + tag;
	},
	/**
	 * 执行方推荐类型列表
	 * @param caseId 专案id
	 */
	executiveRecommendTypeListKey: function (caseId) {
		return "executiveRecommendTypeList:" + caseId;
	},
	/**
	 * 用户执行方任务列表
	 * @param userId 用户id
	 */
	executiveUserTaskListKey: function (userId) {
		return "executiveUserTaskList:" + userId;
	},
	/**
	 * 企业执行方任务列表
	 * @param companyId 企业id
	 */
	executiveCompanyTaskListKey: function (companyId) {
		return "executiveCompanyTaskList:" + companyId;
	},
	/**
	 * 执行任务消息标识
	 * @param recommendId 推荐id
	 */
	executiveMessageKey: function (recommendId) {
		return "executiveMessage:" + recommendId;
	},
	/**
	 * 分类专案列表
	 * @param caseType 专案类型
	 */
	caseListKey: function (caseType) {
		return "CaseList:" + caseType;
	},
	/**
	 * 企业分类专案列表
	 * @param companyId 企业id
	 * @param caseType 专案类型
	 */
	companyCaseList: function (companyId, caseType) {
		return "companyCaseList:" + companyId + "_" + caseType;
	},
	/**
	 * 企业完结了的专案列表
	 * @param companyId 企业id
	 * @param caseType 专案类型
	 */
	overCaseListKey: function (companyId, caseType) {
		if (!caseType) {
			return "companyOverCaseList:" + companyId;
		} else {
			return "companyOverCaseList:" + companyId + "_" + caseType;
		}
	},
	/**
	 * 创意ListKey
	 * @param caseId
	 */
	ideaListKey: function (caseId) {
		return "ideaList:" + caseId;
	},
	/**
	 * 执行方报对象
	 * @param recommendId 执行方推荐id
	 */
	executiveOfferKey: function (recommendId) {
		return executiveOfferKey + recommendId;
	},
	/**
	 * 报价单列表
	 * @param caseId 专案id
	 */
	executiveOfferListKey: function (caseId) {
		return "executiveOfferList:" + caseId;
	},
	/**
	 * 用户赚取点数排行榜
	 */
	userPointsEarnTopKey: function () {
		return "userPointsEarnTop";
	},
	/**
	 * 用金钱流水列表
	 * @param userId 用户id
	 */
	userMoneyListKey: function (userId) {
		return "userMoneyList:" + userId;
	},
	/**
	 * 用户加钱日志
	 * @param logId 日志id
	 */
	userPointsAddLogKey: function (logId) {
		return "userPointsAddLogKey:" + logId;
	},
	/**
	 * 用户总G币
	 */
	userTotalPointsKey: function () {
		return "userTotalPoints";
	},
	/**
	 * 提现的用户列表
	 */
	checkoutUserListKey: function () {
		return "checkoutUserList";
	},
	/**
	 * 可提现人数
	 */
	canCheckoutUsersKey: function () {
		return "canCheckoutUsers";
	},
	/**
	 * 待提现金额
	 */
	canCheckoutPointsKey: function () {
		return "canCheckoutPoints";
	},
	/**
	 * 累计提现金额
	 */
	checkoutTotalPointsKey: function () {
		return "checkoutTotalPoints";
	},
	/**
	 * 每天新增可提现人数
	 */
	canCheckoutNewUsersPerDayKey: function () {
		return "canCheckoutNewUsersPerDay:" + timeUtil.date("YYYYMMDD");
	},
	/**
	 * 执行任务
	 * @param taskId 任务id
	 */
	executiveTaskKey: function (taskId) {
		return executiveTaskKey + taskId;
	},
	/**
	 * 创意附加模块列表
	 */
	ideaAttachModuleList: function (ideaId) {
		return "ideaAttachModuleList:" + ideaId;
	},
	/**
	 * 创意附加模块key
	 */
	ideaAttachModuleKey: function (ideaAttachModuleId) {
		return ideaAttachModuleKey + ideaAttachModuleId;
	},
	/**
	 * 用户执行方入账流水
	 * @param id 日志id
	 */
	executiveUserMoneyLogKey: function (id) {
		return executiveUserMoneyLogKey + id;
	},
	/**
	 * 企业执行方入账流水
	 * @param id 日志id
	 */
	executiveCompanyMoneyLogKey: function (id) {
		return executiveCompanyMoneyLogKey + id;
	},
	/**
	 * 用户执行方入账流水列表
	 * @param userId 用户id
	 */
	executiveUserMoneyLogListKey: function (userId) {
		return "executiveUserMoneyLogList:" + userId;
	},
	/**
	 * 企业执行方入账流水列表
	 * @param companyId 企业id
	 */
	executiveCompanyMoneyLogListKey: function (companyId) {
		return "executiveCompanyMoneyLogList:" + companyId;
	},
	/**
	 * 执行方评价榜
	 */
	executiveScoreListKey: function () {
		return "executiveList:score";
	},
	/**
	 * 执行方接单榜
	 */
	executiveJobListKey: function () {
		return "executiveList:job";
	},
	/**
	 * 执行方赚钱榜
	 */
	executiveEarnListKey: function () {
		return "executiveList:rean";
	},
	/**
	 * 企业执行方评价
	 * @param commentId 评价id
	 */
	executiveCompanyCommentKey: function (commentId) {
		return executiveCompanyCommentKey + commentId;
	},
	/**
	 * 企业执行方评价列表
	 * @param commentId 评价id
	 */
	executiveCompanyCommentListKey: function (commentId) {
		return "executiveCompanyCommentList:" + commentId;
	},
	/**
	 * 执行方退款
	 * @param taskId 执行方任务id
	 */
	executiveRefundKey: function (taskId) {
		return "executiveRefund:" + taskId;
	},
	/**
	 * 企业第一阶段专案
	 * @param caseId 专案id
	 */
	companyCaseStage1Key: function (caseId) {
		return "companyCaseStage1:" + caseId;
	},
	/**
	 * 企业选中专案
	 */
	companySelectCaseKey: function (companyId) {
		return "companySelectCase:" + companyId;
	},
	/**
	 * 执行方提现
	 * @param id 自增id
	 */
	executiveCheckoutKey: function (id) {
		return executiveCheckoutKey + id;
	},
	/**
	 * 创意获赞表key
	 * @param ideaId 创意id
	 */
	ideaPraiseKey: function (ideaId) {
		return "ideaPraise:" + ideaId;
	},
	/**
	 * 专案获赞表key
	 * @param caseId 专案id
	 */
	casePraiseKey: function (caseId) {
		return "casePraise:" + caseId;
	},

	/**
	 * 创意评论key
	 * @param ideaCommentId 创意评论id
	 */
	ideaCommentKey: function (ideaCommentId) {
		return ideaCommentKey + ideaCommentId;
	},
	/**
	 * 创意评论listKey
	 * @param ideaId 创意id
	 */
	ideaCommentListKey: function (ideaId) {
		return "ideaCommentList:" + ideaId;
	},
	/**
	 * 创意评论listKey
	 * @param ideaId 创意id
	 * @param layerId 层级id
	 */
	ideaCommentListByLayerIdKey: function (ideaId, layerId) {
		return "ideaCommentListByLayerId:" + ideaId + "_" + layerId;
	},
	/**
	 * 创意评论listKey
	 * @param ideaId 创意id
	 * @param userId 用户id
	 */
	ideaCommentListByUserIdKey: function (ideaId, userId) {
		return "ideaCommentListByUserId:" + ideaId + "_" + userId;
	},
	/**
	 * 创意评论回复key
	 * @param ideaCommentReplyId 创意评论回复id
	 */
	ideaCommentReplyKey: function (ideaCommentReplyId) {
		return ideaCommentReplyKey + ideaCommentReplyId;
	},
	/**
	 * 创意评论回复listKey
	 * @param ideaCommentId 创意评论id
	 */
	ideaCommentReplyListKey: function (ideaCommentId) {
		return "ideaCommentReplyList:" + ideaCommentId;
	},
	/**
	 * easemob的qps key
	 * @param time 当前时间戳
	 */
	nodejsQPSKey: function (time) {
		return "nodejsQPS:" + time;
	},
	/**
	 * 用户参与过的专案
	 * @param userId 用户id
	 */
	userHasTakePartInCaseKey: function (userId) {
		return "userHasTakePartInCaseList:" + userId;
	}
};