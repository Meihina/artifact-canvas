import { createApp } from 'vue';
import App from './App.vue';
import GlslCanvas from './index';

const app = createApp(App);
app.use(GlslCanvas);
app.mount('#app');
