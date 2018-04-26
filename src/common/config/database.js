const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'db4free.net',
  port: '3306',
  user: 'nideshop',
  password: 'password01',
  dateStrings: true
};
