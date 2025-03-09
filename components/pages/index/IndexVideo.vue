<template>
  <div class="video__container">
    <video
      ref="video"
      class="video"
      muted
      loop
      playsinline
      preload="auto"
      :style="{
        '--max-column': INDEX_META.maxColumn,
        '--max-row': INDEX_META.maxRow,
        '--column': props.column,
        '--row': props.row,
      }"
      src="/public/video3.mp4"
    />

    <div
      class="timer"
      v-show="timer"
      v-html="timer"
    />
  </div>
</template>

<script setup>
import { setInterval } from "#app/compat/interval.js";
import { onMounted } from "vue";

import { INDEX_META } from "~/constants/pages/index/meta.js";

const props = defineProps({
  column: {
    required: true,
    type: Number,
  },
  row: {
    required: true,
    type: Number,
  },
});

const video = ref(null);
const timer = ref(null);

let intervalTimer = null;

const destroyIntervalTimer = () => {
  clearInterval(intervalTimer);
};

const createIntervalTimer = () => {
  intervalTimer = setInterval(() => {
    timer.value = timer.value - 1;

    if (timer.value === 0) {
      return destroyIntervalTimer();
    }
  }, 1000);
};

const startVideo = () => {
  const date = new Date();
  const millisecond = date.getMilliseconds();
  const seconds = date.getSeconds();

  timer.value = 60 - seconds;

  setTimeout(
    () => {
      if (video.value) {
        video.value.play();
      }
    },
    timer.value * 1000 - millisecond,
  );

  return createIntervalTimer();
};

onMounted(() => {
  startVideo();
});

onUnmounted(() => {
  destroyIntervalTimer();
});
</script>

<style scoped>
.video__container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.timer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  font-size: 50px;
  color: #ffffff;
  background-color: rgb(0 0 0 / 30%);
  backdrop-filter: blur(10px);
}

.video {
  --max-column: 0;
  --max-row: 0;
  --row: 0;
  --column: 0;

  position: absolute;
  top: calc(100% * (var(--row) - 1) * -1);
  left: calc(100% * (var(--column) - 1) * -1);
  width: calc(100% * var(--max-column));
  height: calc(100% * var(--max-row));
  object-fit: fill;
}
</style>
