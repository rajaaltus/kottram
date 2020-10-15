<template>
  <div class="bg-gray-700 text-red-400 h-24">
    <h1 class="container mx-auto text-center text-4xl text-gray-300 pt-8">Contact</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  },
};
</script>
