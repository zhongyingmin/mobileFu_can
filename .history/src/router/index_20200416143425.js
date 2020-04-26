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
        path: 'mall/List/goodsDetails',
        name: '商品详情',
        component: () => import('@/views/mall/goodsDetails'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'mall/store',
        name: '商店',
        component: () => import('@/views/mall/store'),
        meta: {
          // requiresAuth: true
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
        path: 'orders/list',
        name: '全部订单',
        component: () => import('@/views/personal/orders/list'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'orders/info',
        name: '订单详情',
        component: () => import('@/views/personal/orders/info'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'refundAfter/applyRefund',
        name: '申请退款',
        component: () => import('@/views/personal/refundAfter/applyRefund'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'refundAfter/detailsRefund',
        name: '退款详情',
        component: () => import('@/views/personal/refundAfter/detailsRefund'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'refundAfter',
        name: '退款售后',
        component: () => import('@/views/personal/refundAfter/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'info',
        name: '完善个人信息',
        component: () => import('@/views/personal/info/index'),
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
        path: 'healthConsultant/patientList',
        name: '全部患者',
        component: () => import('@/views/home/healthConsultant/patientList'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'healthConsultant/chat',
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
        path: 'attachedCopies/ImageUpload',
        name: '病历记录',
        component: () => import('@/views/home/attachedCopies/ImageUpload'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'attachedCopies/permissions',
        name: '权限设置',
        component: () => import('@/views/home/attachedCopies/permissions'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'attachedCopies/members',
        name: '成员及权限',
        component: () => import('@/views/home/attachedCopies/members'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'attachedCopies/membersAdd',
        name: '添加成员',
        component: () => import('@/views/home/attachedCopies/membersAdd'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'registerAppointment',
        name: '选择医院',
        component: () => import('@/views/home/registerAppointment/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'registerAppointment/hospitalHomepage',
        name: '医院主页',
        component: () => import('@/views/home/registerAppointment/hospitalHomepage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'registerAppointment/reservation',
        name: '预约',
        component: () => import('@/views/home/registerAppointment/reservation'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'registerAppointment/personalDocument',
        name: '个人建档',
        component: () => import('@/views/home/registerAppointment/personalDocument'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'registerAppointment/complaint',
        name: '询问主诉',
        component: () => import('@/views/home/registerAppointment/complaint'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'diagnosis',
        name: '诊疗通知',
        component: () => import('@/views/home/diagnosis/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'dataAnalysis',
        name: '数据分析',
        component: () => import('@/views/home/dataAnalysis/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'activity',
        name: '膏方节活动',
        component: () => import('@/views/home/activity/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'activity/info',
        name: '活动详情',
        component: () => import('@/views/home/activity/info'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'content',
        name: '推荐内容',
        component: () => import('@/views/home/content/index'),
        meta: {
          // requiresAuth: true
        }
      },
      {
        path: 'content/videoContent',
        name: '视频内容',
        component: () => import('@/views/home/content/videoContent'),
        meta: {
          // requiresAuth: true
        }
      },
      {
        path: 'content/articleContent',
        name: '文章内容',
        component: () => import('@/views/home/content/articleContent'),
        meta: {
          // requiresAuth: true
        }
      },
      ]
    }
  ]
})
