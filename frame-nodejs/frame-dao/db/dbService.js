// 数据库链接
import config from CoreDir +'/config/mysql';
import mysql from CoreDir +'/core/mysql/mysql';
// 数据库名
module.exports = mysql(config('db'));