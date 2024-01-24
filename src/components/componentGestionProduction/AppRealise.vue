<template>
    <div class="containerr">
      <div class="overflow-x-auto shadow-md container p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
        
            <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
          </div>
        </div>
  
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Numéro d'offre</th>
              <th class="px-4 py-2">Réf Client</th>
              <th class="px-4 py-2">Raison sociale</th>
              <th class="px-4 py-2">Mission</th>
              <th class="px-4 py-2">Actions</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="production in displayedProductions" :key="production.id">
              <td class="px-4 py-2">{{ production.date }}</td>
              <td class="px-4 py-2">{{ production.numeroOffre }}</td>
              <td class="px-4 py-2">{{ production.refClient }}</td>
              <td class="px-4 py-2">{{ production.raisonSociale }}</td>
              <td class="px-4 py-2">{{ production.mission }}</td>
              <td class="px-4 flex gap-2 py-2">
               
                <button title="supprimer" @click="showDeleteConfirmation(production)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </td>
              <td class="px-4 py-2">{{ production.status }}</td>
            </tr>
  
            <!-- Delete confirmation modal -->
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
  
      <div class="flex justify-between items-center mt-4">
  <div>
    <label for="showEntries" class="mr-2">Afficher</label>
    <select v-model="entriesToShow" @change="updatePage" id="showEntries" class="border border-gray-300 rounded p-2 focus:outline-none focus:shadow-outline">
      <option>5</option>
      <option>10</option>
      <option>20</option>
      <option>50</option>
      <option>100</option>
    </select>
    <span class="ml-2">entrées</span>
  </div>

  <div>
    <button @click="prevPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Préc</button>
    <span>Page {{ currentPage }} de {{ totalPages }}</span>
    <button @click="nextPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Suiv</button>
  </div>
</div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        deleteConfirmation: {
          show: false,
          message: '',
          productionIdToDelete: null,
        },
        productions: [
          
          {
            id: 1,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
          {
            id: 2,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
          {
            id: 3,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
          {
            id: 4,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
          {
            id: 5,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
          {
            id: 6,
            date: "2024-01-24",
            numeroOffre: "OFFRE001",
            refClient: "REF001",
            raisonSociale: "Production 1",
            mission: "Mission 1",
            status: "réalèse",
          },
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
      };
    },
    computed: {
      displayedProductions() {
        let filteredProductions = this.productions;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filteredProductions = filteredProductions.filter(production =>
            Object.values(production).some(value => value && value.toString().toLowerCase().includes(query))
          );
        }
  
        const start = (this.currentPage - 1) * this.entriesToShow;
        const end = start + this.entriesToShow;
        return filteredProductions.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.productions.length / this.entriesToShow);
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
  
      showDeleteConfirmation(production) {
        this.deleteConfirmation.productionIdToDelete = production.id;
        this.deleteConfirmation.message = `Are you sure you want to delete ${production.raisonSociale}?`;
        this.deleteConfirmation.show = true;
      },
  
      confirmDelete() {
        if (this.deleteConfirmation.productionIdToDelete !== null) {
          const index = this.productions.findIndex(production => production.id === this.deleteConfirmation.productionIdToDelete);
  
          if (index !== -1) {
            this.productions.splice(index, 1);
          }
        }
  
        this.hideDeleteConfirmation();
      },
  
      cancelDelete() {
        this.hideDeleteConfirmation();
      },
  
      hideDeleteConfirmation() {
        this.deleteConfirmation.show = false;
        this.deleteConfirmation.message = '';
        this.deleteConfirmation.productionIdToDelete = null;
      },
  
    },
  };
  </script>
  
 
  
<style scoped>
.containerr{
  max-width:95%;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 