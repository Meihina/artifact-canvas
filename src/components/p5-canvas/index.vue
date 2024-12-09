<template>
  <div class="contain">
    <div>您好啊肉脚</div>
    <canvas id="p5-canvas" :width="150" :height="150"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { stringify } from "qs";

interface IP5 {
  element?: HTMLElement;
}

export default defineComponent({
  name: "P5Canvas",
  setup() {
    const ele = ref<IP5>({});

    onMounted(async () => {
      console.log("Hi, man." + ele);
      console.log(stringify({ a: 1 }));
      const hate = new Promise((resolve) => {
        resolve(1);
      });
      await hate;
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
