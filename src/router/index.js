import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Register'),
  },
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      layout: 'app',
      auth: true,
    },
    component: () => import('../views/Dashboard'),
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      layout: 'app',
      auth: true,
    },
    component: () => import('../views/Projects'),
  },
  {
    path: '/project/:id',
    name: 'Jobs',
    meta: {
      layout: 'app',
      auth: true,
    },
    component: () => import('../views/Jobs'),
  },
  {
    path: '/clients',
    name: 'Clients',
    meta: {
      layout: 'app',
      auth: true,
    },
    component: () => import('../views/Clients'),
  },
  {
    path: '/account',
    name: 'Account',
    meta: {
      layout: 'app',
      auth: true,
    },
    component: () => import('../views/Account'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
