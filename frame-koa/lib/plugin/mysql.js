if (G.config.mysql) {
  const LOGGER = getLogger(__filename);
  const mysql = require('mysql');
  const pool = mysql.createPool({
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

  pool.getConnection((err, connection) => {
    if (err) {
      LOGGER.error(err);
    }
    const {config: {host}} = connection;
    const {config: {port}} = connection;
    const {config: {database}} = connection;
    LOGGER.info(`connect mysql://${host}:${port}/${database} successfully`);
  });
}
