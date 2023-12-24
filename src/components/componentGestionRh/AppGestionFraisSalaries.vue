<template>
    <div>
        <div class="grid md:grid-cols-3 md:gap-6">
            <div class="relative z-0  w-full mb-5 group">
                <label for="departement" class="sr-only">Département</label>
                <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <label for="departement" class="sr-only">Nom & Prénom</label>
                <select data-v-6b63125a="" @change="handlePersonChange" v-model="selectedPerson" id="departement"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option v-for="person in persons" :key="person.id" :value="person.name">
                    {{ person.name }}
                    </option>
                </select>
            </div>
            <button @click="exportData" class="group relative  w-32 overflow-hidden rounded-lg bg-white text-lg shadow" style="height:32px;margin-top:8px">
                <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-gray-500 text-sm transition-all duration-[250ms] group-hover:text-white">Télécharger</span>
            </button>
        </div>
    </div>
    <div>
        <table v-if="tableVisible" class="min-w-full divide-y divide-gray-200 bg-white shadow-md">
            <thead>
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MOIS</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AVANCE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FRAIS DE DÉPOSE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOTATION</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MODE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">REFERENCE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RESTE AVANCE</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RESTE A PAYER</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL A PAYER</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="monthData in dataRows" :key="monthData.id" class="bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">{{ monthData.month }}</td>
                    <td v-for="inputData in monthData.inputs" :key="inputData.id" class="px-6 py-4 whitespace-nowrap">
                        <div class="relative z-0 w-full mb-5 group">
                            <input :type="inputData.type" :placeholder="inputData.placeholder" 
                                v-if="inputData.value !== false" v-model="inputData.value"
                                :disabled="inputData.disabled" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required />
                             <input :type="inputData.type" :placeholder="inputData.placeholder" :disabled="inputData.disabled"
                                v-else class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button @click="enableInputs(monthData.id)" class="bg-blue-500 ml-2 text-white px-2 mb-3 py-1 rounded focus:outline-none focus:shadow-outline">
                            <font-awesome-icon :icon="['fas', 'pen-nib']" />
                        </button>
                        <button  @click="handleResetClick(monthData.id)" class="bg-red-500 ml-2 text-white px-2 mb-3 py-1 rounded focus:outline-none focus:shadow-outline">
                            <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>
                        <button  v-if="buttonVisibility[monthData.id]" @click="handleActionClick(monthData.id)" class="bg-orange-500 ml-2 text-white px-2 mb-3 py-1 rounded focus:outline-none focus:shadow-outline">
                            <font-awesome-icon :icon= "['fas', 'check']" />  
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {

data() {
  return {
    years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
    selectedYear: new Date().getFullYear(),
    selectedPerson: "Khalid",
    tableVisible: true,
    months: [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    persons: [
        { id: 0, name: "Khalid" },
        { id: 1, name: "Soufian" },
        { id: 2, name: "Rabie" }
    ],
    dataRows: [],
    showActionButton: true,
    buttonVisibility: Array.from({ length: 12 }).fill(true),
  };
},
methods: {
    generateDataRows() {
      return this.months.map((month, index) => {
        return {
          id: index,
          month: month,
          inputs: [
            { id: 0, type: 'number', placeholder: 0, disabled: false, value: false },
            { id: 1, type: 'number', placeholder: 0, disabled: true, value: false },
            { id: 2, type: 'number', placeholder: 0, disabled: false, value: false },
            { id: 3, type: 'number', placeholder: '', disabled: true, value: false },
            { id: 4, type: 'number', placeholder: '', disabled: true, value: false },
            { id: 5, type: 'text', placeholder: '', disabled: false, value: false },
            { id: 6, type: 'number', placeholder: 0, disabled: true, value: false },
            { id: 7, type: 'number', placeholder: 0, disabled: true, value: false },
            { id: 8, type: 'number', placeholder: 0, disabled: true, value: false },
          ],
        };
      });
    },
    handleYearChange() {
        this.dataRows.forEach((monthData) => {
            const specificMonthInputs = monthData.inputs;

            specificMonthInputs.forEach((input) => {
                if (input.id === 0 || input.id === 2 || input.id === 5) {
                    input.disabled = false;
                }
                if (input.type === 'number') {
                    input.value = 0;
                } else {
                    input.value = '';
                }
                if (input.id === 3 || input.id === 4) {
                    input.value = '';
                }
            });
        });
    },
    handlePersonChange() {
        this.handleYearChange();
    },
    handleActionClick(index) {
      this.buttonVisibility[index] = false;
      const specificMonthInputs = this.dataRows[index].inputs;
      console.log(specificMonthInputs) ;
      specificMonthInputs.forEach((input) => {
        input.disabled = true;
      });
    },
    enableInputs(index) {
      this.buttonVisibility[index] = true;
      const specificMonthInputs = this.dataRows[index].inputs;
      specificMonthInputs.forEach((input) => {
        if (input.id === 0 || input.id === 2 || input.id === 5) {
          input.disabled = false;
        }
      });
    }, 
    handleResetClick(index) {
        this.buttonVisibility[index] = true;
        const specificMonthInputs = this.dataRows[index].inputs;

        specificMonthInputs.forEach((input) => {
            if (input.id === 0 || input.id === 2 || input.id === 5) {
                input.disabled = false;
            }
            if (input.type === 'number') {
                input.value = 0;
            } else {
                input.value = '';
            }
            if (input.id === 3 || input.id === 4) {
                input.value = '';
            }
        });
    }, 
    
    
  },

mounted() {
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear();
  this.selectedMonth = currentMonth;
  this.selectedYear = currentYear;
  this.dataRows = this.generateDataRows();
},
};
</script>
<style>

input:disabled {
  text-align:center;
  background-color: #f4f4f4; 
  color: #666666; 
  border-color: #dddddd; 
  cursor: not-allowed;
}


</style>
