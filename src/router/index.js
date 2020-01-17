import Vue from 'vue'
import Router from 'vue-router'
import Multiselector from '@/components/Multiselector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Multiselector',
      component: Multiselector
    }
  ]
})
