<template>
  <div class="containerr">


    <div v-if="ShowForm" class="p-4 mb-4 shadow-md rounded">
    <label for="prestations" class="block mb-1">Entrez s'il vous plaît tous les prestations de client</label>
    <div v-for="(input, index) in prestationsInputs" :key="index" class="mb-4">
        <input v-model="prestationsInputs[index]" placeholder="Nouvelle prestation" type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
    </div>
  
    <div class="mb-4 flex">
        <button @click="addInput" class="w-1/5 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Ajouter</button>
        <button @click="removeInput" v-show="prestationsInputs.length > 1" class="w-1/5 ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer</button>
    </div>
    <div class="mb-4">
      <div class="flex">
        <div class="w-1/2 mr-2 relative z-0 group">
          <input
            v-model="numBonCommande" id="numBonCommande" type="text"  name="numBonCommande"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="numBonCommande"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
          Remplir le numéro de Bon Commande de client
          </label>
      </div>

      <div class="w-1/2 mr-2 relative z-0 group">
          <input
          v-model="prixGenerale" id="prixGenerale" type="text"  name="prixGenerale"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="prixGenerale"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
          Remplir le prix générale de Bon Commande
          </label>
      </div>
      </div>
     

      <div class="flex mt-4 items-end">
        <div class="w-1/2 mr-2 relative z-0 group">
          <input
            v-model="dateBonCommande" id="dateBonCommande" type="date" name="dateBonCommande"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
         
      </div>

      <div class="w-1/2 mr-2 relative z-0 group">
          <input
          type="file" id="fileBonCommande"  name="fileBonCommande"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
         
      </div>
      </div>
     
    </div>
   
    <div class="mb-4 flex">
        <button @click="hideForm" class="w-1/2 mr-2 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">Annuler</button>
        <button @click="validateForm" class="w-1/2 ml-2 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Valider</button>
    </div>
