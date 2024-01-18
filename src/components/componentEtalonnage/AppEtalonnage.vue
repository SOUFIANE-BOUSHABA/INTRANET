<template>
  <div class="container">
    <div class="overflow-x-auto shadow-md container p-4">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="relative z-0  w-40 ml-4 group">
            <label for="departement" class="sr-only">Département</label>
            <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a="" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
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
              <th class="px-4 py-2">Désignation</th>
              <th class="px-4 py-2">Marque</th>
              <th class="px-4 py-2">Identification</th>
              <th class="px-4 py-2">Étalonnie Le</th>
              <th class="px-4 py-2">Prochaine Étalonnage</th>
              <th class="px-4 py-2">Certificats d'étalonnage</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="etalonnage in displayedEtalonnages" :key="etalonnage.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="etalonnage.selected" />
              </td>
              <td class="px-4 py-2">{{ etalonnage.designation }}</td>
              <td class="px-4 py-2">{{ etalonnage.marque }}</td>
              <td class="px-4 py-2">{{ etalonnage.identification }}</td>
              <td class="px-4 py-2">{{ etalonnage.etalonnageLe }}</td>
              <td class="px-4 py-2">{{ etalonnage.prochaineEtalonnage }}</td>
              <td class="px-4 py-2">{{ etalonnage.certificatsEtalonnage }}</td>
              <td class="px-4 flex gap-2 py-2">
                <a href="updateEtalonnage"><button title="modifier" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button></a>
                <button title="supprimer" @click="showDeleteConfirmation(etalonnage)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
                <a title="pdf" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a>
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
        etalonnageIdToDelete: null,
      },
      etalonnages: [
  {
    id: 1,
    designation: "Etalon 1",
    marque: "Fake Marque 1",
    identification: "ID001",
    etalonnageLe: "2024-01-17",
    prochaineEtalonnage: "2025-01-17",
    certificatsEtalonnage: "Certif001",
    selected: false,
  },
  {
    id: 2,
    designation: "Etalon 2",
    marque: "Fake Marque 2",
    identification: "ID002",
    etalonnageLe: "2024-02-17",
    prochaineEtalonnage: "2025-02-17",
    certificatsEtalonnage: "Certif002",
    selected: false,
  },
  {
    id: 3,
    designation: "Etalon 3",
    marque: "Fake Marque 3",
    identification: "ID003",
    etalonnageLe: "2024-03-17",
    prochaineEtalonnage: "2025-03-17",
    certificatsEtalonnage: "Certif003",
    selected: false,
  },
  {
    id: 4,
    designation: "Etalon 4",
    marque: "Fake Marque 4",
    identification: "ID004",
    etalonnageLe: "2024-04-17",
    prochaineEtalonnage: "2025-04-17",
    certificatsEtalonnage: "Certif004",
    selected: false,
  },
  {
    id: 5,
    designation: "Etalon 5",
    marque: "Fake Marque 5",
    identification: "ID005",
    etalonnageLe: "2024-05-17",
    prochaineEtalonnage: "2025-05-17",
    certificatsEtalonnage: "Certif005",
    selected: false,
  },
],

      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedEtalonnages() {
      let filteredEtalonnages = this.etalonnages;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredEtalonnages = filteredEtalonnages.filter(etalonnage =>
          Object.values(etalonnage).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredEtalonnages.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.etalonnages.length / this.entriesToShow);
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
    showDeleteConfirmation(etalonnage) {
      this.deleteConfirmation.show = true;
      this.deleteConfirmation.message = `Are you sure you want to delete ${etalonnage.designation}?`;
      this.deleteConfirmation.etalonnageIdToDelete = etalonnage.id;
    },
    confirmDelete() {
      if (this.deleteConfirmation.etalonnageIdToDelete !== null) {
        const index = this.etalonnages.findIndex(etalonnage => etalonnage.id === this.deleteConfirmation.etalonnageIdToDelete);

        if (index !== -1) {
          this.etalonnages.splice(index, 1);
        }
      }

      this.cancelDelete();
    },
    cancelDelete() {
      this.deleteConfirmation.show = false;
      this.deleteConfirmation.message = '';
      this.deleteConfirmation.etalonnageIdToDelete = null;
    },
  },
};
</script>

<style scoped>
.container {
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
