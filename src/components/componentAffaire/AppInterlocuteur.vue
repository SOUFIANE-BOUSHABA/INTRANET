<template>
  <div class="containerr">
    <div class="flex items-center justify-between mb-4">
    
     
      <div class="flex items-center">
        <button @click="exportClients" class="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">Export</button>
         <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <div class="overflow-x-auto shadow-md">
    <table class="w-full table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2"></th>
      <th class="px-4 py-2">Prénom</th>
      <th class="px-4 py-2">Nom</th>
      <th class="px-4 py-2">E-mail</th>
      <th class="px-4 py-2">Fonction</th>
      <th class="px-4 py-2">Téléphone</th>
      <th class="px-4 py-2">Raison Sociale</th>
      <th class="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="interlocuteur in displayedinterlocuteurs" :key="interlocuteur.id">
      <td class="px-4 py-2">
        <input type="checkbox" v-model="interlocuteur.selected" />
      </td>

      <td class="px-4 py-2">{{ interlocuteur.prenom }}</td>
      <td class="px-4 py-2">{{ interlocuteur.nom }}</td>
      <td class="px-4 py-2">{{ interlocuteur.email }}</td>
      <td class="px-4 py-2">{{ interlocuteur.fonction }}</td>
      <td class="px-4 py-2">{{ interlocuteur.telephone }}</td>
      <td class="px-4 py-2">{{ interlocuteur.raisonSociale }}</td>
      <td class="px-4 flex gap-2 py-2">
        <a href="UpdateInterlocuteur"><button   title="modifier" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
          <font-awesome-icon :icon="['fas', 'pen-nib']" />
        </button></a> 
        <button   title="Suprimer" @click="showDeleteConfirmation(interlocuteur)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
        <button  title="Accept Access" @click="toggleAccess(interlocuteur)"  class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"
                                                       :class="{ 'bg-red-500': interlocuteur.accessAccepted }"  >
          <font-awesome-icon :icon="['fas', 'circle-check']" />
        </button>
         <button title="Envoi Email" @click="showSendPasswordModal(interlocuteur)" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
         <font-awesome-icon :icon="['fas', 'envelope']" />
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

      <div v-show="sendPasswordModal.show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded shadow-md">
        <p class="text-lg font-semibold mb-4">Envoyer Mot Passe A L'interlocuteur</p>
        <p>Voulez-vous vraiment Envoyer mot de passe par Mail à l'interlocuteur ?</p>
        <div class="flex justify-end mt-2">
          <button @click="sendPassword" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Oui</button>
          <button @click="cancelSendPassword" class="px-4 py-2 bg-gray-300 text-gray-700 rounded">Non</button>
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
        interlocuteurIdToDelete: null, 
      },
      sendPasswordModal: {
        show: false,
        interlocuteurIdToSendPassword: null,
      },
       interlocuteurs: [
        {
            id: 1,
            prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
        {
          id: 2,
          prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
           prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
          prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
           prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
          prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
          prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
         {
          id: 2,
          prenom: "soufiane",
            nom: "boushaba",
            email: "soufiane.boushaba@gmail.com",
            fonction: "Full stack",
            telephone: "066666666",
            raisonSociale: "Client 1",
            selected: false,
             accessAccepted: false,
        },
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedinterlocuteurs() {
      let filteredInterlocuteurs = this.interlocuteurs; 
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredInterlocuteurs = filteredInterlocuteurs.filter(interlocuteur => 
          Object.values(interlocuteur).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredInterlocuteurs.slice(start, end); 
    },
    totalPages() {
      return Math.ceil(this.interlocuteurs.length / this.entriesToShow);
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




    showDeleteConfirmation(interlocuteur) { 
      this.deleteConfirmation.interlocuteurIdToDelete = interlocuteur.id; 
      this.deleteConfirmation.message = `Are you sure you want to delete ${interlocuteur.prenom} ${interlocuteur.nom} ?`;
      this.deleteConfirmation.show = true;
    },

    confirmDelete() {
      if (this.deleteConfirmation.interlocuteurIdToDelete !== null) { 
        const index = this.interlocuteurs.findIndex(interlocuteur => interlocuteur.id === this.deleteConfirmation.interlocuteurIdToDelete); 

        if (index !== -1) {
          this.interlocuteurs.splice(index, 1); 
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
      this.deleteConfirmation.interlocuteurIdToDelete = null; 
    },



    showSendPasswordModal(interlocuteur) {
      this.sendPasswordModal.interlocuteurIdToSendPassword = interlocuteur.id;
      this.sendPasswordModal.show = true;
    },

    sendPassword() {
      //logic
      this.hideSendPasswordModal();
    },

    cancelSendPassword() {
      this.hideSendPasswordModal();
    },

    hideSendPasswordModal() {
      this.sendPasswordModal.show = false;
      this.sendPasswordModal.interlocuteurIdToSendPassword = null;
    },




    toggleAccess(interlocuteur) {
    interlocuteur.accessAccepted = !interlocuteur.accessAccepted;
  },
  },
};
</script>
<style scoped>
.containerr{
  max-width:95%;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 