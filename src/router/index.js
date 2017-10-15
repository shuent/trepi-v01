import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Recipe from '@/components/Recipe'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      components: {
        default: Welcome,
      }
    },
    {
      path:'/home',
      name: 'Home',
      component: Home,
    },
    {
      path:'recipe/:id',
      name:'Recipe',
      component: Recipe,
    }
  ]
})
