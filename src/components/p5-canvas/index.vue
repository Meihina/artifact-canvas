<template>
  <div class="contain">
    <div>您好啊肉脚</div>
    <canvas id="p5-canvas" :width="150" :height="150"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "P5Canvas",
  setup() {
    onMounted(() => {
      console.log("Hi, man.");
    });
  },
});
</script>

<style lang="less" scoped>
.contain {
  position: relative;
  width: 100%;
}
</style>
