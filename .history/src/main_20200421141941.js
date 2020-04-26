// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant,{Lazyload} from 'vant';
export * from 'echarts/src/echarts'
// require styles
import 'swiper/dist/css/swiper.css'
// import fastClick from 'fastclick'
import './styles/global.scss'
import './styles/border.css'
import './styles/reset.css'
import './styles/index.css'
import './permission'
import 'vant/lib/index.css';
import '../static/iconfont/iconfont.css'


Vue.use(Vant);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
