<template>
    <div class="containerr">
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
                <th class="px-4 py-2" ></th>
                <th class="px-4 py-2 thh">RS Sous-Traitance</th>
                <th class="px-4 py-2 thh">Forme juridique</th>
                <th class="px-4 py-2 thh">Ville</th>
                <th class="px-4 py-2 thh">Code Postal</th>
                <th class="px-4 py-2 thh">Pays</th>
                <th class="px-4 py-2 thh">Email</th>
                <th class="px-4 py-2 thh">ICE</th>
                <th class="px-4 py-2 thh">Téléphone</th>
                <th class="px-4 py-2 thh">Service</th>
                <th class="px-4 py-2 thh">Demandeur</th>
                <th class="px-4 py-2 thh">Locataire matériel</th>
                <th class="px-4 py-2 thh">Interlocuteur</th>
                <th class="px-4 py-2 thh">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in displayedEntries" :key="entry.id">
                <td class="px-4 py-2">
                <input type="checkbox" v-model="entry.selected" />
            </td>
            <td class="px-4 py-2 thh">{{ entry.raisonSocialeSousTraitance }}</td>
            <td class="px-4 py-2 thh">{{ entry.formeJuridique }}</td>
            <td class="px-4 py-2 thh">{{ entry.ville }}</td>
            <td class="px-4 py-2 thh">{{ entry.codePostal }}</td>
            <td class="px-4 py-2 thh">{{ entry.pays }}</td>
            <td class="px-4 py-2 thh">{{ entry.email }}</td>
            <td class="px-4 py-2 thh">{{ entry.ice }}</td>
            <td class="px-4 py-2 thh">{{ entry.telephone }}</td>
            <td class="px-4 py-2 thh">{{ entry.service }}</td>
            <td class="px-4 py-2 thh">{{ entry.demandeur }}</td>
            <td class="px-4 py-2 thh">{{ entry.locataireMateriel }}</td>
            <td class="px-4 py-2 thh">{{ entry.interlocuteur }}</td>
              <td class="px-4 flex gap-2 py-2">
                <router-link exact active-class="active-link" to="">
                <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'pen-nib']" />
                </button>
                </router-link>
                <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                  <font-awesome-icon :icon="['fas', 'trash']" />
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
            raisonSocialeSousTraitance: "Sous-Traitance 1",
            formeJuridique: "Forme 1",
            ville: "City 1",
            codePostal: "12345",
            pays: "Country 1",
            email: "email@example.com",
            ice: "ICE123",
            telephone: "123456789",
            service: "Service 1",
            demandeur: "Demandeur 1",
            locataireMateriel: "Locataire 1",
            interlocuteur: "Interlocuteur 1",
            selected:false
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
  .containerr {
    max-width: 95%;
    padding-left: 40px;
  }
  
  table tr {
    border-bottom: 1px solid #e2e8f0;
  }
  .container {
  max-width: 95%;
}

.thh{
  min-width: 140px;
  padding: 10px;
  text-align: left;
}
  </style>
  