import router from './router'
import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
const whiteList = ['/login']


router.beforeEach((to, from, next) => {
  // NProgress.start()
  console.log(to.matched.some(r => r.meta.requiresAuth))
  if (to.matched.some(r => r.meta.requiresAuth)) {  // 判断该路由是否需要登录权限
    if (getToken()) {  // 通过vuex 如果当前有登录
      next()
    }
    else {
      console.log("没有登录吖")
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    console.log(to.path)
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      next()
    }
  }
});

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
