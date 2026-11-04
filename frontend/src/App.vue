<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout">
    <RouterView />
  </component>
</template>

<style scoped>
</style>
