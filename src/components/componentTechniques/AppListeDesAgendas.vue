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
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Agenda</th>
              <th class="px-4 py-2">Fix & Errors</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in displayedClients" :key="client.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="client.selected" />
              </td>
              <td class="px-6 py-4">
                <div class="bg-gray-200 p-4 rounded-md" style="width:600px">
                    <ul class="list-none p-0">
                    <li class="mb-2">
                        <span class="font-bold">ID De Agenda:</span> {{ client.idagenda }}
                    </li>
                    <li class="mb-2">
                        <span class="font-bold">Date De Agenda:</span> {{ client.dateagenda }}
                    </li>
                    <li class="mb-2">
                        <ul class="list-disc pl-5">
                        <li><span class="font-bold">Annee:</span> {{ client.Annee }}</li>
                        <li><span class="font-bold">Client:</span> {{ client.Client }}</li>
                        <li><span class="font-bold">CountInput:</span> {{ client.CountInput }}</li>
                        <li><span class="font-bold">Date:</span> {{ client.Date }}</li>
                        <li><span class="font-bold">Disabled:</span> {{ client.Disabled }}</li>
                        <li><span class="font-bold">FlagSauvgarder:</span> {{ client.FlagSauvgarder }}</li>
                        <li><span class="font-bold">Horaire:</span> {{ client.Horaire }}</li>
                        <li><span class="font-bold">Inspecteur:</span> {{ client.Inspecteur }}</li>
                        <li><span class="font-bold">Jour:</span> {{ client.Jour }}</li>
                        <li><span class="font-bold">Lieu:</span> {{ client.Lieu }}</li>
                        <li><span class="font-bold">Matricule:</span> {{ client.Matricule }}</li>
                        <li><span class="font-bold">Mois:</span> {{ client.Mois }}</li>
                        <li><span class="font-bold">Notification:</span> {{ client.Notification }}</li>
                        <li><span class="font-bold">Number:</span> {{ client.Number }}</li>
                        <li><span class="font-bold">Titre:</span> {{ client.Titre }}</li>
                        <li><span class="font-bold">Valider:</span> {{ client.Valider }}</li>
                        <li><span class="font-bold">_id:</span> {{ client._id }}</li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </td>

              <td class="px-4 py-2">
                  <button class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Fixe Errore</button>
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
          idagenda: "65b269b18afc3436fb8cfbe8",
          dateagenda: "1/1/2024",
          Annee: "2024",
          Client: "",
          CountInput: "1",
          Date: "2024-01-25T14:01:21.345Z",
          Disabled: "True",
          FlagSauvgarder: "1",
          Horaire: "Null - Null",
          Inspecteur: "",
          Jour: "Lundi",
          Lieu: "",
          Matricule: "6308b5da88fcc1dbc103dbaf",
          Mois: "1",
          Notification: "True",
          Number: "0",
          Titre: "",
          Valider: "False    ",
          _id: "65b269b18afc3436fb8cfbe5",
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
  