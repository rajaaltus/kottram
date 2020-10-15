<template>
  <div v-if="loading" class="animate-pulse fixed w-full h-full flex items-center text-center justify-center">
    <!-- <div class="w-1/4 h-1/4 p-10">
      <img src="/favicon.svg" alt="loading art" width="100%" height="100%" />
    </div> -->
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    async finish() {
      this.loading = false;
    },
  },
};
</script>

<style>
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
