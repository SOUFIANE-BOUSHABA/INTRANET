<template>
    <div class="pr-20 mt-10">
      <form class="mt-4">
        <div class="mb-4 ">
          <div class=" mr-2 relative z-0 group">
            <input
              type="text"
              name="NumeroAffaire"
              id="NumeroAffaire"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="NumeroAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Numéro Affaire
            </label>
          </div>
        </div>
  
  
        <div class="flex justify-end">
          <button
            type="button"
            class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
          >
            Quitter
          </button>
          <button
            type="button"
            class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
          >
            suprimer Affaire
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Recherche Affaire
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    // Add your component logic here
  }
  </script>
  
  <style scoped>
    /* Add your component-specific styles here */
  </style>
  