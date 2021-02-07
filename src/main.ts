import './index.css';
import useIsAuthenticated, { AUTH } from './lib/hooks/useIsAuthenticated';
import { createApp, provide } from 'vue';

import App from './App.vue';
import router from './routes/Router';

createApp(App).use(router).provide(AUTH, useIsAuthenticated()).mount('#app');
