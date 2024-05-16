import { createApp } from 'vue'
import App from './App.vue'
import GlslCanvas from './index'
import P5Canvas from './index';

const app = createApp(App);
app.use(GlslCanvas);
app.use(P5Canvas);
app.mount('#app');
