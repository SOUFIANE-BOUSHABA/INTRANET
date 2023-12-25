<template>   
<div class="containerrr">
    <div>
        <div class="overflow-x-auto shadow-md container p-4">
            <div class="flex items-centerjustify-between mb-4">
                <div class="flex items-center">
                    <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
                    <div class="relative z-0  w-40 ml-4 group">
                        <label for="departement" class="sr-only">Département</label>
                        <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
                            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <table class="w-full table-auto">
                <thead>
                <tr>
                    <th class="px-4 py-2"></th>
                    <th class="px-4 py-2">Période_déplacement</th>
                    <th class="px-4 py-2">Date_D'édition</th>
                    <th class="px-4 py-2">Nom</th>
                    <th class="px-4 py-2">Prénom</th>
                    <th class="px-4 py-2">Justificatifs</th>
                    <th class="px-4 py-2">Prix_Total</th>
                    <th class="px-4 py-2">Processus_Validation</th>
                    <th class="px-4 py-2">Etat_Paiment</th>
                    <th class="px-4 py-2">Date_Paiment</th>
                    <th class="px-4 py-2">Actions</th>
                    <th class="px-4 py-2">Notification</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="client in displayedClients" :key="client.id">
                    <td class="px-4 py-2">
                    <input type="checkbox" v-model="client.selected" />
                    </td>
                    <td class="px-4 py-2">{{ client.PeiodeDeplacement }}</td>
                    <td class="px-4 py-2">{{ client.DateEdition }}</td>
                    <td class="px-4 py-2">{{ client.Nom }}</td>
                    <td class="px-4 py-2">{{ client.Prenom }}</td>
                    <td class="px-4 py-2">{{ client.Justificatifs }}</td>
                    <td class="px-4 py-2">{{ client.PrixTotal }}</td>
                    <td class="px-4 py-2">{{ client.ProcessusValidation }}</td>
                    <td class="px-4 py-2">{{ client.EtatPaiment }}</td>
                    <td class="px-4 py-2">{{ client.DatePaiment }}</td>
                    <td class="px-4 flex gap-2 py-2">
                    <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
                    </td>
                </tr>
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
</div>
</template>

<script>

export default {
  data() {
    return {
        clients: [
        {
          id: 1,
          PeiodeDeplacement: "2023-12-12",
          DateEdition: "2023-01-01",
          Nom: "Rabie",
          Prenom: "Imghi",
          Justificatifs: "Non",
          PrixTotal: "100",
          ProcessusValidation: "__",
          EtatPaiment: "En cour",
          DatePaiment: "2023-02-05",
          selected: false, 
        }
        
      ],
      years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
      searchQuery: "",
      selectedYear: new Date().getFullYear(),
      entriesToShow: 5,
      currentPage: 1,
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

  },
};
</script>

<style scoped>
.containerrr{
    margin-top:20px;
    display:flex;
    justify-content:center;
    width:100%;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 