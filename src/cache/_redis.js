/**
 * @description 连接redis的方法 get set
 * @author lee
 */

const redis = require('redis');
const { REDIS_CONF } = require('../conf/db')

const redisClient = redis.createClient( REDIS_CONF.port , REDIS_CONF.host )
redisClient.on('error', err=>{
  console.log('redis error',err)
})

function set(key,val,time=60*60){
  if(typeof val === 'object'){
    val = JSON.stringify(val)
  }
  redisClient.set(key,val)
  redisClient.expire(key,timeout)
}

function get(key){
  const promise = new Promise((resolve,reject)=>{
      redisClient.get(key,(err,val)=>{
        if(err){
          reject(err)
          return
        }
        if(val===null){
          resolve(null)
          return
        }
        try{
          resolve(JSON.parse(val))
        }catch(ex){
          resolve(val)
        }
      })
  })
  return promise
}

module.exports = {
  get,
  set
}