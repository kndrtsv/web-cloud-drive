import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '@/views/ContentView.vue'
import LoginView from '@/views/LoginView.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: EmptyLayout
      }
    },
    {
      path: '/folder/:name',
      name: 'folder',
      component: ContentView,
    }
  ],
})

export default router
