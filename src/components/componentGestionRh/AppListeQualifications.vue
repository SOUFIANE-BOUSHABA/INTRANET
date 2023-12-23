<template>   
    <div class="containerr ">
      <div class=" container p-4" >
        <div class="flex items-center">
            <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
        </div>
      </div>
      
      <div class="table-container  shadow-md">
        <table class="table-auto" >
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">NOM/PRÉNOM</th>
              <th class="px-4 py-2">DATE_FORMATION</th>
              <th class="px-4 py-2">MÉTIERS</th>
              <th class="px-4 py-2">DOMAINE_FAMILLE</th>
              <th class="px-4 py-2">QUALIFICATIONS	</th>
              <th class="px-4 py-2">MODULE_FORMATION</th>
              <th class="px-4 py-2">AVIS_DT</th>
              <th class="px-4 py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in displayedClients" :key="client.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="client.selected" />
              </td>
              <td class="px-4 py-2">{{ client.nom }} {{ client.prenom }}</td>
              <td class="px-4 py-2">{{ client.DATE_FORMATION }}</td>
              <td class="px-4 py-2">{{ client.matiere }}</td>
              <td class="px-4 py-2">{{ client.DOMAINE_FAMILLE }}</td>
              <td class="px-4 py-2">{{ client.QUALIFICATIONS }}</td>
              <td class="px-4 py-2">{{ client.MODULE_FORMATION }}</td>
              <td class="px-4 py-2">{{ client.AVIS_DT }}</td>
              <td class="px-4 flex gap-2 py-2">
                <a :href="client.pdfLink" target="_blank" class="bg-orange-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a>
                <a href="/GestionRh/UpdateQualifications" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></a>
                <button @click="deleteClient(client.id)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between items-center mt-4" style="padding-left: 50px;">
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
    <div v-show="confirmation.show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded shadow-md">
        <p class="text-lg font-semibold mb-4">Confirmation</p>
        <p class="mb-4">{{ confirmation.message }}</p>
        <div class="flex justify-end">
          <button @click="confirmAction" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">OK</button>
          <button @click="cancelAction" class="px-4 py-2 bg-gray-300 text-gray-700 rounded">Cancel</button>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    
    export default {
    
    data() {
      return {
         clients: [
          {
            id: 1, nom: "Rabie", prenom: "ait imghi",
            pdfLink:"#", DATE_FORMATION: "22/12/2023", matiere: "Incendie", DOMAINE_FAMILLE: "INC",
            QUALIFICATIONS: "INC- CTSSI", MODULE_FORMATION: "modeil", AVIS_DT:"Adevelopper", 
            selected: false, 
          },
          {
            id: 2,  nom: "Rabie", prenom: "ait imghi",
            pdfLink:"#", DATE_FORMATION: "22/12/2023", matiere: "Incendie", DOMAINE_FAMILLE: "INC",
            QUALIFICATIONS: "INC- CTSSI", MODULE_FORMATION: "modeil", AVIS_DT:"Adevelopper", 
            selected: false, 
          },
          {
            id: 3,  nom: "Rabie", prenom: "ait imghi",
            pdfLink:"#", DATE_FORMATION: "22/12/2023", matiere: "Incendie", DOMAINE_FAMILLE: "INC",
            QUALIFICATIONS: "INC- CTSSI", MODULE_FORMATION: "modeil", AVIS_DT:"Adevelopper", 
            selected: false, 
          },
          {
            id: 4,  nom: "Rabie", prenom: "ait imghi",
            pdfLink:"#", DATE_FORMATION: "22/12/2023", matiere: "Incendie", DOMAINE_FAMILLE: "INC",
            QUALIFICATIONS: "INC- CTSSI", MODULE_FORMATION: "modeil", AVIS_DT:"Adevelopper", 
            selected: false, 
          },
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
        confirmation: {
          show: false,
          message: '',
          callback: null,
        },
      };
    },
    computed: {
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
      deleteClient(clientId) {
        const index = this.clients.findIndex(client => client.id === clientId);

        if (index !== -1) {
          this.showConfirmation("Are you sure you want to delete this client?", () => {
            this.clients.splice(index, 1);
          });
        }
      },
      showConfirmation(message, callback) {
            this.confirmation.message = message;
            this.confirmation.callback = callback;
            this.confirmation.show = true;
      },
      confirmAction() {
        if (this.confirmation.callback) {
          this.confirmation.callback();
        }
        this.hideConfirmation();
      },
      cancelAction() {
        this.hideConfirmation();
      },
      hideConfirmation() {
        this.confirmation.show = false;
        this.confirmation.message = '';
        this.confirmation.callback = null;
      },
    
    },
    };
    </script>
    
    <style scoped>
    .table-container {
       overflow-x: auto;
       margin: 0 auto; 
       position: relative;
     }
    table{
       margin-left:-10px;
        width: max-content;
    }
    table tr {
     border-bottom: 1px solid #e2e8f0;
    }
    
    .containerr{
     max-width:95%;
     padding-left: 50px;
    }
    </style>
    