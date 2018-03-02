module.exports = {
	/**
	 * 根据kv结构的key排序
	 * @param data kv结构的数据
	 */
	sortKey: function (data) {
		let tmpArray = [];
		_.forEach(data, function (value, key) {
			tmpArray.push({'key': key, 'value': value});
		});
		return _.sortBy(tmpArray, function (o) {
			return o.key;
		});
	},
	/**
	 * 根据kv结构的value排序
	 * @param data kv结构的数据
	 */
	sortValue: function (data) {
		let tmpArray = [];
		_.forEach(data, function (value, key) {
			tmpArray.push({'key': key, 'value': value});
		});
		return _.sortBy(tmpArray, function (o) {
			return o.value;
		});
	}
};