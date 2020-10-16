<template>
  <div class="sm:container sm:mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between h-full">
      <div class="w-full sm:w-1/3 h-1/3 sm:h-screen bg-purple-200">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" alt="test" />
      </div>
      <div class="w-full sm:w-2/3 h-full bg-gray-200 dark:bg-gray-900 p-4">
        <div class="flex justify-end mt-0 sm:mt-10">
          <button class="h-8 w-8 bg-gray-300 px-1 rounded-l focus:outline-none hover:bg-gray-400 duration-300">
            <svg viewBox="0 0 20 20" class="fill-current h-6 w-6 text-gray-800"><path fill-rule="evenodd" d="M13 5a1 1 0 010 2l-4 3 4 3a1 1 0 01-2 2l-4-4a1 1 0 010-2l4-4a1 1 0 012 0z" clip-rule="evenodd" /></svg>
          </button>
          <button class="h-8 w-8 bg-gray-300 px-1 rounded-r focus:outline-none hover:bg-gray-400 duration-300">
            <svg viewBox="0 0 20 20" class="fill-current h-6 w-6 text-gray-800"><path fill-rule="evenodd" d="M7 15a1 1 0 010-2l4-3-4-3a1 1 0 012-2l4 4a1 1 0 010 2l-4 4a1 1 0 01-2 0z" clip-rule="evenodd" /></svg>
          </button>
        </div>

        <div class="overflow-hidden">
          <div class="mx-4 my-0 sm:my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Recommended For</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">Lesser exanmination procedures, food industry, janitorial and cleaning painting safety, tatoo salons.</p>
          </div>
          <div class="hidden md:block mx-4 my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Features</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">
              Great comfort and tactile sensitivity, reliable quality at affordable price, perfect for lighter-duty application where frequent glove changes are needed, ideal for food handling.
            </p>
          </div>
          <div class="mx-4 my-8">
            <div class="flex items-center justify-start">
              <span class="h-4 w-2 rounded-full bg-indigo-700 px-2 py-1 mr-4">&nbsp;</span>
              <h2 class="text-sm sm:text-2xl font-bold tracking-wider dark:text-gray-400 text-gray-800">Quality Standards</h2>
            </div>
            <p class="ml-8 pt-2 text:xs sm:text-md font-normal tracking-wide dark:text-gray-500 text-gray-700">
              Conforms to ASTM, D6319 and EN455, PPE, CAT III. Manufactured under GMP, ISO 9001:2015 and ISO 13485:2016 Quality Management System.
            </p>
          </div>
          <div class="mx-4 my-0 sm:my-16">
            <table class="text-xs">
              <thead class="bg-purple-700 text-gray-200 w-full">
                <th class="px-4 py-2">Specification</th>
                <th></th>
              </thead>
              <tbody class="bg-gray-400">
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Length</td>
                  <td class="px-4 py-2">12”/min. 290 mm</td>
                </tr>
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Color</td>
                  <td class="px-4 py-2">Blue</td>
                </tr>
                <tr class="border-b border-1 border-gray-700">
                  <td class="border-r border-1 border-gray-700 px-4">Sizing</td>
                  <td class="px-4 py-2">
                    <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">XS</span>
                    <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">S</span>
                    <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">M</span>
                    <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">L</span>
                    <span class="px-2 py-1 rounded bg-indigo-500 text-gray-200">XL</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-r border-1 border-gray-700 px-4">Features</td>
                  <td class="px-4 py-2">Ambidextrous, plam/finger textured surface, beaded cuff, 5 mil thickness.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
