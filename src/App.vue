<template>
  <GlslCanvas
    :width="250"
    :height="150"
    :shader="shader"
    :uniforms="uniforms"
  />
  <!-- <P5Canvas></P5Canvas> -->
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { GlslCanvas } from 'artifact-canvas/glsl-canvas';
  import testShader from './shader/default.glsl';
  // import GlslCanvas from "./components/glsl-canvas/index.vue";

  const shader = ref<string>(testShader);
  const uniforms = ref<Record<string, any>>({
    // u_random: 0.1,
  });

  const set = (timestamp: number) => {
    if (timestamp % 1000 < 10) {
      // uniforms.value["u_random"] += 0.1;
    }
    requestAnimationFrame(set);
  };

  onMounted(() => {
    requestAnimationFrame(set);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const c = require('artifact-canvas/glsl-canvas').default;
    console.log(c);
  });
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
