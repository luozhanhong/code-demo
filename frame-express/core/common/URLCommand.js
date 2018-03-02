module.exports = {
	/**
	 * 用户登录
	 */
	userLogin: '/user/login',
	/**
	 * 用户注册
	 */
	userReg: '/user/reg',
	/**
	 * 用户登出
	 */
	userLogout: '/user/logout',
	/**
	 * 点子人列表
	 */
	creativeManList: '/creativeman/list',
	/**
	 * 获取短信
	 */
	getsms: '/getsms',
	/**
	 * 用户名是否被注册
	 */
	userNameOnly: '/user/name/only',
	/**
	 * 手机是否被注册
	 */
	userMobileOnly: '/user/mobile/only',
	/**
	 * 修改个人资料
	 */
	userInfoUpdate: '/user/info/update',
	/**
	 * 获取个人资料
	 */
	userInfo: '/user/info',
	/**
	 * 用户参与项目
	 */
	userJoinList: '/user/join/list',
	/**
	 * 验证码
	 */
	captcha: '/captcha',
	/**
	 * 上传资料调研
	 */
	researchPub: '/research/pub',
	/**
	 * 资料列表
	 */
	researchList: '/research/list',
	/**
	 * 资料详情
	 */
	researchInfo: '/research/info',
	/**
	 * 编辑资料
	 */
	researchEdit: '/research/edit',
	/**
	 * 资料调研评论
	 */
	researchCommentPub: '/research/comment/pub',
	/**
	 * 资料调研评论列表
	 */
	researchCommentList: '/research/comment/list',
	/**
	 * 项目详情
	 */
	projectInfo: '/info',
	/**
	 * 项目进度
	 */
	projectProgress: '/progress',
	/**
	 * 项目贡献者列表
	 */
	contributorList: '/contributor/list',
	/**
	 * 进行中项目列表
	 */
	proGoingList: '/going/list',
	/**
	 * 已结束目列表
	 */
	proOverList: '/over/list',
	/**
	 * 省份配置
	 */
	provinceConfig: '/province/config',
	/**
	 * 城市配置
	 */
	cityConfig: '/city/config',
	/**
	 * 国际区号
	 */
	areaCode: '/area/code',
	/**
	 * 发表点子
	 */
	ideaPub: '/idea/pub',
	/**
	 * 编辑点子
	 */
	ideaEdit: '/idea/edit',
	/**
	 * 点子详情
	 */
	ideaInfo: '/idea/info',
	/**
	 * 点子列表
	 */
	ideaList: '/idea/list/:orderFieldName',
	/**
	 * 添加附件
	 */
	ideaFileAdd: "/idea/file/add",
	/**
	 * 删除附件
	 */
	ideaFileDel: "/idea/file/del",
	/**
	 * 添加链接
	 */
	ideaLinkAdd: "/idea/link/add",
	/**
	 * 删除链接
	 */
	ideaLinkDel: "/idea/link/del",
	/**
	 * 点子点赞
	 */
	ideaPraiseUp: "/idea/praise/up",
	/**
	 * 点子取消点赞
	 */
	ideaPraiseDown: "/idea/praise/down",
	/**
	 * 发布点子补充
	 */
	ideaAddedPub: '/idea/added/pub',
	/**
	 * 点子补充列表
	 */
	ideaAddedList: '/idea/added/list',
	/**
	 * 发布点子评论
	 */
	ideaCommentPub: '/idea/comment/pub',
	/**
	 * 点子评论列表
	 */
	ideaCommentList: '/idea/comment/list',
	/**
	 * 发布点子评论回复
	 */
	ideaCommentReplyPub: '/idea/comment/reply/pub',
	/**
	 * 点子评论回复列表
	 */
	ideaCommentReplyList: '/idea/comment/reply/list',
	/**
	 * 点子转发
	 */
	ideaForward: '/idea/forward',
	/**
	 * 获奖点子列表
	 */
	ideaAwardList: '/idea/award/list',
	/**
	 * 项目获奖者列表
	 */
	ideaAwardUser: '/idea/award/user',
	/**
	 * 项目完结概述
	 */
	projectOverview: '/overview',
	/**
	 * 项目评审人员列表
	 */
	projectReviewer: '/reviewer',
	/**
	 * 项目标签
	 */
	projectTagList: '/tag/list',
	/**
	 * 内部链接
	 */
	insideLink: '/inside/link',
	/**
	 * 分享企业执行方
	 */
	shareExecutiveCompany: '/share/executive/company/:companyId',
	/**
	 * 分享用户执行方
	 */
	shareExecutiveUser: '/share/executive/user/:userId',
	/**
	 * 分享专案
	 */
	shareCase: '/share/case/:caseId',
	/**
	 * 分享用户专案idea
	 */
	shareCaseUserIdea: '/share/case/user/idea/:ideaId',
	/**
	 * 分享企业专案idea
	 */
	shareCaseCompanyIdea: '/share/case/company/idea/:ideaId',
	/**
	 * 生成微信分享数据
	 */
	genWechatShareData: '/share/wechat',
	/**
	 * 获取优惠码
	 */
	discount: '/discount'
};