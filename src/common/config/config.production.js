// production config, it will load in production enviroment
module.exports = {
  workers: 0,
  port: process.env.PORT || 8061
};
