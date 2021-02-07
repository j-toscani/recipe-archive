import { createRouter, createWebHistory } from 'vue-router';

import Document from '../pages/create/Document.vue';
import Recipe from '../pages/create/Recipe.vue';
import Landing from '../pages/Landing.vue';
import Create from '../pages/Create.vue';
import Search from '../pages/Search.vue';

const routes = [
  { path: '/', component: Landing },
  {
    path: '/new',
    component: Create,
    children: [
      { path: 'recipe', component: Recipe },
      { path: 'document', component: Document },
    ],
  },
  { path: '/search', component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
