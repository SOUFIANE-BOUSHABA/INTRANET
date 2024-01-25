<template>
    <div class="containerr">
      <div class="overflow-x-auto shadow-md container p-4">
        <form class="mt-4">
          <div class="mb-4 flex items-center">
            <div class="w-1/2 mr-2 relative z-0 group">
              <input
                type="text"
                name="NomAffaire"
                id="NomAffaire"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="NomAffaire"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nom Affaire
              </label>
            </div>
            <div class="w-1/2 flex gap-3 ml-4">
              <button
                type="button"
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Rechercher
              </button>

              <button
                type="button"
                class="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Quitter
              </button>
              <button
                type="button"
                class="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Supprimer
              </button>
            </div>
           
          </div>
        </form>

        kml hadi
      </div>
    </div>
  </template>
  
  <style scoped>
  .containerr {
    max-width: 95%;
  }
  
  .table-container {
    overflow-x: auto;
    margin: 0 auto;
    position: relative;
  }
  
  table {
    width: max-content;
  }
  
  table tr {
    border-bottom: 1px solid #e2e8f0;
  }
  </style>
  