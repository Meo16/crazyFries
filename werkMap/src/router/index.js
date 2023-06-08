import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import CartOrderView from '../views/CartOrderView.vue'
import PayView from '../views/PayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView,
    },
    {
      path: '/cart/:orderId',
      name: 'cart',
      component: CartOrderView,
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayView,
    },
  ],
});


export default router
