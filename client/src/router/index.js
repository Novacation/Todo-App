import { createRouter, createWebHistory } from 'vue-router'
import { useTokenStore } from '../stores/token'
import Auth from '../views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      beforeEnter: async (to, from, next) => {
        const tokenStatus = await useTokenStore().verifyToken()
        if (tokenStatus) {
          await router.push({ name: 'mainPanel' })
          next()
        } else {
          next()
        }
      }
    },
    {
      path: '/mytasks',
      name: 'mainPanel',

      component: () => import('../views/MainPanel.vue')
    }
  ]
})

export default router
