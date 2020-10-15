<template>
  <div class="py-12 bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Quality Assured</p>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl sm:leading-10">
          A better way to get large shipments
        </h3>
      </div>

      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <li v-for="(wd, index) in welcomeData" :key="index">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <svg class="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="wd.icon" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">{{ wd.title }}</h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ wd.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeData: [
        {
          title: "Competitive Price",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
        {
          title: "No hidden fees",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        },
        {
          title: "Transfers are instant",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
        },
        {
          title: "Merchadasing. Reformed.",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
        },
      ],
    };
  },
};
</script>
