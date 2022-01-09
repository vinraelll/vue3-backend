import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import '@/styles/reset.css';
import '@/assets/scss/variables.scss';

createApp(App).use(vuex).mount('#app')