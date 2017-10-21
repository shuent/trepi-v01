import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Recipe from '@/components/Recipe'
import AddRecipe from '@/components/AddRecipe'
import Login from '@/components/Login'

import Firebase from '@/api/firebase/index'



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      components: {
        default: Welcome,
      }
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path:'/home',
      name: 'Home',
      component: Home,
    },
    {
      path:'/recipe/:id',
      name:'showRecipe',
      component: Recipe,
    },
    {
      path: '/addRecipe',
      name: 'AddRecipe',
      component: AddRecipe,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
export default router

// TODO currentUserの遅延処理
// 最初nullになってしまうため．
router.beforeEach((to, from, next) => {
  let currentUser = Firebase.auth.currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    console.log('required auth')
    next('login')
  }
  else next()

})
