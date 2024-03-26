import { createApp } from 'vue';
import App from './App.vue';
import store from './store/modules/store.js';

createApp(App).use(store).mount('#app');
