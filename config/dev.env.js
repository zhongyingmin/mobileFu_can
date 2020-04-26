'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://api.hanfangyiyang.cn/"',
  BASE_API: '"http://192.168.1.116:7300/mock/5e8bf039569d0d11b4ff365b/test"',
})
