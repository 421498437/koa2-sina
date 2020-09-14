const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db');
const { host, user , password, database } = MYSQL_CONF
const { isProd , isTest } = require('../utils/env')

const conf={
  host:host,
  dialect:'mysql'
}
if( isTest ){
  conf.logging = ()=>{}
}

if( isProd ){
  conf.pool = {
    max:5,
    min:0,
    idle:10000 //一个连接池十秒之内没被使用就释放
  }
}

const seq =new Sequelize(database,user,password,conf)
module.exports = seq

