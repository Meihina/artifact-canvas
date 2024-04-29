<template>
	<div class="contain">
		<canvas id="glsl-canvas"></canvas>
	</div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import defaultShader from '../shader/default.glsl'
import GlslCanvas from 'glslCanvas';

export default defineComponent({
	name: 'GlslCanvas',
	setup() {
		const glslcanvas = ref<any>();
    const glslSandbox = ref<any>();

		const step = (timestamp: number) => {
			glslSandbox.value.setUniform('u_time', timestamp);
			glslSandbox.value.setUniform('u_resolution', glslcanvas.value.width, glslcanvas.value.height);
			requestAnimationFrame(step);
	};

		onMounted(() => {
			console.log(defaultShader);
			glslcanvas.value = document.getElementById('glsl-canvas') as HTMLCanvasElement;
			glslSandbox.value = new GlslCanvas(glslcanvas.value);
			glslSandbox.value.load(defaultShader);
			requestAnimationFrame(step);
		});
	},
})
</script>
  
<style lang="less" scoped>
.contain {
	position: relative;
	width: 100%;
	// box-sizing: border-box;
	// padding: 12px;
	// text-align: center;
}
</style>
  