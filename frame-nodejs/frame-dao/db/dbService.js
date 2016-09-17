// 数据库链接
import config from '../../frame-core/config/mysql';
import mysql from '../../frame-core/core/mysql/mysql';
// 数据库名
module.exports = mysql(config('gu'));