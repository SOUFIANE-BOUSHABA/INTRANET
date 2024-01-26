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
              <th class="px-4 py-2">Clients </th>
              <th class="px-4 py-2">Interlocuteurs </th>
              <th class="px-4 py-2">Affaires  </th>
              <th class="px-4 py-2">Rapports </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in displayedClients" :key="client.id">
              <td class="px-4 py-2">
                <input type="checkbox" v-model="client.selected" />
              </td>
              <td class="px-6 py-4">
                <div class="bg-gray-200 p-4 rounded-md" >
                    <ul class="list-none p-0">
                        <li class="mb-2">
                            <span class="font-bold">ID:</span> {{ client.id }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Nom:</span> {{ client.Nom }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Prenom:</span> {{ client.Prenom }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Ref Client:</span> {{ client.RefClient }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Nom Societe:</span> {{ client.NomSociete }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Adresse:</span> {{ client.Adresse }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Code postal:</span> {{ client.CodePostal }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Ville:</span> {{ client.Ville }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Email:</span> {{ client.Email }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Password:</span> {{ client.Password }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Telephone:</span> {{ client.Telephone }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">cas:</span> {{ client.cas }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">associate:</span> {{ client.associate }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">date:</span> {{ client.date }}
                        </li>
                    </ul>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="bg-gray-200 p-4 rounded-md" >
                    <ul class="list-none p-0">
                        <li class="mb-2">
                            <span class="font-bold">ID:</span> {{ client.Interlocuteurs[0].id }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Nom:</span> {{ client.Interlocuteurs[0].Nom }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Prenom:</span> {{ client.Interlocuteurs[0].Prenom }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Client Id:</span> {{ client.Interlocuteurs[0].clientId }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Fonction:</span> {{ client.Interlocuteurs[0].fonction }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Password:</span> {{ client.Interlocuteurs[0].pass }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Status:</span> {{ client.Interlocuteurs[0].Statut }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Send:</span> {{ client.Interlocuteurs[0].Send }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Interlocuteurs:</span> {{ client.Interlocuteurs[0].Email }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Email:</span> {{ client.Interlocuteurs[0].Email }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Password:</span> {{ client.Interlocuteurs[0].Password }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">Telephone:</span> {{ client.Interlocuteurs[0].Telephone }}
                        </li>
                        <li class="mb-2">
                            <span class="font-bold">date:</span> {{ client.Interlocuteurs[0].date }}
                        </li>
                    </ul>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ client.Affaires }}
              </td>
              <td class="px-6 py-4">
                {{ client.Rapports }}
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
          clientIdToDelete: null,
        },
        clients: [
        {
            id: "6553745e694df808e0a3bf0f",
            Nom: "",
            Prenom: "",
            RefClient: "C0|11|2023",
            NomSociete: "",
            Adresse: "467 Rue Paris",
            CodePostal: "J2H 1H8",
            Ville: "New York",
            Email: "service.supports@gthconsult.ma",
            Password: "",
            Telephone: "00154367545435",
            cas: "",
            associate: "",
            date: "2023-11-14T13:21:34.529Z",
            selected: false,
            Interlocuteurs: [
              {
                id: "659bf5116b94f8dd6e4714a8",
                Nom: "AIT LHAJ LAHCEN",
                Prenom: "ACHRAF",
                clientId: "6286099ad917e972466cdbae",
                fonction: "IT Manager",
                pass: "y5p^NuoT#FN",
                Statut: "false",
                Interlocuteurs: "[]",
                Send: "false",
                Email: "achraflahcen46@gmail.com",
                Password: "$2a$10$ptBfe/g2FtWqnIj9Bg7La.zYXO1F6rEusVWjiW3HXTf6gd74y7lbC",
                Telephone: "212652420203",
                date: "2024-01-08T13:13:53.005Z",
              },
            ],
            Affaires: "G34|01|2024|Google",
            Rapports:"",
        },
        ],
        searchQuery: "",
        entriesToShow: 5,
        currentPage: 1,
        selectedYear: new Date().getFullYear(),
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
      showDeleteConfirmation(client) {
        this.deleteConfirmation.clientIdToDelete = client.id;
        this.deleteConfirmation.message = `Are you sure you want to delete ${client.raisonSociale}?`;
        this.deleteConfirmation.show = true;
      },
      confirmDelete() {
        if (this.deleteConfirmation.clientIdToDelete !== null) {
          const index = this.clients.findIndex(client => client.id === this.deleteConfirmation.clientIdToDelete);
          if (index !== -1) {
            this.clients.splice(index, 1);
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
        this.deleteConfirmation.clientIdToDelete = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .containerr{
    max-width: 95%;
    
    margin-left:40px;
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
  