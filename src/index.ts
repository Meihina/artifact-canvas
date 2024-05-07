import GlslCanvas from "./components/glsl-canvas.vue";
import P5Canvas from "./components/p5-canvas.vue";

export { GlslCanvas, P5Canvas };

const component = [GlslCanvas, P5Canvas];

const M = {
	install(App: any) {
		component.forEach((item) => {
			App.component(item.name, item);
		});
	},
};

export default M;