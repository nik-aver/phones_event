<template>
  <video
    ref="video"
    class="video"
    autoplay
    loop
    muted
    playsinline
    @loadedmetadata="onLoadedMetaDataHandler"
    :style="{
      height: windowHeight * INDEX_META.maxRow + 'px',
      left: `${-(videoWidth / INDEX_META.maxColumn) * (props.column - 1)}px`,
      top: `${-(videoHeight / INDEX_META.maxRow) * (props.row - 1)}px`,
      width: windowWidth * INDEX_META.maxColumn + 'px',
    }"
    src="/public/video.mp4"
  />
</template>

<script setup>
import { useElementSize, useWindowSize } from "@vueuse/core";

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
const initialVideoWidth = ref(null);
const initialVideoHeight = ref(null);

const { height: windowHeight, width: windowWidth } = useWindowSize();
const { height: videoHeight, width: videoWidth } = useElementSize(video);

const onLoadedMetaDataHandler = (event) => {
  initialVideoWidth.value = event.target.videoWidth;
  initialVideoHeight.value = event.target.videoHeight;
};
</script>

<style scoped>
.video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
  object-position: 50% 50%;
}
</style>
