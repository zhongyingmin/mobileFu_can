import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 登录页面
    {
      path: '/login',
      name: "login",
      component: () => import('@/views/login/index'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/registered',
      name: "registered",
      component: () => import('@/views/login/registered'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '*',
      redirect: '/home',
      name: 'page',
      component: () => import('@/views/page'),
      children: [{
        path: 'home',
        name: '主页',
        component: () => import('@/views/home/index'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'mall',
        name: '商城',
        component: () => import('@/views/mall/index'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: 'learning',
        name: '学习',
        component: () => import('@/views/learning/index'),
        meta: {
          requiresAuth: false
        },
      },
      {
        path: 'mall/List',
        name: '商城列表',
        component: () => import('@/views/mall/mallList'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'personal',
        name: '我的',
        component: () => import('@/views/personal/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'shoppingCart',
        name: '购物车',
        component: () => import('@/views/shoppingCart/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'shippingAddress',
        name: '收货地址',
        component: () => import('@/views/personal/shippingAddress/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addressEditor',
        name: '编辑收货地址',
        component: () => import('@/views/personal/shippingAddress/addressEditor'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'medicalSummary',
        name: '病历总结',
        component: () => import('@/views/home/medicalSummary/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'healthConsultant',
        name: '健康顾问',
        component: () => import('@/views/home/healthConsultant/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'patientList',
        name: '全部患者',
        component: () => import('@/views/home/healthConsultant/patientList'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'chat',
        name: '聊天室',
        component: () => import('@/views/home/chat/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'pharmacy',
        name: '制剂药房',
        component: () => import('@/views/home/pharmacy/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'attachedCopies',
        name: '附件册',
        component: () => import('@/views/home/attachedCopies/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'ImageUpload',
        name: '病历记录',
        component: () => import('@/views/home/attachedCopies/ImageUpload'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'permissions',
        name: '权限设置',
        component: () => import('@/views/home/attachedCopies/permissions'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'members',
        name: '成员及权限',
        component: () => import('@/views/home/attachedCopies/members'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'membersAdd',
        name: '添加成员',
        component: () => import('@/views/home/attachedCopies/membersAdd'),
        meta: {
          requiresAuth: true
        }
      },
      ]
    }
  ]
})
