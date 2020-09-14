/**
 * @description 存储配置
 * @author lee
 */

 const { isProd } = require('../utils/env')

 let REDIS_CONF = {
   port: 6379,
   host: '127.0.0.1'
 }

 let MYSQL_CONF = {
  host:'localhost',
  user: 'root',
  password: '5983828115y',
  port: '3306',
  database: 'sina_weibo',
  dialect:'mysql'
}

if(isProd){
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }

  MYSQL_CONF = { //线上mysql配置
    host:'localhost',
    user: 'root',
    password: '5983828115y',
    port: '3306',
    database: 'sina_weibo',
    dialect:'mysql'
  }
}



 module.exports = {
   REDIS_CONF,
   MYSQL_CONF
 }