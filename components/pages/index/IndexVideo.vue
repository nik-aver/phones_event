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
      src="/public/video4.mp4"
    />

    <div
      class="timer"
      v-show="time"
      v-html="time"
    />
  </div>
</template>

<script setup>
import { setInterval } from "#app/compat/interval.js";
import { computed, onMounted } from "vue";

import { INDEX_META } from "~/constants/pages/index/meta.js";

const props = defineProps({
  column: {
    default: 0,
    type: Number,
  },
  row: {
    default: 0,
    type: Number,
  },
});

const video = ref(null);
const timer = ref({
  milliseconds: null,
  minutes: null,
  seconds: null,
});

const getFormat = (value) => {
  if (!value) {
    return "00";
  }

  return value.toString().length > 1 ? value : "0" + value;
};

const time = computed(() => {
  if (!timer.value.minutes && !timer.value.seconds) {
    return null;
  }

  return `${getFormat(timer.value.minutes)} : ${getFormat(timer.value.seconds)}`;
});

let intervalTimer = null;

const destroyIntervalTimer = () => {
  clearInterval(intervalTimer);
};

const createIntervalTimer = () => {
  intervalTimer = setInterval(() => {
    if (timer.value.seconds === 0) {
      timer.value.minutes = timer.value.minutes - 1;
      timer.value.seconds = 59;
    } else {
      timer.value.seconds = timer.value.seconds - 1;
    }

    if (timer.value.minutes === 0 && timer.value.seconds === 0) {
      return destroyIntervalTimer();
    }
  }, 1000);
};

const startVideoDelay = (timerMillisecond) => {
  setTimeout(() => {
    if (video.value) {
      video.value.play();
    }
  }, timerMillisecond);
};

const startVideo = () => {
  const date = new Date();
  const currentMinutes = date.getMinutes().toString().split("").pop();

  timer.value.milliseconds = 1000 - date.getMilliseconds();
  timer.value.seconds = 60 - date.getSeconds();
  timer.value.minutes = (currentMinutes >= 5 ? 10 : 5) - currentMinutes - 1;

  startVideoDelay(
    timer.value.minutes * 60 * 1000 +
      timer.value.seconds * 1000 +
      timer.value.milliseconds,
  );

  return createIntervalTimer();
};

onMounted(() => {
  document.querySelector("body").addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
    },
    { passive: false },
  );
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
