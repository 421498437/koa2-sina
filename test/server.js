/**
 * @description 服务http测试
 */

 const request = require('supertest');
 const server = require('../src/app').callback()

 module.exports = request(server)