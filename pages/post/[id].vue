<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});
</script>

<template>
  <div>this is post {{ $route.params.id }}</div>
</template>
