<template>
  <div class="sm:container sm:mx-auto">
    <div class="products sm:flex sm:items-center sm:justify-between h-full">
      <div class="w-full md:w-1/2 h-1/3 sm:h-screen dark:bg-blue-800 bg-blue-500 flex flex-col items-center justify-center">
        <div class="text-3xl px-2 pt-4 md:text-5xl font-bold tracking-wider">{{ name[0] }}</div>
        <div class="text-3xl px-2 md:text-5xl font-normal tracking-wider">{{ name[1] }}</div>
        <img :src="/products/ + product.image_name" :alt="product.image_name" />
        <div class="text-3xl px-2 pb-4 md:text-5xl font-normal tracking-wider">{{ name[2] }}</div>
      </div>
      <div class="w-full sm:w-2/3 h-full bg-gray-200 dark:bg-gray-900 p-4">
        <div class="flex justify-end mt-0 sm:mt-10">
          <button @click="prev" class="h-8 w-8 bg-gray-300 px-1 rounded-l focus:outline-none hover:bg-gray-400 duration-300">
            <svg viewBox="0 0 20 20" class="fill-current h-6 w-6 text-gray-800"><path fill-rule="evenodd" d="M13 5a1 1 0 010 2l-4 3 4 3a1 1 0 01-2 2l-4-4a1 1 0 010-2l4-4a1 1 0 012 0z" clip-rule="evenodd" /></svg>
          </button>
          <button @click="next" class="h-8 w-8 bg-gray-300 px-1 rounded-r focus:outline-none hover:bg-gray-400 duration-300">
            <svg viewBox="0 0 20 20" class="fill-current h-6 w-6 text-gray-800"><path fill-rule="evenodd" d="M7 15a1 1 0 010-2l4-3-4-3a1 1 0 012-2l4 4a1 1 0 010 2l-4 4a1 1 0 01-2 0z" clip-rule="evenodd" /></svg>
          </button>
        </div>

        <div class="overflow-hidden">
          <div class="mx-4 my-0 sm:my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Recommended For</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">{{ product.recommended_for }}</p>
          </div>
          <div class="hidden md:block mx-4 my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Features</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">
              {{ product.features }}
            </p>
          </div>
          <div class="mx-4 my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Quality Standards</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">
              {{ product.quality_standards }}
            </p>
          </div>
          <div class="mx-4 my-0 sm:my-16">
            <table class="text-xs w-full">
              <thead class="dark:bg-blue-800 bg-blue-500 text-gray-200">
                <th class="py-2">Specification</th>
                <th></th>
              </thead>
              <tbody class="dark:bg-gray-800 bg-gray-300">
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Length</td>
                  <td class="px-4 py-2">{{ product.specification.length }}</td>
                </tr>
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Color</td>
                  <td class="px-4 py-2">{{ product.specification.color }}</td>
                </tr>
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Sizing</td>
                  <td class="px-4 py-2">
                    <div class="inline pr-1" v-for="(size, index) in sizes" :key="index">
                      <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">{{ size }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="border-r border-1 border-gray-700 px-4">Features</td>
                  <td class="px-4 py-2">{{ product.specification.features }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: ["product", "currentKey"],
  computed: {
    name() {
      return this.product.name.split(" ");
    },
    sizes() {
      return this.product.specification.sizes.split(",");
    },
  },
  async created() {},
  methods: {
    prev() {
      gsap.fromTo(".products", { opacity: 0 }, { opacity: 1, duration: 1 });
      this.$emit("prev", this.currentKey);
    },
    next() {
      gsap.fromTo(".products", { opacity: 0 }, { opacity: 1, duration: 1 });
      this.$emit("next", this.currentKey);
    },
  },
};
</script>
