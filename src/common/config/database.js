const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'dev',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'windartshop.mysql.database.chinacloudapi.cn',
  port: '3306',
  user: 'restry@windartshop',
  password: '`1qaz2wsx',
  dateStrings: true,
  insecureAuth: true
};
