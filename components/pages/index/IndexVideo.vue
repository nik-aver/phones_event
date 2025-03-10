<template>
  <div class="video__container">
    <video
      ref="video"
      class="video"
      muted
      loop
      playsinline
      @play="onPlayHandler"
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
      v-show="!isPlayVideo"
    >
      <div
        v-html="time"
        v-if="time"
      />
    </div>
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

const API_TIME_URL = "/api/time";
let intervalTimer = null;

const video = ref(null);
const isPlayVideo = ref(false);

const timer = ref({
  milliseconds: 0,
  minutes: 0,
  seconds: 0,
});

const setMinutes = (minutes) => {
  timer.value.minutes = minutes;
};

const setSeconds = (seconds) => {
  timer.value.seconds = seconds;
};

const getFormat = (value) => {
  if (!value) {
    return "00";
  }

  return value.toString().length > 1 ? value : "0" + value;
};

const time = computed(() => {
  if (!timer.value?.minutes && !timer.value?.seconds) {
    return null;
  }

  return `${getFormat(timer.value?.minutes)} : ${getFormat(timer.value?.seconds)}`;
});

const destroyIntervalTimer = () => {
  clearInterval(intervalTimer);
};

const createIntervalTimer = () => {
  intervalTimer = setInterval(() => {
    if (timer.value.seconds === 0) {
      setMinutes(timer.value.minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(timer.value.seconds - 1);
    }

    if (timer.value.minutes === 0 && timer.value.seconds === 0) {
      return destroyIntervalTimer();
    }
  }, 1000);
};

const startVideoDelay = (timeMillisecond) => {
  setTimeout(() => {
    if (video.value) {
      video.value.play();
    }
  }, timeMillisecond);
};

const onPlayHandler = () => {
  isPlayVideo.value = true;
};

const blockScrollUpdatePage = () => {
  document.querySelector("body").addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
    },
    { passive: false },
  );
};

const getTime = async () => {
  const dateStart = new Date();
  const response = await fetch(API_TIME_URL);
  const data = await response.json();
  const dateFinish = new Date();

  return {
    time: {
      milliseconds: data.milliseconds,
      minutes: data.minutes,
      seconds: data.seconds,
    },
    timeDelay: dateFinish - dateStart,
  };
};

onMounted(async () => {
  const { time, timeDelay } = await getTime();
  blockScrollUpdatePage();

  startVideoDelay(
    time.minutes * 60 * 1000 +
      time.seconds * 1000 +
      time.milliseconds -
      timeDelay,
  );

  setMinutes(time.minutes);
  setSeconds(time.seconds);

  createIntervalTimer();
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
