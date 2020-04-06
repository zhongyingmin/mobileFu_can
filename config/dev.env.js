'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://api.hanfangyiyang.cn/"',
  BASE_API: '"http://192.168.0.116:7300/mock/5e71ceff81f4453df4679fda/test"',
})
