<template>
  <main class="main">
    <IndexForm v-if="!column || !row" />

    <IndexVideo
      v-else
      :column="column"
      :row="row"
    />

    <div
      style="
        position: absolute;
        top: 10px;
        left: 50%;
        translate: -50%;
        font-size: 20px;
        color: #151616;
        border: 20px;
        background-color: #958db6;
      "
    >
      НАШ РЯД {{ row }} / НАШЕ МЕСТО {{ column }}
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";

import IndexForm from "~/components/pages/index/IndexForm.vue";
import IndexVideo from "~/components/pages/index/IndexVideo.vue";
import { INDEX_META } from "~/constants/pages/index/meta.js";
import { INDEX_ROUTE_QUERY } from "~/constants/pages/index/routeQuery.js";

const route = useRoute();

const checkQueryParam = ({ maxValue = null, queryName = null }) => {
  const routeQuery = route.query ? route.query[queryName] : null;

  if (
    routeQuery &&
    /^\d+$/.test(routeQuery) &&
    Number(routeQuery) <= maxValue
  ) {
    return Number(routeQuery);
  }

  return null;
};

const column = computed(() =>
  checkQueryParam({
    maxValue: INDEX_META.maxColumn,
    queryName: INDEX_ROUTE_QUERY.column,
  }),
);

const row = computed(() =>
  checkQueryParam({
    maxValue: INDEX_META.maxRow,
    queryName: INDEX_ROUTE_QUERY.row,
  }),
);
</script>

<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
</style>
