<script lang="ts">
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/post/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/counter">Counter</NuxtLink></li>
        <li><NuxtLink to="/website-store">Website Store</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
