const Application = require('./lib/init');

const instance = new Application({
  ROOT_PATH: __dirname,
  ENV: 'production'
});

instance.run();
