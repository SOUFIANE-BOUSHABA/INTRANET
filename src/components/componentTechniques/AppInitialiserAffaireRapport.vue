<template>
    <div class="pr-20 mt-10">
      <form class="mt-4">
  
        <div class="mb-4 flex">
          <div class="w-1/2 mr-2 relative z-0 group">
            <input
              type="text"
              name="NAffaire"
              id="NAffaire"
              v-model="numeroAffaire"
              :disabled="numeroAffaireDisabled"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <button
                type="button"
                @click="changeNumeroAffaire"
                v-if="numeroAffaireDisabled"
                class="px-4 mt-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Change N°AFFAIRE 
            </button>

            <button
                type="button"
                v-if="!numeroAffaireDisabled"
                @click="enregisterNumeroAffaire"
                class="px-4 mt-4 py-2 bg-green-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Enregister N°AFFAIRE 
            </button>

            <button
                type="button"
                v-if="!numeroAffaireDisabled"
                @click="annulerNumeroAffaire"
                class="px-4 mt-4 ml-2 py-2 bg-red-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Annuler
            </button>
            <label
              for="NAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            LA DERNIÈRE N°AFFAIRE
            </label>
          </div>
          <div class="w-1/2 ml-2 relative z-0 group">
            <input
              type="text"
              name="nRapport"
              id="nRapport"
              v-model="numeroRapport"
              :disabled="numeroRapportDisabled"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <button
            type="button"
            v-if="numeroRapportDisabled"
            @click="changeNumeroRapport"
            class="px-4  mt-4  py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Change N° RAPPORT 
          </button>
          <button
                type="button"
                v-if="!numeroRapportDisabled"
                @click="enregisterNumeroRapport"
                class="px-4 mt-4 py-2 bg-green-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Enregister N°AFFAIRE 
            </button>

            <button
                type="button"
                v-if="!numeroRapportDisabled"
                @click="annulerNumeroRapport"
                class="px-4 mt-4 ml-2 py-2 bg-red-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
                Annuler
            </button>
            <label
              for="nRapport"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            LA DERNIÈRE N° RAPPORT
            </label>
          </div>
        </div>
  

      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numeroAffaire: "YourInitialValueForAffaire",
        numeroAffaireDisabled: true,
        numeroRapport: "YourInitialValueForRapport",
        numeroRapportDisabled: true,
        newNumeroAffaire:"YourInitialValueForAffaire",
        newNumeroRapport:"YourInitialValueForRapport",
      };
    },
    methods: {
      changeNumeroAffaire() {
        this.numeroAffaireDisabled= false;
      },
      changeNumeroRapport() {
        this.numeroRapportDisabled= false;
      },
      annulerNumeroAffaire() {
        this.numeroAffaireDisabled = true;
        this.numeroAffaire = this.newNumeroAffaire;
      },
      annulerNumeroRapport() {
        this.numeroRapportDisabled = true;
        this.numeroRapport = this.newNumeroRapport;
      },
      
      enregisterNumeroAffaire() {
        this.newNumeroAffaire=this.numeroAffaire;
        this.numeroAffaireDisabled = true;
      }, 
      enregisterNumeroRapport() {
        this.newNumeroRapport=this.numeroRapport;
        this.numeroRapportDisabled = true;
      }, 
           
    },
  };
  </script>