import Vue from 'vue'
// 根组件
import App from './App.vue'
import router from './router'
// 路由
import store from './store'


Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 创建Vue实例 挂载到app.js
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
