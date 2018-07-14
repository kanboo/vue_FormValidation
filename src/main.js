// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'

import App from './App'
import router from './router'
import store from './store'

VeeValidate.Validator.extend('phone', {
  messages: {
    zh_TW: field => field + '必須是10位手機號碼'
  },
  validate: value => {
    return /^09\d{8}$/.test(value)
  }
})

VeeValidate.Validator.localize('zh_TW', zhTW)

Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
