<script setup lang="ts">
import { useWebsiteStore } from "~/stores/website";

const website = useWebsiteStore();

await callOnce(website.fetch);
</script>

<template>
  <div>
    <h1>{{ website.name }}</h1>
    <p>{{ website.description }}</p>
  </div>
</template>
