import axios from 'axios'
import store from '../store'
import { getToken, removeToken } from '@/utils/auth'
import router from '@/router';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    const res = response.data;
    if (res.status_code !== 1) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    if(error.message=="Request failed with status code 401"){
      console.log('过期')
      //在这写弹窗提示过期
      removeToken();
      router.push("/")
    }else{
      console.log(error.response.data.msg)
    }
   
    return Promise.reject(error).catch()
  }
)

export default service
