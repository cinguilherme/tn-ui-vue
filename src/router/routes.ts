import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'pages/LoginPage.vue';
import OperationsPage from 'pages/OperationsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Root', component: LoginPage },
      { path: '/login', name: 'Login', component: LoginPage },
      { path: '/operations', name: 'Operations', component: OperationsPage },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