</div>




 
  <div class="table-container  shadow-md">
    <div class="flex items-center justify-between mb-4">
     
    
     <div class="flex items-center">
        <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
     </div>
   </div>

  <table class="w-full table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2"></th>
      <th class="px-4 py-2">Date</th>
      <th class="px-4 py-2">Numéro d'offre</th>
      <th class="px-4 py-2">Réf client</th>
      <th class="px-4 py-2">Raison sociale</th>
      <th class="px-4 py-2">Mission</th>
      <th class="px-4 py-2">Date</th>
    
      <th class="px-4 py-2">Status</th>
      <th class="px-4 py-2">OP</th>
      <th class="px-4 py-2">OCT</th>
      <th class="px-4 py-2">SC</th>
        <th class="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="offre in displayedOffres" :key="offre.id">
      <td class="px-4 py-2">
        <input type="checkbox" v-model="offre.selected" />
      </td>
      <td class="px-4 py-2">{{ offre.date }}</td>
      <td class="px-4 py-2">{{ offre.numeroOffre }}</td>
      <td class="px-4 py-2">{{ offre.refClient }}</td>
      <td class="px-4 py-2">{{ offre.raisonSociale }}</td>
      <td class="px-4 py-2">{{ offre.mission }}</td>
      <td class="px-4 py-2">{{ offre.date }}</td>
     
      <td class=" flex gap-2 px-4 py-2">
        <button title="Télécharger" class="text-green-600">
          <font-awesome-icon :icon="['fas', 'download']" />
        </button>
        <button @click="showForm" title="saiser bon de commond client" class="text-red-600">
          <font-awesome-icon :icon="['fas', 'forward-step']" />
        </button>
       
      </td>


      <td class="px-4 py-2">
        <button title="Génère l'offers de prix">
          <font-awesome-icon :icon="['fas', 'download']" />
        </button>
      </td>
      <td class="px-4 py-2">
        <button title="Génère l'offers commercial technique">
          <font-awesome-icon :icon="['fas', 'download']" />
        </button>
      </td>

      <td class="px-4 py-2">
        <button @click="showSatisfactionModal = true" title="envoyer l'enquete de satisfaction" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
        </button>
      </td>

       <td class="px-4 flex gap-2 py-2">
        <a href="UpdateOffer"><button title="plus info" class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button></a> 
        <button title="supprimer" @click="showDeleteConfirmation(offre)" class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                <font-awesome-icon :icon="['fas', 'trash']" />
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



                <!-- Satisfaction Modal -->
            <div v-if="showSatisfactionModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div class="bg-white p-8 rounded shadow-md">
                <p class="text-lg font-semibold mb-4">Liste Des Évaluateurs</p>

                <!-- Checkbox for evaluators -->
                <div >
                  <input type="checkbox" value="1" />
                  achraf 
                </div>

                <div v-for="(email, index) in addedEmails" :key="index" class="mt-2 flex gap-2 items-center">
                  <input type="checkbox" v-model="checkedEmails" :value="email" />
                  {{ email }}
                  <span @click="cancelAddedEmail(index)" class="cursor-pointer ml-2"><font-awesome-icon :icon="['fas', 'times']" /></span>
                </div>

              
                <div class="mt-4 flex items-center">
                  <input v-model="newEvaluatorEmail" placeholder="Enter email" class="mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
               
                  <span @click="addNewEvaluator" class="cursor-pointer"><font-awesome-icon :icon="['fas', 'check']" /></span>
                  <span @click="cancelAddEvaluator" class="cursor-pointer ml-2"><font-awesome-icon :icon="['fas', 'times']" /></span>
                </div>

                

                <div class="flex justify-end mt-4">
                  <button @click="confirmSatisfaction" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Oui</button>
                  <button @click="cancelSatisfaction" class="px-4 py-2 bg-gray-300 text-gray-700 rounded">Non</button>
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
      ShowForm: false,
      prestations: "",
      prestationsInputs: [""],
      numBonCommande: "",
      prixGenerale: "",
      dateBonCommande: "",


      showSatisfactionModal: false,
    selectedEvaluators: [],
    newEvaluatorEmail: "",
    addedEmails: [],
    checkedEmails: [],


      deleteConfirmation: {
      show: false,
      message: '',
      offreIdToDelete: null,
    },
       Offres: [
        {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
           
            selected: false,
        },
       
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedOffres() {
    let filteredOffres = this.Offres; 
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredOffres = filteredOffres.filter(offre =>
        Object.values(offre).some(value => value && value.toString().toLowerCase().includes(query))
      );
    }

    const start = (this.currentPage - 1) * this.entriesToShow;
    const end = start + this.entriesToShow;
    return filteredOffres.slice(start, end);
  },
    totalPages() {
      return Math.ceil(this.Offres.length / this.entriesToShow);
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
    showDeleteConfirmation(offre) {
      this.deleteConfirmation.offreIdToDelete = offre.id;
      this.deleteConfirmation.message = `Are you sure you want to delete ${offre.raisonSociale}?`;
      this.deleteConfirmation.show = true;
    },

    confirmDelete() {
  if (this.deleteConfirmation.offreIdToDelete !== null) {
    const index = this.Offres.findIndex(offre => offre.id === this.deleteConfirmation.offreIdToDelete);

    if (index !== -1) {
      this.Offres.splice(index, 1);
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
      this.deleteConfirmation.offreIdToDelete = null;
    },



    addNewEvaluator() {
    // Add logic 
   
    this.addedEmails.push(this.newEvaluatorEmail);
    this.newEvaluatorEmail = "";
  },

  cancelAddEvaluator() {
  //logic
    this.newEvaluatorEmail = "";
  },

  

  cancelAddedEmail(index) {
   
    this.addedEmails.splice(index, 1);
  },

  confirmSatisfaction() {
   
    this.showSatisfactionModal = false;
  
  },

  cancelSatisfaction() {
    
    this.showSatisfactionModal = false;
  },

    showForm() {
      this.ShowForm = true;
    },

    hideForm() {
      this.ShowForm = false;
    },

    addInput() {
      this.prestationsInputs.push("");
    },

    removeInput() {
      if (this.prestationsInputs.length > 1) {
        this.prestationsInputs.pop();
      }
    },

    validateForm() {
      // Handle form validation logic
      // You can access the form data using this.prestations, this.prestationsInputs, etc.
      // Add your logic here
      this.hideForm();
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
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 