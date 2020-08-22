import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      console.log('bye')
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    // If the user is already logged in, redirects to home
    if (localStorage.getItem('jwt') != null) {
      console.log('hello')
      next({
        path: '/',
        params: {
          nextUrl: '/'
        }
      })
    } else {
      next()
    }
  }
})

export default router
