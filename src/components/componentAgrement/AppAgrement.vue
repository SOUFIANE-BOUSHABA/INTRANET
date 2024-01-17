<template>
    <div class="container">
      <div class="overflow-x-auto shadow-md container p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="relative z-0  w-40 ml-4 group">
                        <label for="departement" class="sr-only">Département</label>
                        <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
                            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
            <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
          </div>
        </div>
        <div class="table-container">
        <table class="p-4 table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Agrément</th>
              <th class="px-4 py-2">Ministre</th>
              <th class="px-4 py-2">Date d'agrément</th>
              <th class="px-4 py-2">Pupli/Bulletin O/N° A</th>
              <th class="px-4 py-2">Status</th>
              <th class="px-4 py-2">Validité</th>
              <th class="px-4 py-2">Date D'ex</th>
              <th class="px-4 py-2">Date de Re</th>
              <th class="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="agrement in displayedAgrements" :key="agrement.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="agrement.selected" />
              </td>
              <td class="px-4 py-2">{{ agrement.agrement }}</td>
              <td class="px-4 py-2">{{ agrement.ministre }}</td>
              <td class="px-4 py-2">{{ agrement.dateAgrément }}</td>
              <td class="px-4 py-2">{{ agrement.pupliBulletin }}</td>
              <td class="px-4 py-2">{{ agrement.status }}</td>
              <td class="px-4 py-2">{{ agrement.validité }}</td>
              <td class="px-4 py-2">{{ agrement.dateDex }}</td>
              <td class="px-4 py-2">{{ agrement.dateRe }}</td>
              <td class="px-4 flex gap-2 py-2">
                    <a href="UpdateAgrement"><button title="modifier" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button></a>
                    <button title="supprimer" @click="showDeleteConfirmation(agrement)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                    <font-awesome-icon :icon="['fas', 'trash']" />
                    </button>
                    <a title="pdf"  class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a>
                </td>
            </tr>
  
            <div v-show="deleteConfirmation.show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div class="bg-white p-8 rounded shadow-md">
                <p class="text-lg font-semibold mb-4">Confirmation</p>
                <p class="mb-4">{{ deleteConfirmation.message }}</p>
                <div class="flex justify-end">
                  <button @click="confirmDelete" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">OK</button>
                  <button @click="cancelDelete" class="px-4 py-2 bg-gray-300 text-gray-700 rounded">Cancel</button>
                </div>
              </div>
            </div>
  
          </tbody>
        </table>
      </div>
      </div>
  
      <div class="flex container justify-between items-center mt-4">
        <div>
          <label for="showEntries" class="mr-2">Afficher</label>
          <select v-model="entriesToShow" @change="updatePage" id="showEntries" class="border border-gray-300 rounded p-2 focus:outline-none focus:shadow-outline">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span class="ml-2">entries</span>
        </div>
  
        <div>
          <button @click="prevPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Prev</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {

        years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
      
      selectedYear: new Date().getFullYear(),

        deleteConfirmation: {
          show: false,
          message: '',
          agreementIdToDelete: null,
        },
        agrements: [
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
          {
            id: 1,
            agrement: "Contrôle des appareils et Accessoire de levage",
            ministre: "Ministre de l'emploi",
            dateAgrément: "2024-01-17",
            pupliBulletin: "test",
            status: "valider",
            validité: "15 Mois",
            dateDex: "27/04/2025",
            dateRe: "27/04/2024",
            selected: false,
          },
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
      };
    },
    computed: {
      displayedAgrements() {
        let filteredAgrements = this.agrements;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filteredAgrements = filteredAgrements.filter(agrement =>
            Object.values(agrement).some(value => value && value.toString().toLowerCase().includes(query))
          );
        }
  
        const start = (this.currentPage - 1) * this.entriesToShow;
        const end = start + this.entriesToShow;
        return filteredAgrements.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.agrements.length / this.entriesToShow);
      },
    },
    methods: {
      updatePage() {
        this.currentPage = 1;
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
  
      showDeleteConfirmation(agrement) {
    this.deleteConfirmation.show = true;
    this.deleteConfirmation.message = `Are you sure you want to delete ${agrement.agrement}?`;
    this.deleteConfirmation.agreementIdToDelete = agrement.id; 
  },

  confirmDelete() {
    if (this.deleteConfirmation.agreementIdToDelete !== null) {
      const index = this.agrements.findIndex(agrement => agrement.id === this.deleteConfirmation.agreementIdToDelete);

      if (index !== -1) {
        this.agrements.splice(index, 1);
      }
    }

    this.cancelDelete();
  },




    cancelDelete() {
    
      this.deleteConfirmation.show = false;
      this.deleteConfirmation.message = '';
      this.deleteConfirmation.agrementIdToDelete = null;
    },
    },
  };
  </script>
  
<style scoped>
.container {
  max-width: 95%;
  
  margin-left:25px;
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
In this modification