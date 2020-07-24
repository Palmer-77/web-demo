import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import ShowUserfrom from '@/components/Users/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/:userId', 
      name: 'user', 
      component: ShowUser
    }
  ]
})
