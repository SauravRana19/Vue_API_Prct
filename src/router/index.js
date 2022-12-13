import { createRouter, createWebHistory } from 'vue-router'
import post_api_comp from '../components/post_api_comp.vue'

const routes = [
  {
    path: '/',
    name: 'post_api',
    component: post_api_comp
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
