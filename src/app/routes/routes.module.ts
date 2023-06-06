import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import BasicLayout from '../layout/basic/index.vue';
import BlankLayout from '../layout/blank/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [],
  },
  {
    path: '/empty',
    component: BlankLayout,
    children: [],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
