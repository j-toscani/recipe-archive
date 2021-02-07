import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Create from '../pages/Create.vue';
import Search from '../pages/Search.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/create', component: Create },
  { path: '/search', component: Search },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
