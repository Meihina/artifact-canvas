import GlslCanvas from "./components/glsl-canvas.vue";
export { GlslCanvas };
const component = [GlslCanvas];
const M = {
    install(App) {
        component.forEach((item) => {
            App.component(item.name, GlslCanvas);
        });
    },
};
export default M;
