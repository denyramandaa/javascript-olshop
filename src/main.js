import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import { routes } from './routes.js'

import { store } from './store/store'

Vue.use(VueRouter);
Vue.use(VueCookies);

Vue.filter('convertToRupiah', function(obj){
  return 'Rp '+obj.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
});

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
