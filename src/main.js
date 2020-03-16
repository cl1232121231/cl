import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import Vant from 'vant'
import axios from 'axios'
import qs from 'qs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swipe, SwipeItem } from 'mint-ui'
import 'swiper/dist/css/swiper.css'
import store from './store';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
