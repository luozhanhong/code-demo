let Key = function (redisKey, sqlKey, dbService) {
	if (!_.isString(sqlKey) || sqlKey.trim() == "") {
		sqlKey = "id";
	}
	if (!_.isObject(dbService)) {
		dbService = guSlaveDbService;
	}
	return {
		redisKey: redisKey,
		sqlKey: sqlKey,
		dbService: dbService
	}
};
module.exports = {
	DChargeLog: Key(KeyFactory._chargeLogKey, "orderId", guLogDbService),
	DIndexImage: Key(KeyFactory._indexImageKey, "", guConfigDbService),
	DUserAddress: Key(KeyFactory._userAddressKey, "userId"),
	DUser: Key(KeyFactory._userKey),
	DCompany: Key(KeyFactory._companyKey),
	DProject: Key(KeyFactory._projectKey),
	DProjectIdea: Key(KeyFactory._projectIdeaKey),
	DProjectIdeaFile: Key(KeyFactory._projectIdeaFileKey),
	DProjectIdeaLink: Key(KeyFactory._projectIdeaLinkKey),
	DProjectResearch: Key(KeyFactory._projectResearchKey),
	DProjectIdeaComment: Key(KeyFactory._projectIdeaCommentKey),
	DProjectIdeaCommentReply: Key(KeyFactory._projectIdeaCommentReplyKey),
	DProjectIdeaAdded: Key(KeyFactory._projectIdeaAddedKey),
	DProjectResearchComment: Key(KeyFactory._projectResearchCommentKey),
	DProjectProgress: Key(KeyFactory._projectProgressKey),
	DProjectTopIdea: Key(KeyFactory._projectTopIdeaKey),
	DSuperstarInfo: Key(KeyFactory._superstarInfoKey, "userId"),
	DProjectTag: Key(KeyFactory._projectTagKey),
	DExecutiveUser: Key(KeyFactory._executiveUserKey),
	DExecutiveCompany: Key(KeyFactory._executiveCompanyKey),
	DExecutiveUserPackage: Key(KeyFactory._executiveUserPackageKey),
	DExecutiveCompanyPackage: Key(KeyFactory._executiveCompanyPackageKey),
	DExecutiveUserOpus: Key(KeyFactory._executiveUserOpusKey),
	DExecutiveCompanyOpus: Key(KeyFactory._executiveCompanyOpusKey),
	DIdea: Key(KeyFactory._ideaKey),
	DCase: Key(KeyFactory._caseKey),
	DDefineTag: Key(KeyFactory._defineTagKey),
	DUserDimension: Key(KeyFactory._userDimensionKey),
	DTeambitionEmail: Key(KeyFactory._teambitionEmailKey),
	DCaseReport: Key(KeyFactory._caseReport),
	DCompanyMessage: Key(KeyFactory._companyMessageKey),
	DExecutiveRecommend: Key(KeyFactory._executiveRecommendKey),
	DExecutiveTask: Key(KeyFactory._executiveTaskKey),
	DExecutiveOffer: Key(KeyFactory._executiveOfferKey, "recommendId"),
	DIdeaAttachModule: Key(KeyFactory._ideaAttachModuleKey),
	DExecutiveUserMoneyLog: Key(KeyFactory._executiveUserMoneyLogKey),
	DExecutiveCompanyMoneyLog: Key(KeyFactory._executiveCompanyMoneyLogKey),
	DExecutiveUserComment: Key(KeyFactory._executiveUserCommentKey),
	DExecutiveCompanyComment: Key(KeyFactory._executiveCompanyCommentKey),
	DExecutiveCheckout: Key(KeyFactory._executiveCheckoutKey),
	DIdeaComment: Key(KeyFactory._ideaCommentKey),
	DIdeaCommentReply: Key(KeyFactory._ideaCommentReplyKey),
	DCaseProgress: Key(KeyFactory._caseProgressKey)
};