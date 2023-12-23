<template>   
    <div class="containerr ">
      <div v-for="client in clients" :key="client.id">
        <form v-show="client.showForme" id="dateQuit_typeQuit">
            <div class="mt-5 pt-5 mb-5 pb-5">
                <h4 class="text-xl font-black text-gray-900 dark:text-white">
                    Information sur la date de quitter et Type de quitte
                </h4>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="date" name="Date" id="Date"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Date"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Date</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="Raison"  id="Raison" 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Raison"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Raison    </label>
                </div>
            </div>
            <div class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                <button @click="submitForm(client)" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Valide
                </button>
                <button @click="showForm(client)" data-modal-hide="demand-abcsence-modal" type="reset" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    Anuller
                </button>
            </div>
        </form> 
      </div>
      <div class=" shadow-md container p-4" >
        <div class="flex items-center">
            <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
        </div>
        
      </div>
      <div class="table-container  shadow-md">
        <table class="table-auto" >
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">NOM</th>
              <th class="px-4 py-2">PRÉNOM</th>
              <th class="px-4 py-2">CIN/PASSPORT</th>
              <th class="px-4 py-2">TELEPHONE</th>
              <th class="px-4 py-2">EMAIL</th>
              <th class="px-4 py-2">DATE_EMBAUCHE	</th>
              <th class="px-4 py-2">DATE_QUITTER</th>
              <th class="px-4 py-2">CIN</th>
              <th class="px-4 py-2">DIPLÔME</th>
              <th class="px-4 py-2">PHOTO</th>
              <th class="px-4 py-2">AUTRE_DOCUMENT	</th>
              <th class="px-4 py-2">MÉDICAL	</th>
              <th class="px-4 py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in displayedClients" :key="client.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="client.selected" />
              </td>
              <td class="px-4 py-2">{{ client.nom }}</td>
              <td class="px-4 py-2">{{ client.prenom }}</td>
              <td class="px-4 py-2">{{ client.cin_passport }}</td>
              <td class="px-4 py-2">{{ client.tele }}</td>
              <td class="px-4 py-2">{{ client.email }}</td>
              <td class="px-4 py-2">{{ client.dateEmbush }}</td>
              <td class="px-4 py-2">{{ client.dateQuite }}</td>
              <td class="px-4 py-2"><a :href="client.cin" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a></td>
              <td class="px-4 py-2"><a :href="client.diplom" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a></td>
              <td class="px-4 py-2"><a :href="client.photo" target="_blank"><font-awesome-icon :icon="['fas', 'image']" /></a></td>
              <td class="px-4 py-2"><a :href="client.autreDec" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a></td>
              <td class="px-4 py-2"><a :href="client.doucMedec" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a></td>
              <td class="px-4 flex gap-2 py-2">
                <a href="/GestionRh/UpdateCollaborateur" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></a>
                <button @click="deleteClient(client.id)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
                <button  @click="showForm(client)" v-show="!client.formSubmitted"  class="bg-orange-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'xmark']" /></button>
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
            id: 1, nom: "Rabie c",  prenom: "ait imghi", cin_passport: "UB100220",
            tele: "0622337788", email: "gth@gmail.com", dateEmbush: "29/12/2023",
            dateQuite: "Actuellement", cin:"#", diplom:"#",	
            photo:"#", autreDec:"#", doucMedec:"#",  selected: false, 
            showForme: false, formSubmitted: false,
          },
          {
            id: 2,  nom: "Rabie e",  prenom: "ait imghi", cin_passport: "UB100220",
            tele: "0622337788", email: "gth@gmail.com", dateEmbush: "29/12/2023",
            dateQuite: "Actuellement", cin:"#", diplom:"#",	
            photo:"#", autreDec:"#", doucMedec:"#",  selected: false, 
            showForme: false, formSubmitted: false,
          },
          {
            id: 3, nom: "Rabie z",  prenom: "ait imghi", cin_passport: "UB100220",
            tele: "0622337788", email: "gth@gmail.com", dateEmbush: "29/12/2023",
            dateQuite: "Actuellement", cin:"#", diplom:"#",	
            photo:"#", autreDec:"#", doucMedec:"#",  selected: false, 
            showForme: false, formSubmitted: false,
          },
          {
            id: 4,  nom: "Rabie r",  prenom: "ait imghi", cin_passport: "UB100220",
            tele: "0622337788", email: "gth@gmail.com", dateEmbush: "29/12/2023",
            dateQuite: "Actuellement", cin:"#", diplom:"#",	
            photo:"#", autreDec:"#", doucMedec:"#",  selected: false,  
            showForme: false, formSubmitted: false,
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
      showForm(client) {
        client.showForme = !client.showForme;
        client.formSubmitted = false;
      },

      submitForm(client) {
        client.formSubmitted = true;
        client.showForme = false;
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
    