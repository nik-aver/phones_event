<template>
  <div class="form">
    <label for="name">Введите ряд:</label>

    <select
      name="rows"
      id="row-select"
      @change="
        (event) =>
          changeSelectHandler({
            queryName: INDEX_ROUTE_QUERY.row,
            event: event,
          })
      "
    >
      <option value="">--Выберите ряд--</option>
      <option
        v-for="row in INDEX_META.maxRow"
        :key="row"
        :value="row"
      >
        {{ row }}
      </option>
    </select>

    <label for="name">Введите место:</label>

    <select
      name="columns"
      id="column-select"
      @change="
        (event) =>
          changeSelectHandler({
            queryName: INDEX_ROUTE_QUERY.column,
            event: event,
          })
      "
    >
      <option value="">--Выберите место--</option>
      <option
        v-for="column in INDEX_META.maxColumn"
        :key="column"
        :value="column"
      >
        {{ column }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { INDEX_META } from "~/constants/pages/index/meta.js";
import { INDEX_ROUTE_QUERY } from "~/constants/pages/index/routeQuery.js";
import { ROUTES } from "~/constants/routes.js";

const router = useRouter();
const route = useRoute();

const changeSelectHandler = ({ event = null, queryName = null }) => {
  const value = event.target.value;

  if (!queryName) {
    return;
  }

  if (!value) {
    const query = {
      ...route.query,
    };

    delete query[queryName];

    return router.push({
      name: ROUTES.index.index,
      query,
    });
  }

  return router.push({
    name: ROUTES.index.index,
    query: {
      ...route.query,
      [queryName]: value,
    },
  });
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
</style>
