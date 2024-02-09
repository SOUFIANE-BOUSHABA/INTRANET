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
            <th class="px-4 py-2">Nom</th>
            <th class="px-4 py-2">Prénom</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Status Compte</th>
            <th class="px-4 py-2">Matricule</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="admin in displayedAdmins" :key="admin.id">
            <td class="px-4 py-2">
              <input type="checkbox" v-model="admin.selected" />
            </td>
            <td class="px-4 py-2">{{ admin.nom }}</td>
            <td class="px-4 py-2">{{ admin.prenom }}</td>
            <td class="px-4 py-2">{{ admin.email }}</td>
            <td class="px-4 py-2">{{ admin.status }}</td>
            <td class="px-4 py-2">{{ admin.statusCompte }}</td>
            <td class="px-4 py-2">{{ admin.matricule }}</td>
            <td class="px-4 flex gap-2 py-2">
              <a><button title="" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button></a>
              <button title="suprimer" @click="showDeleteConfirmation(admin)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>

          <!-- Delete Confirmation Modal -->
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
        adminIdToDelete: null,
      },
      admins: [
        {
          id: 1,
          nom: "Nom1",
          prenom: "Prénom1",
          email: "email1@example.com",
          status: "Status1",
          statusCompte: "StatusCompte1",
          matricule: "Matricule1",
          selected: false,
        },
        {
          id: 2,
          nom: "Nom2",
          prenom: "Prénom2",
          email: "email2@example.com",
          status: "Status2",
          statusCompte: "StatusCompte2",
          matricule: "Matricule2",
          selected: false,
        }, 
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedAdmins() {
      let filteredAdmins = this.admins;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredAdmins = filteredAdmins.filter(admin =>
          Object.values(admin).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredAdmins.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.admins.length / this.entriesToShow);
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
    showDeleteConfirmation(admin) {
      this.deleteConfirmation.adminIdToDelete = admin.id;
      this.deleteConfirmation.message = `Are you sure you want to delete ${admin.nom}?`;
      this.deleteConfirmation.show = true;
    },
    confirmDelete() {
      if (this.deleteConfirmation.adminIdToDelete !== null) {
        const index = this.admins.findIndex(admin => admin.id === this.deleteConfirmation.adminIdToDelete);
        if (index !== -1) {
          this.admins.splice(index, 1);
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
      this.deleteConfirmation.adminIdToDelete = null;
    },
  },
};
</script>

<style scoped>
.containerr {
  max-width: 95%;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
``
