<template>
  <video
    ref="video"
    class="video"
    autoplay
    loop
    muted
    playsinline
    :style="{
      '--max-column': INDEX_META.maxColumn,
      '--max-row': INDEX_META.maxRow,
      '--column': props.column,
      '--row': props.row,
    }"
    src="/public/video.mp4"
  />
</template>

<script setup>
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
</script>

<style scoped>
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
