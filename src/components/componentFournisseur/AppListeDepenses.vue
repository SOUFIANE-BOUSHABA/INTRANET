<template>
    <div class="container">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
  
      <div class="overflow-x-auto shadow-md">
        <table class="w-full table-auto" style="table-layout: auto; max-width: 100%;">
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Type Dépense</th>
              <th class="px-4 py-2">Numéro Facture, Reçu</th>
              <th class="px-4 py-2">Nom Société, Fournisseur</th>
              <th class="px-4 py-2">Date Facture & Reçu</th>
              <th class="px-4 py-2">Montant HT</th>
              <th class="px-4 py-2">Taux TVA %</th>
              <th class="px-4 py-2">Montant HTT</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in displayedEntries" :key="entry.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="entry.selected" />
              </td>
              <td class="px-4 py-2">{{ entry.typeCharge }}</td>
              <td class="px-4 py-2">{{ entry.numeroFacture }}</td>
              <td class="px-4 py-2">{{ entry.nomSocieteFournisseur }}</td>
              <td class="px-4 py-2">{{ entry.dateFacture }}</td>
              <td class="px-4 py-2">{{ entry.montantAchatHT }}</td>
              <td class="px-4 py-2">{{ entry.tva }}</td>
              <td class="px-4 py-2">{{ entry.montantHTT }}</td>
              <td class="px-4 flex gap-2 py-2">
                <router-link exact active-class="active-link" to="UpdateAutreDepense">
                  <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                    <font-awesome-icon :icon="['fas', 'pen-nib']" />
                  </button>
                </router-link>
                <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
                <button class="bg-green-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'file-pdf']" />
                </button>
              </td>
            </tr>
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
        entries: [
          {
            id: 1,
            typeCharge: "Type 1",
            categorie: "Category 1",
            article: "Article 1",
            etatPaiement: "Paid",
            nomSocieteFournisseur: "Supplier Company 1",
            numeroFacture: "12345",
            dateFacture: "2024-01-16",
            montantAchatHT: "1000",
            tva: "20",
            montantHTT: "1200",
            dateEcheance: "2024-02-16",
            selected: false,
          },
          // Add more entries as needed
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
      };
    },
    computed: {
      displayedEntries() {
        let filteredEntries = this.entries;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filteredEntries = filteredEntries.filter((entry) =>
            Object.values(entry).some((value) => value && value.toString().toLowerCase().includes(query))
          );
        }
  
        const start = (this.currentPage - 1) * this.entriesToShow;
        const end = start + this.entriesToShow;
        return filteredEntries.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.entries.length / this.entriesToShow);
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
  .container {
    max-width: 95%;
  }
  
  table tr {
    border-bottom: 1px solid #e2e8f0;
  }
  
  td {
    width: 140px;
    min-width: 40px;
    padding: 10px;
    text-align: left;
  }
  </style>
  