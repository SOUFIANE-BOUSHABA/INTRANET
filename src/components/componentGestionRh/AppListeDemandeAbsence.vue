<template>   
<div class="containerr ">
  <div class=" shadow-md container p-4" >
    <div class="flex items-center">
        <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
    </div>
    <div class="container flex gap-4 m-5">
      <div class="relative z-0 w-40 mb-5 group">
        <label for="departement" class="sr-only">Département</label>
        <select  v-model="selectedMonth" id="month" @change="handleMonthChange" data-v-6b63125a=""
          class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option v-for="month in months" :key="month.value" :value="month.value">{{ month.name }}</option>
        </select>
      </div>
      <div class="relative z-0  w-40 mb-5 group">
          <label for="departement" class="sr-only">Département</label>
          <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
      </div>
      <button @click="exportData" class="group relative h-10 w-32 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black transition-all duration-[250ms] group-hover:text-white">Export</span>
      </button>
    </div>
    
  </div>
  
  <div class="table-container  shadow-md">
    <table class="table-auto" >
      <thead>
        <tr>
          <th class="px-4 py-2"></th>
          <th class="px-4 py-2">DATE_CONGÉ</th>
          <th class="px-4 py-2">NOM</th>
          <th class="px-4 py-2">PRÉNOM</th>
          <th class="px-4 py-2">TYPE_D'ABSENCE</th>
          <th class="px-4 py-2">MOTIF</th>
          <th class="px-4 py-2">PJ</th>
          <th class="px-4 py-2">SORTIR	</th>
          <th class="px-4 py-2">REPRISE</th>
          <th class="px-4 py-2">NBR_JRS</th>
          <th class="px-4 py-2">SOLDE</th>
          <th class="px-4 py-2">RESTE</th>
          <th class="px-4 py-2">STATUS</th>
          <th class="px-4 py-2">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in displayedClients" :key="client.id">
          <td class="px-4 py-2">
            <input type="checkbox" v-model="client.selected" />
          </td>
          <td class="px-4 py-2">{{ client.dateConge }}</td>
          <td class="px-4 py-2">{{ client.nom }}</td>
          <td class="px-4 py-2">{{ client.prenom }}</td>
          <td class="px-4 py-2">{{ client.typeAbcs }}</td>
          <td class="px-4 py-2">{{ client.motif }}</td>
          <td class="px-4 py-2"><a :href="client.PJ" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a></td>
          <td class="px-4 py-2">{{ client.SORTIR }}</td>
          <td class="px-4 py-2">{{ client.REPRISE }}</td>
          <td class="px-4 py-2">{{ client.NBR_JRS }}</td>
          <td class="px-4 py-2">{{ client.SOLDE }}</td>
          <td class="px-4 py-2">{{ client.RESTE }}</td>
          <td class="px-4 py-2">{{ client.STATUS }}</td>
          <td class="px-4 flex gap-2 py-2">
            <a :href="client.pdfView" class="bg-orange-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'file-pdf']" /></a>
            <button @click="changeStatusToAccorde(client)" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
              <font-awesome-icon :icon="client.STATUS === 'accordé' ? ['fas', 'xmark'] : ['fas', 'check']" />  
            </button>
            <button @click="deleteClient(client.id)" v-if="client.STATUS === 'non accordé'" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
import exportFromJSON from "export-from-json";

export default {

data() {
  return {
     clients: [
      {
        id: 1, dateConge: "12/01/2023", nom: "Rabie", prenom: "ait imghi",
        typeAbcs: "tybe001", motif: "motif001", PJ: "",
        SORTIR: "2023-12-01", REPRISE: "2023-12-23", NBR_JRS:"NaN", SOLDE:"4.0",	
        RESTE:"NaN", STATUS:"non accordé",
        pdfView:"",
        selected: false, 
      },
      {
        id: 2, dateConge: "12/01/2023", nom: "Rabie", prenom: "ait imghi",
        typeAbcs: "tybe001", motif: "motif001", PJ: "",
        SORTIR: "2023-12-01", REPRISE: "2023-12-23", NBR_JRS:"NaN", SOLDE:"4.0",	
        RESTE:"NaN", STATUS:"non accordé",
        pdfView:"",
        selected: false, 
      },
      {
        id: 3, dateConge: "12/01/2023", nom: "Rabie", prenom: "ait imghi",
        typeAbcs: "tybe001", motif: "motif001", PJ: "",
        SORTIR: "2023-12-01", REPRISE: "2023-12-23", NBR_JRS:"NaN", SOLDE:"4.0",	
        RESTE:"NaN", STATUS:"non accordé",
        pdfView:"",
        selected: false, 
      },
      {
        id: 4, dateConge: "12/01/2023", nom: "Rabie", prenom: "ait imghi",
        typeAbcs: "tybe001", motif: "motif001", PJ: "",
        SORTIR: "2023-12-01", REPRISE: "2023-12-23", NBR_JRS:"NaN", SOLDE:"4.0",	
        RESTE:"NaN", STATUS:"non accordé",
        pdfView:"",
        selected: false, 
      },
    ],
    searchQuery: "",
    entriesToShow: 5,
    currentPage: 1,
    months: [
        { value: '01', name: 'January' },
        { value: '02', name: 'February' },
        { value: '03', name: 'March' },
        { value: '04', name: 'April' },
        { value: '05', name: 'May' },
        { value: '06', name: 'June' },
        { value: '07', name: 'July' },
        { value: '08', name: 'August' },
        { value: '09', name: 'September' },
        { value: '10', name: 'October' },
        { value: '11', name: 'November' },
        { value: '12', name: 'December' },
    ],
    years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i),
    selectedMonth: null,
    selectedYear: null,
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
  exportDataFromJSON(data, newFileName, fileExportType) {
    if (!data) return;
    try {
      const fileName = newFileName || "ListDemandAbscense";
      const exportType = exportFromJSON.types[fileExportType || "xls"];
      exportFromJSON({ data, fileName, exportType });
    } catch (e) {
      throw new Error("Parsing failed!");
    }
  },
  exportData() {
    this.exportDataFromJSON(this.clients, null, null);
  },
  changeStatusToAccorde(client) {
    client.STATUS = client.STATUS === 'accordé' ? 'non accordé' : 'accordé';
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
mounted() {
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear();
  this.selectedMonth = currentMonth;
  this.selectedYear = currentYear;
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
