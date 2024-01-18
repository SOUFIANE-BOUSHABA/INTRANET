<template>
  <div class="container">
    <div class="overflow-x-auto shadow-md container p-4">
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
      <div class="table-container">
        <table class="p-4 table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2"></th>
              <th class="px-4 py-2">Désignation</th>
              <th class="px-4 py-2">Marque</th>
              <th class="px-4 py-2">Identification</th>
              <th class="px-4 py-2">Numéro Fiche Technique</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fiche in displayedFiches" :key="fiche.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="fiche.selected" />
              </td>
              <td class="px-4 py-2">{{ fiche.designation }}</td>
              <td class="px-4 py-2">{{ fiche.marque }}</td>
              <td class="px-4 py-2">{{ fiche.identification }}</td>
              <td class="px-4 py-2">{{ fiche.numeroFicheTechnique }}</td> 
              <td class="px-4 flex gap-2 py-2">
                <a href="UpdateFiche">
                  <button
                    title="modifier"
                    class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
                  >
                    <font-awesome-icon :icon="['fas', 'pen-nib']" />
                  </button>
                </a>
                <button
                  title="supprimer"
                  @click="showDeleteConfirmation(fiche)"
                  class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
                <a
                  title="pdf"
                  class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
                >
                  <font-awesome-icon :icon="['fas', 'file-pdf']" />
                </a>
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
      deleteConfirmation: {
        show: false,
        message: '',
        ficheIdToDelete: null,
      },
      fiches: [
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        {
          id: 1,
          designation: "Contrôle des appareils et Accessoire de levage",
          marque: "Ministre de l'emploi",
          identification: "2024-01-17",
          numeroFicheTechnique: "test",
          selected: false,
        },
        
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedFiches() {
      let filteredFiches = this.fiches;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredFiches = filteredFiches.filter(fiche =>
          Object.values(fiche).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredFiches.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.fiches.length / this.entriesToShow);
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

    showDeleteConfirmation(fiche) {
      this.deleteConfirmation.show = true;
      this.deleteConfirmation.message = `Are you sure you want to delete ${fiche.designation}?`;
      this.deleteConfirmation.ficheIdToDelete = fiche.id;
    },

    confirmDelete() {
      if (this.deleteConfirmation.ficheIdToDelete !== null) {
        const index = this.fiches.findIndex(fiche => fiche.id === this.deleteConfirmation.ficheIdToDelete);

        if (index !== -1) {
          this.fiches.splice(index, 1);
        }
      }

      this.cancelDelete();
    },

    cancelDelete() {
      this.deleteConfirmation.show = false;
      this.deleteConfirmation.message = '';
      this.deleteConfirmation.ficheIdToDelete = null;
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
