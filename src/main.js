import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 全局注册
import Header from "@/components/Header.vue"
Vue.component("Header",Header)

import Vswiper from "@/components/v-swiper.vue"
import "swiper/dist/css/swiper.min.css";

Vue.component("Vswiper",Vswiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
