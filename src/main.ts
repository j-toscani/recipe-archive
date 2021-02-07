import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/Router';
import './index.css';

createApp(App).use(router).mount('#app');
