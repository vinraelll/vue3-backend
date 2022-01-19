import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import router from './router';
import '@/styles/reset.css';

createApp(App).use(vuex).use(router).mount('#app')