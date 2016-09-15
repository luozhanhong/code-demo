/**
 * 城市省份地区配置
 */
const LOGGER = logUtil.getLogger(module.filename);
module.exports = async function () {
	global.regionMap = filesystem.loadJSONFile('pcd.json');
	global.provinceMap = {};
	global.cityMap = {};
	global.districtMap = {};
	_.forEach(global.regionMap, function (provinceMap, provinceId) {
		global.provinceMap[_.toInteger(provinceId)] = provinceMap['name'].trim();
		_.forEach(provinceMap, function (cityMap, cityId) {
			_.forEach(cityMap, function (city, cId) {
				cityId = _.toInteger(cId);
				if (cityId % 100 == 0) {
					if (city['name']) {
						global.cityMap[cityId] = city['name'].trim();
					}
				} else {
					if (city['name']) {
						global.districtMap[cId] = city['name'].trim();
					}
				}
				_.forEach(city, function (district, districtId) {
					_.forEach(district, function (d, dId) {
						districtId = _.toInteger(dId);
						if (districtId > 100000) {
							global.districtMap[districtId] = d['name'].trim();
						}
					});
				});
			});
		});
	});

	/**
	 * 根据地区号获取地址
	 * @param code 地区号
	 */
	global.getAddress = function (code) {
		if (code < 110000 || code > 820000) {
			return "";
		}
		let address = '';
		let province = global.provinceMap[_.toInteger(code / 1000) * 1000];
		let city = global.cityMap[_.toInteger(code / 100) * 100];
		let district = global.districtMap[code];
		address += province;
		// 如果是直辖市，就不需要显示cityName了
		if (province !== city) {
			address += city;
		}
		if (district) {
			address += district;
		}
		return address;
	};

	/**
	 * 获取整个地图
	 */
	global.getRegionMap = function () {
		return global.regionMap;
	};

	LOGGER.warn('province city config init ...');
};