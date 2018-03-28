const Redis = require('ioredis');
const LOGGER = getLogger(__filename);
let redis = {};
if (G.config.redis) {
  if (Array.isArray(G.config.redis)) {
    redis = new Redis.Cluster(G.config.redis);
  } else {
    redis = new Redis(G.config.redis);
  }
  redis.on('error', (err) => {
    LOGGER.error(err);
  });
}
module.exports = redis;
