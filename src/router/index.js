import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/blog-list',
      name: 'home',
      component: HomeView,
      meta: {
        protected: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        protected: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        protected: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        protected: false
      }
    },
    {
      path: '/blog-list',
      name: 'blog-list',
      component: () => import('../views/blog/BlogListView.vue'),
      meta: {
        protected: true
      }
    },
    {
      path: '/bill',
      name: 'bill',
      component: () => import('../views/BillView.vue'),
      meta: {
        protected: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !localStorage.getItem('token')) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
