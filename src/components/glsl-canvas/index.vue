<template>
  <div class="contain">
    <canvas
      id="glsl-canvas"
      :width="width"
      :height="height"
    ></canvas>
    <P5Canvas></P5Canvas>
    <Happy></Happy>
  </div>
</template>

<script lang="ts">
  import { PropType, defineComponent, onMounted, ref } from 'vue';
  import GlslCanvas from 'glslCanvas';
  import defaultShader from '../../shader/default.glsl';
  import { P5Canvas } from '../p5-canvas';
  import Happy from './components/happy.vue';
  import { KEY } from './const';

  const Props = {
    width: {
      type: Number as PropType<number>,
      default: 300,
    },
    height: {
      type: Number as PropType<number>,
      default: 300,
    },
    shader: {
      type: String as PropType<string>,
      default: defaultShader,
    },
    uniforms: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
  };

  export default defineComponent({
    name: 'GlslCanvas',
    props: Props,
    components: {
      Happy,
      P5Canvas,
    },
    setup(props) {
      const glslcanvas = ref<any>();
      const glslSandbox = ref<any>();

      const step = (timestamp: number) => {
        const { width, height } = props;
        glslSandbox.value.setUniform('u_time', timestamp);
        glslSandbox.value.setUniform('u_resolution', width, height);
        Object.entries(props.uniforms).forEach(([key, value]) => {
          glslSandbox.value.setUniform(key, value);
        });
        requestAnimationFrame(step);
      };

      onMounted(() => {
        console.log(KEY);
        const { shader } = props;
        glslcanvas.value = document.getElementById('glsl-canvas') as HTMLCanvasElement;
        glslSandbox.value = new GlslCanvas(glslcanvas.value);
        glslSandbox.value.load(shader);
        requestAnimationFrame(step);
      });
    },
  });
</script>

<style lang="less" scoped>
  @import './assets/styles.less';

  .contain {
    position: relative;
    width: 100%;
  }
</style>
