<template>
    <div class="pr-20 mt-10">
      <form @submit.prevent="submitForm">
        <div v-for="(row, rowIndex) in dataTable" :key="rowIndex" class="grid md:grid-cols-2 md:gap-6">
          <div v-for="(field, fieldIndex) in row.fields" :key="fieldIndex" class="relative z-0 w-full mb-5 group">
            <select
              v-if="field.type === 'select'"
              :id="field.id"
              :class="field.classes"
              v-model="field.value"
              @change="handleTypeDepenseChange(row)"
            >
              <option
                v-for="option in field.options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            
            <input
              v-else-if="field.type === 'input'"
              :type="field.inputType"
              :id="field.id"
              :class="field.classes"
              v-model="field.value"
              :placeholder="field.placeholder"
              :required="field.required"
              @input="calculateMontantHTT(row)"
            />
            <label
              :for="field.id"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {{ field.label }}
            </label>
          </div>
          <div v-show="dataTable[0].showAutreDepense" class="relative z-0 w-full mb-5 group">
            <input
            type="text"
            id="fileInput"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
            for="fileInput"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            Autre Dépense
            </label>
        </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="file"
              id="fileInput"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              for="fileInput"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            Pièce jointe
            </label>
          </div>
        </div>
        <div class="flex justify-end">
         
          <button
            type="button"
            class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
          >
            Anullée
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dataTable: [
          {
            fields: [
                { id: 'TypeDepense', type: 'select', label: 'Type Dépense', options: [
                    { value: 'Facturereçue', label: ' Facture reçue' },
                    { value: 'Rembourser', label: 'Rembourser' },
                    { value: 'Avance', label: 'Avance' },
                    { value: 'Autre', label: 'Autre' },
                ], classes: 'block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' },
                { id: 'NumeroFactureReçu', type: 'input', label: 'Numéro Facture, Reçu', inputType: 'text', placeholder: ' ', required: true, classes: 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' },
                { id: 'NomSocieteFournisseur', type: 'select', label: 'Nom Société, Fournisseur', options: [
                    { value: 'Nom F', label: 'Nom F' },
                    { value: 'Nom F', label: 'Nom F' },
                    { value: 'Nom F', label: 'Nom F' },
                ], classes: 'block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' },
                { id: 'DateFactureReçu', type: 'input', label: 'Date Facture & Reçu', inputType: 'date', placeholder: ' ', required: true, classes: 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' },
                { id: 'montant_achat', type: 'input', label: 'Montant d\'achat HT', inputType: 'number', placeholder: ' ', required: true, classes: 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer', value: 0 },
                { id: 'taux_tva', type: 'input', label: 'Taux TVA %', inputType: 'number', placeholder: ' ', required: true, classes: 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer', value: 0 },
                { id: 'montant_htt', type: 'input', label: 'Montant HTT', inputType: 'number', placeholder: ' ', required: true, classes: 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer', value: 0 },
                
            ],
            showAutreDepense: false,
          },
        ],
      };
    },
    methods: {
        handleTypeDepenseChange(row) {
      const typeDepenseField = row.fields.find(field => field.id === 'TypeDepense');
      if (typeDepenseField) {
        row.showAutreDepense = typeDepenseField.value === 'Autre';
      }
    },
      calculateMontantHTT(row) {
        // Calculate Montant HTT based on Montant d'achat HT and Taux TVA %
        const montantHTField = row.fields.find(field => field.id === 'montant_achat');
        const tauxTVAField = row.fields.find(field => field.id === 'taux_tva');
  
        if (montantHTField && tauxTVAField) {
          const montantHT = parseFloat(montantHTField.value) || 0;
          const tauxTVA = parseFloat(tauxTVAField.value) || 0;
          const montantHTTField = row.fields.find(field => field.id === 'montant_htt');
          if (montantHTTField) {
            montantHTTField.value = (montantHT * (1 + tauxTVA / 100)).toFixed(2);
          }
        }
      },
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.dataTable);
      },
    },
    mounted() {
      // Manually trigger calculation for the initial row
      this.calculateMontantHTT(this.dataTable[0]);
    },
  };
  </script>
  
  