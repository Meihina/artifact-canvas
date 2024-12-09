/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-duplicates */
import { createApp } from "vue";
import App from "./App.vue";
import GlslCanvas from "./index";
import P5Canvas from "./index";

// 引入core-js
// import "core-js";

const app = createApp(App);
app.use(GlslCanvas);
app.use(P5Canvas);
app.mount("#app");
