<template>
    <div class="containerr">
      <div class="overflow-x-auto shadow-md container p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            
         
            <select  v-model="selectedYear" @change="filterByYear" id="selectYears"  class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
              <option value ='tout'>Tout</option>
              <option v-for="year in availableYears" :key="year">{{ year }}</option>
            </select>
            <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
          </div>
        </div>
        <div class="table-container">
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Numéro affaire</th>
              <th class="px-4 py-2">Référence Rapport</th>
              <th class="px-4 py-2">Désignation</th>
              <th class="px-4 py-2">Date Intervention</th>
              <th class="px-4 py-2">Date Production Contrôle</th>
              <th class="px-4 py-2">Catégorie</th>
              <th class="px-4 py-2">Type Rapport</th>
              <th class="px-4 py-2">Responsable Client</th>
              <th class="px-4 py-2">Nom de file</th>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in displayedClients" :key="client.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="client.selected" />
              </td>
              <td class="px-4 py-2">{{ client.numeroAffaire }}</td>
              <td class="px-4 py-2">{{ client.referenceRapport }}</td>
              <td class="px-4 py-2">{{ client.designation }}</td>
              <td class="px-4 py-2">{{ client.dateIntervention }}</td>
              <td class="px-4 py-2">{{ client.dateProductionControle }}</td>
              <td class="px-4 py-2">{{ client.categorie }}</td>
              <td class="px-4 py-2">{{ client.typeRapport }}</td>
              <td class="px-4 py-2">{{ client.responsableClient }}</td>
              <td class="px-4 py-2">{{ client.nomDeFile }}</td>
              <td class="px-4 py-2">{{ client.date }}</td>
              <td class="px-4 flex gap-2 py-2">
               
                <button title="suprimer" @click="showDeleteConfirmation(client)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
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
      <div class="flex justify-between items-center mt-4">
        <div>
          <label for="showEntries" class="mr-2">afficher</label>
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
        deleteConfirmation: {
          show: false,
          message: '',
          clientIdToDelete: null,
        },
        clients: [
        {
          id: 1,
          numeroAffaire: "Affaire 001",
          referenceRapport: "REF001",
          designation: "Designation 1",
          dateIntervention: "2024-01-25",
          dateProductionControle: "2024-01-26",
          categorie: "Catégorie A",
          typeRapport: "Type A",
          responsableClient: "Client A",
          nomDeFile: "File A",
          date: "2024-01-27",
          selected: false,
        },
        {
          id: 2,
          numeroAffaire: "Affaire 002",
          referenceRapport: "REF002",
          designation: "Designation 2",
          dateIntervention: "2024-01-28",
          dateProductionControle: "2024-01-29",
          categorie: "Catégorie B",
          typeRapport: "Type B",
          responsableClient: "Client B",
          nomDeFile: "File B",
          date: "2024-01-30",
          selected: false,
        },
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
        selectedYear: new Date().getFullYear(),
      };
    },
    computed: {
      availableYears() {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i > currentYear - 6; i--) {
          years.push(i);
        }
        return years;
      },
      displayedClients() {
        let filteredClients = this.clients;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filteredClients = filteredClients.filter(client =>
            Object.values(client).some(value => value && value.toString().toLowerCase().includes(query))
          );
        }
  
        const start = (this.currentPage - 1) * this.entriesToShow;
        const end = start + this.entriesToShow;
        return filteredClients.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.clients.length / this.entriesToShow);
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
      showDeleteConfirmation(client) {
        this.deleteConfirmation.clientIdToDelete = client.id;
        this.deleteConfirmation.message = `Are you sure you want to delete ${client.raisonSociale}?`;
        this.deleteConfirmation.show = true;
      },
      confirmDelete() {
        if (this.deleteConfirmation.clientIdToDelete !== null) {
          const index = this.clients.findIndex(client => client.id === this.deleteConfirmation.clientIdToDelete);
          if (index !== -1) {
            this.clients.splice(index, 1);
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
        this.deleteConfirmation.clientIdToDelete = null;
      },
    },
  };
  </script>
  
    
  <style scoped>
  .containerr{
    max-width: 95%;
    
    margin-left:40px;
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
  