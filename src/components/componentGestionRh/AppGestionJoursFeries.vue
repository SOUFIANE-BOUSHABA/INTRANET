<template>
    <div class="flex gap-3">
        <div class="relative z-0  w-40 mb-5 group">
            <label for="departement" class="sr-only">Département</label>
            <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
        <button @click="addNewRow" class="group relative  w-32 overflow-hidden rounded-lg bg-blue-400 text-lg shadow" style="height:32px;margin-top:8px">
            <span class="relative text-white text-sm transition-all duration-[250ms] ">
                Ajoute</span>
        </button>
        <button  class="group relative  w-32 overflow-hidden rounded-lg bg-green-400 text-lg shadow" style="height:32px;margin-top:8px">
            <span class="relative text-white text-sm transition-all duration-[250ms] ">
                Crée</span>
        </button>
    </div>
    <table class='w-full'>

        <tr v-for="(row, index) in tableData" :key="index">
          <td>
            <div class="pl-5 relative z-0 w-full mb-5 group">
              <input
                v-model="row.raison"
                type="text"
                name="raison"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
          </td>
          <td>
            <div class="pl-5 relative z-0 w-full mb-5 group">
              <input v-model="row.date1" type="date"  name="date1"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            </div>
          </td>
          <td>
            <div class="pl-5 relative z-0 w-full mb-5 group">
              <input v-model="row.date2" type="date" name="date2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            </div>
          </td>
          <td>
            <div 
            v-if="index > 0"
              class="w-16 text-center bg-blue-400 m-4 text-white"
              @click="removeRow(index)"
            >
                <font-awesome-icon :icon="['fas', 'minus']" />
            </div>
          </td>
        </tr>
    </table>
</template>
<script>
export default {

    data() {
    return {
        years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
        selectedYear: new Date().getFullYear(),
        tableData: [
            {
            raison: "",
            date1: "",
            date2: "",
            },
        ],
    };
    },
    methods: {
        addNewRow() {
            const newRow = {
                raison: "",
                date1: "",
                date2: "",
            };
            this.tableData.push(newRow);
        }, 
        removeRow(index) {
            this.tableData.splice(index, 1);
        }, 
        handleYearChange() {
            this.tableData = [
                {
                raison: "",
                date1: "",
                date2: "",
                },
            ];
        },
    },
};
</script>