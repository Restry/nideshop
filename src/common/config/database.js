const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'api.vfree.me',
  port: '9306',
  user: 'nideshop',
  password: 'password01',
  dateStrings: true
};
