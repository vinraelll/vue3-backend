import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import axios from 'axios'
import '@/styles/reset.css';

createApp(App).use(vuex).mount('#app')