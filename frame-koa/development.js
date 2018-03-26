const Application = require('./lib/init');

const instance = new Application({
  ROOT_PATH: __dirname,
  ENV: 'development'
});

// instance.run();
