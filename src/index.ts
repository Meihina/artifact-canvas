import { type App } from "vue";
import GlslCanvas from "./components/glsl-canvas/index.vue";
import P5Canvas from "./components/p5-canvas/index.vue";

export { GlslCanvas, P5Canvas };

const component = [GlslCanvas, P5Canvas];

const M = {
	install(App: App) {
		component.forEach((item) => {
			App.component(item.name!, item);
		});
	},
};

export default M;