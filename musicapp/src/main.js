// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/js/rem.js'
import './common/style/reset.scss'
import { post, get } from '@/http/http.js'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
