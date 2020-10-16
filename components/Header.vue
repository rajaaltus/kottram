<template>
  <div>
    <div class="sm:container mx-4 sm:mx-auto flex items-center justify-between pt-5">
      <div>
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="relative z-10 block text-gray-500 focus:outline-none hover:text-white">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
            <path v-if="isOpen" d="M14 15h-1l-3-3-3 3a1 1 0 11-1-2l2-3-2-3a1 1 0 111-2l3 3 3-3a1 1 0 111 2l-2 3 2 3v2z" />
            <path v-if="!isOpen" d="M16 9H4l-1 1 1 1h12l1-1-1-1zm0 4H4l-1 1 1 1h12l1-1-1-1zM4 7h12l1-1-1-1H4L3 6l1 1z" />
          </svg>
        </button>
      </div>
      <div class="hidden sm:flex items-center justify-evenly">
        <div class="text-gray-800 dark:text-gray-400 text-md font-semibold px-8"><nuxt-link to="/">Home</nuxt-link></div>
        <div class="text-gray-800 dark:text-gray-400 text-md font-semibold px-8"><nuxt-link to="/products">Products</nuxt-link></div>
        <div class="text-gray-800 dark:text-gray-400 text-md font-semibold pl-8"><nuxt-link to="/contact">Contact</nuxt-link></div>
      </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="mobile-menu">
      <div class="mt-5 text-center mx-auto w-full">
        <nuxt-link class="px-2 py-2 rounded dark:bg-gray-900 dark-hover:bg-gray-700 bg-gray-200 block" to="/">Home</nuxt-link>
        <nuxt-link class="px-2 py-2 rounded dark:bg-gray-900 dark-hover:bg-gray-700 bg-gray-200 block" to="/products">Products</nuxt-link>
        <nuxt-link class="px-2 py-2 rounded dark:bg-gray-900 dark-hover:bg-gray-700 bg-gray-200 block" to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
