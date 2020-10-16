<template>
  <div class="sm:flex sm:items-center sm:justify-between py-10 my-10">
    <div class="w-full mx-4 sm:w-1/2">
      <div class="hero-title font-bold text-5xl tracking-wider text-red-600 py-2">Let's fight</div>
      <div class="hero-subtitle font-semibold text-4xl tracking-wider text-red-400">Corona Virus together</div>
      <div class="mr-4 hero-subtitle text-lg dark:text-gray-500 text-gray-700 mt-5">
        <p>Kottram Healthcare supplies various covid essentials worldwide. Our major products are Nitrile powde-free gloves, 3-PLY Face mask, N95 3M Masks and many more...</p>
      </div>

      <button @click="scrollToProduct" class="bg-yellow-600 text-gray-900 hover:text-gray-800 hover:bg-yellow-500 text-sm tracking-wide font-semibold px-4 rounded mt-20 py-3">
        See our products
      </button>
    </div>
    <div class="hidden sm:block hero-asset w-2/5">
      <img src="/hero_asset.svg" alt="hero-asset" class="h-full w-full" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
if (process.client) {
  gsap.registerPlugin(ScrollToPlugin);
}
export default {
  mounted() {
    gsap.fromTo(".hero-asset", { scale: 4 }, { scale: 1, duration: 1, ease: "power.3", delay: 1 });
    gsap.fromTo(".hero-title", { y: "-1000" }, { y: 0, duration: 1, ease: "power.3", delay: 2 });
    gsap.fromTo(".hero-subtitle", { x: "-1400" }, { x: 0, duration: 1, ease: "power.2", delay: 3 });
  },
  methods: {
    scrollToProduct() {
      console.log("hi");
      gsap.to(window, { duration: 1, scrollTo: { y: "#product", offsetY: 0 }, ease: "back" });
    },
  },
};
</script>
