import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import '../src/assets/style.scss';
const app = createApp(App)	
							.use(createPinia())
							.mount('#app');
