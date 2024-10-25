<script setup lang="ts">
// use useFetch and useAsyncData to fetch the data from api
// fetch give all data universal rendering
// alternatively use useLazyFetch and useLazyAsyncData as convenient methods to perform the same.
const { data } = await useFetch("/api/bar");

console.log(data, "data");
</script>

<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <p>
      {{ data?.["createdAt"]?.day }} / {{ data?.["createdAt"]?.month }} /
      {{ data?.["createdAt"]?.year }}
    </p>
  </section>
</template>
