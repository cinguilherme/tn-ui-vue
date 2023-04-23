import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'pages/LoginPage.vue';
import OperationsPage from 'pages/OperationsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', name: 'Login', component: LoginPage },
      { path: '/operations', name: 'Operations', component: OperationsPage },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
