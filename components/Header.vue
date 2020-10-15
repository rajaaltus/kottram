<template>
  <div class="container mx-auto flex items-center justify-between pt-5">
    <div>
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <div class="flex items-center justify-evenly">
      <div class="text-gray-800 dark:text-gray-400 text-md font-semibold px-8"><nuxt-link to="/">Home</nuxt-link></div>
      <div class="text-gray-800 dark:text-gray-400 text-md font-semibold px-8"><nuxt-link to="/products">Products</nuxt-link></div>
      <div class="text-gray-800 dark:text-gray-400 text-md font-semibold pl-8"><nuxt-link to="/contact">Contact</nuxt-link></div>
    </div>
  </div>
</template>
