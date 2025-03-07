<template>
  <NuxtPage />
</template>

<script setup>
import { PROJECT_NAME } from "~/constants/meta.js";

useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} | ${PROJECT_NAME}` : PROJECT_NAME,
});
</script>
