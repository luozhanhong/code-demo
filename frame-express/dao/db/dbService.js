// 数据库链接
const config = require('../../core/config/mysql');
const mysql = require( '../../core/core/mysql/mysql');
// 数据库名
module.exports = mysql(config('gu'));