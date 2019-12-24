// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/icons'
import 'lib-flexible/flexible'
import store from './store'
import {
  Dialog,
  Loading
} from 'vant'
import '@/assets/less/base.css'

Vue.use(Dialog)
Vue.use(Loading)
Vue.prototype.$dialog = Dialog
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
