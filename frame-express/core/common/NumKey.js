function NumKey(table, column, key, pk, seconds) {
	this.table = table;
	this.column = column;
	this.key = key;
	this.pk = pk;
	this.seconds = seconds;
	this.getKey = function (id) {
		return this.key + id;
	}
}
let timeUtil = require("../core/util/timeUtil");
module.exports = {
	/**
	 * 创意点赞数
	 */
	ideaPraise: new NumKey("idea", "praise", "ideaPraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意创意值
	 */
	ideaCreative: new NumKey("idea", "creative", "ideaCreativeNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意评论数
	 */
	ideaCommentNum: new NumKey("idea", "comment_num", "ideaCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意阅读数
	 */
	ideaReadNum: new NumKey("idea", "read_num", "ideaReadNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意评论回复条数
	 */
	ideaCommentReplyNum: new NumKey("idea_comment", "reply_num", "ideaCommentReplyNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意评论点赞数
	 */
	ideaCommentPraiseNum: new NumKey("idea_comment", "praise_num", "ideaCommentPraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案金额
	 */
	casePoints: new NumKey("case", "points", "casePoints:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案点赞数
	 */
	casePraiseNum: new NumKey("case", "praise_num", "casePraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案吐槽数
	 */
	caseFlowNum: new NumKey("case", "flow_num", "caseFlowNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案创意数
	 */
	caseIdeaNum: new NumKey("case", "idea_num", "caseIdeaNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案粉丝数
	 */
	caseFansNum: new NumKey("case", "fans_num", "caseFansNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案阅读数
	 */
	caseReadNum: new NumKey("case", "read_num", "caseReadNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 专案参与数
	 */
	caseTakePartInNum: new NumKey("case", "take_part_in_num", "caseTakePartInNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 用户G点数
	 */
	userPoints: new NumKey("user", "points", "userPoints:", "id", 0),
	/**
	 * 用户积分数
	 */
	userScore: new NumKey("user", "score", "userScore:", "id", 0),
	/**
	 * 用户创意值
	 */
	userExp: new NumKey("user", "exp", "userExp:", "id", 0),
	/**
	 * 用户等级
	 */
	userLevel: new NumKey("user", "level", "userLevel:", "id", 0),
	/**
	 * 用户发布专案数
	 */
	userCaseNum: new NumKey("user", "case_num", "userCaseNum:", "id", 0),
	/**
	 * 用户关注领域数
	 */
	userTagNum: new NumKey("user", "tag_num", "userTagNum:", "id", 0),
	/**
	 * 用户参与项目数
	 */
	userJoinNum: new NumKey("user", "join_num", "userJoinNum:", "id", 0),
	/**
	 * 好友数
	 */
	userFriendsNum: new NumKey("user", "friends_num", "userFriendsNum:", "id", 0),
	/**
	 * 企业G点数
	 */
	companyPoints: new NumKey("company", "points", "companyPoints:", "id", 0),
	/**
	 * 企业所有专案数
	 */
	companyAllCaseNum: new NumKey("company", "all_case_num", "companyAllCaseNum:", "id", 0),
	/**
	 * 企业进行专案数
	 */
	companyGoingCaseNum: new NumKey("company", "going_case_num", "companyGoingCaseNum:", "id", 0),
	/**
	 * 企业结束专案数
	 */
	companyOverCaseNum: new NumKey("company", "over_case_num", "companyOverCaseNum:", "id", 0),
	/**
	 * 企业粉丝数
	 */
	companyFansNum: new NumKey("company", "fans_num", "companyFansNum:", "id", 0),
	/**
	 * 企业专案收藏数
	 */
	companyCollectNum: new NumKey("company", "collect_num", "companyCollectNum:", "id", 0),
	/**
	 * 企业关注用户数
	 */
	companyFocusUserNum: new NumKey("company", "focus_user_num", "companyFocusUserNum:", "id", 0),
	/**
	 * 企业剩余发专案次数
	 */
	companyPushCaseNum: new NumKey("company", "push_case_num", "companyPushCaseNum:", "id", 0),
	/**
	 * 企业报告数量
	 */
	companyReportNum: new NumKey("company", "report_num", "companyReportNum:", "id", 0),
	/**
	 * 创意圈点赞数
	 */
	marketOpusPraise: new NumKey("market_opus", "praise", "marketOpusPraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 创意圈评论数
	 */
	marketOpusCommentNum: new NumKey("market_opus", "comment_num", "marketOpusCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 商品数量数
	 */
	shopGoodsNum: new NumKey("shop_goods", "num", "shopGoodsNum:", "id", 0),
	/**
	 * 大咖说点赞数
	 */
	superstarOpusPraise: new NumKey("superstar_opus", "praise", "superstarOpusPraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 大咖说评论数
	 */
	superstarOpusCommentNum: new NumKey("superstar_opus", "comment_num", "superstarOpusCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 奖品数量
	 */
	awardNum: new NumKey("case_award", "num", "caseAwardNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 问题选项选择次数统计
	 */
	askChoiceChooseNum: new NumKey("case_ask_choice", "choose_num", "caseAskChoiceChooseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 自定义标签企业使用数
	 */
	companyDefineTag: new NumKey("define_tag", "company_num", "defineTagCompanyNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 自定义标签用户使用数
	 */
	userDefineTag: new NumKey("define_tag", "user_num", "defineTagUserNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 用户参与所得创意值
	 */
	userDimensionJoin: new NumKey("user_dimension", "join", "userDimensionJoin:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 用户被点赞所得创意值
	 */
	userDimensionPraise: new NumKey("user_dimension", "praise", "userDimensionPraise:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 用户合作所得创意值
	 */
	userDimensionCollaboration: new NumKey("user_dimension", "collaboration", "userDimensionCollaboration:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 用户被转发所得创意值
	 */
	userDimensionForward: new NumKey("user_dimension", "forward", "userDimensionForward:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 用户被企业选中所得创意值
	 */
	userDimensionSelect: new NumKey("user_dimension", "select", "userDimensionSelect:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 项目创意点赞数
	 */
	projectIdeaPraise: new NumKey("project_idea", "praise", "projectIdeaPraiseNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目创意创意值
	 */
	projectIdeaCreative: new NumKey("project_idea", "creative", "projectIdeaCreativeNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目创意评论数
	 */
	projectIdeaCommentNum: new NumKey("project_idea", "comment_num", "projectIdeaCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目评论回复数
	 */
	projectIdeaCommentReplyNum: new NumKey("project_idea_comment", "reply_num", "projectIdeaCommentReplyNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目贡献者数量
	 */
	projectContributorsNum: new NumKey("project", "contributors", "projectContributorsNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目点子数量
	 */
	projectIdeaNum: new NumKey("project", "idea_num", "projectIdeaNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目创意阅读量
	 */
	projectIdeaPV: new NumKey("project_idea", "pv", "projectIdeaPV:", "id", timeUtil.day2Second(30)),
	/**
	 * 项目资料数量
	 */
	projectResearchNum: new NumKey("project", "research_num", "projectResearchNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 调研资料评论数
	 */
	researchCommentNum: new NumKey("project_research", "comment_num", "researchCommentNum: ", "id", timeUtil.day2Second(30)),
	/**
	 * 调研资料点击量
	 */
	researchPVNum: new NumKey("project_research", "pv", "researchPVNum: ", "id", timeUtil.day2Second(30)),
	/**
	 * 企业得到总评分
	 */
	executiveCompanyTotalScore: new NumKey("executive_company", "total_score", "executiveCommpanyTotalScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 完成质量总共得分
	 */
	executiveCompanyQualityScore: new NumKey("executive_company", "quality_score", "executiveCommpanyQualityScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 完成速度总共得分
	 */
	executiveCompanySpeedScore: new NumKey("executive_company", "speed_score", "executiveCommpanySpeedScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 服务质量总共得分
	 */
	executiveCompanyServScore: new NumKey("executive_company", "serv_score", "executiveCommpanyServScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 评论总数
	 */
	executiveCompanyCommentNum: new NumKey("executive_company", "comment_num", "executiveCommpanyCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 作品数
	 */
	executiveCompanyOpusNum: new NumKey("executive_company", "opus_num", "executiveCompanyOpusNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 评论数
	 */
	executiveCompanyPackageNum: new NumKey("executive_company", "package_num", "executiveCompanyPackageNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 接单数
	 */
	executiveCompanyJobNum: new NumKey("executive_company", "job_num", "executiveCompanyJobNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 被终止次数
	 */
	executiveCompanyStopNum: new NumKey("executive_company", "stop_num", "executiveCompanyStopNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 服务金额
	 */
	executiveCompanyServAmount: new NumKey("executive_company", "serv_amount", "executiveCompanyServAmount:", "id", timeUtil.day2Second(30)),
	/**
	 * 累计金额
	 */
	executiveCompanyTotalAmount: new NumKey("executive_company", "total_amount", "executiveCompanyTotalAmount:", "id", timeUtil.day2Second(30)),
	/**
	 * 用户得到总评分
	 */
	executiveUserTotalScore: new NumKey("executive_user", "total_score", "executiveUserTotalScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 完成质量总共得分
	 */
	executiveUserQualityScore: new NumKey("executive_user", "quality_score", "executiveUserQualityScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 完成速度总共得分
	 */
	executiveUserSpeedScore: new NumKey("executive_user", "speed_score", "executiveUserSpeedScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 服务质量总共得分
	 */
	executiveUserServScore: new NumKey("executive_user", "serv_score", "executiveUserServScore:", "id", timeUtil.day2Second(30)),
	/**
	 * 评论总数
	 */
	executiveUserCommentNum: new NumKey("executive_user", "comment_num", "executiveUserCommentNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 作品数
	 */
	executiveUserOpusNum: new NumKey("executive_user", "opus_num", "executiveUserOpusNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 评论数
	 */
	executiveUserPackageNum: new NumKey("executive_user", "package_num", "executiveUserPackageNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 接单数
	 */
	executiveUserJobNum: new NumKey("executive_user", "job_num", "executiveUserJobNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 被终止次数
	 */
	executiveUserStopNum: new NumKey("executive_user", "stop_num", "executiveUserStopNum:", "id", timeUtil.day2Second(30)),
	/**
	 * 服务金额
	 */
	executiveUserServAmount: new NumKey("executive_user", "serv_amount", "executiveUserServAmount:", "id", timeUtil.day2Second(30)),
	/**
	 * 累计金额
	 */
	executiveUserTotalAmount: new NumKey("executive_user", "total_amount", "executiveUserTotalAmount:", "id", timeUtil.day2Second(30)),
	/**
	 * 用户赚取的点数
	 */
	userPointsEarn: new NumKey("user_statistics", "points_earn", "userPointsEarn:", "user_id", timeUtil.day2Second(30)),
	/**
	 * 项目阶段创意数
	 */
	caseProgressIdeaNum: new NumKey("case_progress", "idea_num", "caseProgressIdeaNum:", "id", timeUtil.day2Second(30))
};