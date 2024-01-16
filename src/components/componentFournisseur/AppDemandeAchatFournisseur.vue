<template>
    <div class="pr-20 mt-10">
      <form class="mt-4">
        <div class="mb-4">
            <div class="w-1/2 mr-2 relative z-0 group">
                <select  @change="handleChange" name="listeActivites" id="listeActivites"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required >
                <option disabled selected value="null">Choise  Raison Sociale de Fournisseur</option>
                    <option v-for="RaisonSocialeFournisseur in RaisonSocialeFournisseurs" :key="RaisonSocialeFournisseur.id" :value="RaisonSocialeFournisseur.id">
                        {{ RaisonSocialeFournisseur.name }}
                    </option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" >
                    <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path>
                    </svg>
                </div>
                <label for="listeActivites" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >
                    Raison Sociale de Fournisseur
                </label>
            </div>
        </div>
        <div class="forrmHiden" v-if="isHidden">
            <div class="mb-4 flex">
                <div class="w-1/2 mr-2 relative z-0 group">
                    <input type="text" name="Formejuridique"  v-model="formData.Formejuridique"
                    id="raisonSocialeFournisseur" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                    <label for="raisonSocialeFournisseur"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Forme juridique
                    </label>
                </div>
                <div class="w-1/2 ml-2 relative z-0 group">
                    <input
                    type="text"
                    name="Ville"
                    id="Ville"
                    v-model="formData.Ville"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="Ville"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Ville
                    </label>
                </div>
            </div>
    
            <div class="mb-4 flex">
                <div class="w-1/2 mr-2 relative z-0 group">
                    <input
                    type="text"
                    name="Code Postal"
                    v-model="formData.CodePostal"
                    id="Code Postal"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="Code Postal"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Code Postal
                    </label>
                </div>
                <div class="w-1/2 ml-2 relative z-0 group">
                    <input
                    type="text"
                    name="Pays"
                    id="Pays"
                    v-model="formData.Pays"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="Pays"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Pays
                    </label>
                </div>
            </div>
    
            <div class="mb-4 flex">
                <div class="w-1/2 mr-2 relative z-0 group">
                    <input
                    type="text"
                    name="iceFournisseur"
                    v-model="formData.iceFournisseur"   
                    id="iceFournisseur"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="iceFournisseur"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    ICE
                    </label>
                </div>
                <div class="w-1/2 ml-2 relative z-0 group">
                    <input
                    type="text"
                    v-model="formData.emailFournisseur"   
                    name="emailFournisseur"
                    id="emailFournisseur"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="emailFournisseur"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Email
                    </label>
                </div>
            </div>
    
            <div class="mb-4 flex">
                <div class="w-1/2 mr-2 relative z-0 group">
                    <input
                    type="text"
                    v-model="formData.Activites"
                    name="Activites"
                    id="Activites"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="Activites"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Activités
                    </label>
                </div>
                <div class="w-1/2 ml-2 relative z-0 group">
                    <input
                    type="text"
                    name="telephoneFournisseur"
                    v-model="formData.telephoneFournisseur"
                    id="telephoneFournisseur"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    for="telephoneFournisseur"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Téléphone
                    </label>
                </div>
            </div>
            <div class="mb-4 flex">
                <div class="w-1/2 mr-2 relative z-0 group">
                    <select  name="listeActivites" id="listeActivites"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required >
                        <option v-for="Demandeur in Demandeurs" :key="Demandeur.id" :value="Demandeur.id">
                            {{ Demandeur.name }}
                        </option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" >
                        <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path>
                        </svg>
                    </div>
                    <label for="listeActivites" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >
                        Raison Sociale de Fournisseur
                    </label>
                </div>
                <div class="w-1/2 mr-2 relative z-0 group">
                    <select  name="listeActivites" id="listeActivites"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required >
                        <option v-for="LocataireMateriel in LocataireMateriels" :key="LocataireMateriel.id" :value="LocataireMateriel.id">
                            {{ LocataireMateriel.name }}
                        </option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" >
                        <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path>
                        </svg>
                    </div>
                    <label for="listeActivites" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >
                        Raison Sociale de Fournisseur
                    </label>
                </div>
            </div>
        </div>
        
  
        <div class="flex justify-end">
          <button type="button" class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">
            Annuler
          </button>
          <button type="submit" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHidden: false,
        RaisonSocialeFournisseurs: [
          { id: 1, name: "Fournisseure 1" },
          { id: 2, name: "Fournisseure 2" },
          { id: 3, name: "Fournisseure 3" },
          { id: 4, name: "Fournisseure 4" },
        ],
        Demandeurs: [
          { id: 1, name: "Demandeur 1" },
          { id: 2, name: "Demandeur 2" },
          { id: 3, name: "Demandeur 3" },
          { id: 4, name: "Demandeur 4" },
        ],
        LocataireMateriels: [
          { id: 1, name: "LocataireMateriels 1" },
          { id: 2, name: "LocataireMateriels 2" },
          { id: 3, name: "LocataireMateriels 3" },
          { id: 4, name: "LocataireMateriels 4" },
        ],
        formData: {
            Formejuridique: "Initial Forme juridique",
            Ville: "Initial Ville",
            CodePostal: "Initial Code Postal",
            Pays: "Initial Pays",
            iceFournisseur: "Initial ICE",
            emailFournisseur: "Initial Email",
            Activites: "Initial Activites",
            telephoneFournisseur: "066666666",

        },
      };
    },
    methods: {
      handleChange() {
        this.isHidden = true;
      },
    },
  };
  </script>
  