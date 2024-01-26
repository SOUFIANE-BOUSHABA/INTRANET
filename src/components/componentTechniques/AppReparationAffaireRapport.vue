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
              <th style="width:30px" class="px-4 py-2"></th>
              <th class="px-4 py-2">Numéro Affaire 1</th>
              <th class="px-4 py-2">Numéro Rapport 0</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="admin in displayedAdmins" :key="admin.id">
              <td style="width:30px" class="px-4 py-2">
                <input type="checkbox" v-model="admin.selected" />
              </td>
              <td class="px-4 py-2">{{ admin.affaire }}</td>
              <td class="px-4 py-2">{{ admin.rapport }}</td>
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        admins: [
          {
            id: 1,
            affaire: "G34|01|2024|Google",
            rapport: "G34|0dsckjdhc",
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
    },
  };
  </script>
  
  <style scoped>
  .containerr {
    max-width: 95%;
  }
  table tr td,   table tr th{
    width : 200px;
    text-align:left;
  }
  table tr {
    border-bottom: 1px solid #e2e8f0;
  }
  </style>
  ``
  