import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'base',
      auth: false,
    },
    component: () => import('../views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'base',
      auth: false,
    },
    component: () => import('../views/Register'),
  },
  {
    path: '/',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/dashboard',
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
  {
    path: '*',
    name: 'Error',
    meta: {
      layout: 'base',
      auth: false,
    },
    component: () => import('../views/Error'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuth, user } = store.getters;
  if (to.matched.some((record) => record.path === '*')) {
    next();
    return;
  }
  if (to.matched.some((record) => record.meta.auth)) {
    if (isAuth && user) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else if (to.matched.some((record) => !record.meta.auth)) {
    if (isAuth && user) {
      next({ name: 'Dashboard' });
    } else {
      next();
    }
  }
  next();
});

export default router;
