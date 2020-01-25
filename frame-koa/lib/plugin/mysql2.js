let pool = {};
if (G.config.mysql) {
  const LOGGER = getLogger(__filename);
  const mysql = require('mysql2/promise');
  pool = mysql.createPool({
    host: G.config.mysql.host || '127.0.0.1',
    port: G.config.mysql.port || 3306,
    user: G.config.mysql.user,
    password: G.config.mysql.password,
    database: G.config.mysql.database,
    charset: G.config.mysql.charset || 'utf8',
    collate: G.config.mysql.collate || 'utf8_unicode_ci',
    connectionLimit: G.config.mysql.connectionLimit || 5,
    supportBigNumbers: true,
    bigNumberStrings: false,
    multipleStatement: false
  });
  pool.getConnection().then((conn) => {
    const {config: {host}} = conn;
    const {config: {port}} = conn;
    const {config: {database}} = conn;
    LOGGER.info(`connect mysql://${host}:${port}/${database} successfully`);
  }).catch(err => {
    LOGGER.error(err);
  });
}
module.exports = pool;
