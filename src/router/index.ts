import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index';
// const NotFoundPage = ()=>import('');
const LoginPage = () => import('../views/LoginView.vue');
const RegistrationsPage = () => import('../views/RegisterView.vue');
const DashboardPage = () => import('../views/Dashboard.vue');
const CartPage = () => import('../views/Cart.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.../views/LoginView.vue
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationsPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   if (!store.state.isLoggedIn && to.name !== 'login') {
//     return { name: 'login' }
//   }
//   return false;
// })

export default router
