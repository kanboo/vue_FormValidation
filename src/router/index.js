import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: () => import('@/page/Form')
    },
    {
      path: '*',
      name: 'Form',
      component: () => import('@/page/Form')
    }
  ]
})
