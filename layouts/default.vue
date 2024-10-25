<script>
import Header from "~/components/common/header/Header.vue";

export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>

<template>
  <div>
    <Header />
    <slot />
    <AppFooter />
  </div>
</template>
