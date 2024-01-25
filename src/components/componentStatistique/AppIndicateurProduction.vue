<template>
    <div class="container">
      <div class="overflow-x-auto shadow-md container p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="relative z-0 w-40 ml-4 group">
              <label for="year" class="sr-only">Year</label>
              <div class="relative">
                <select v-model="selectedYear" id="year" @change="handleYearChange" class="block py-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div class="relative z-0 w-40 ml-4 group">
              <label for="month" class="sr-only">Month</label>
              <div class="relative">
                <select v-model="selectedMonth" id="month" @change="handleMonthChange" class="block py-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
       
        <div class="w-1/2">
          <canvas id="productionChart" width="400" height="200"></canvas>
        </div>

      
        <div class="w-1/2">
          <canvas id="inspecteurChart" width="400" height="200"></canvas>
        </div>
      </div>
      </div>
    </div>
  </template>
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth() + 1,
        years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        productionChart: null,
        inspecteurChart: null,
      };
    },
    methods: {
      handleYearChange() {
        
      },
      handleMonthChange() {

      },
      initProductionChart() {
      const canvas = document.getElementById('productionChart');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        this.productionChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.months,
            datasets: [
              {
                label: 'État d\'avancement de la production',
                data: [30, 50, 70, 90, 100, 80, 60, 40, 20, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      }
    },
    initInspecteurChart() {
      const canvas = document.getElementById('inspecteurChart');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        this.inspecteurChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.months,
            datasets: [
              {
                label: 'État Rendement Inspecteurs',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 60, 90],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      }
    },
},
    mounted() {
    
      this.initProductionChart();
      this.initInspecteurChart();
    },
    unmounted() {
      if (this.productionChart) {
        this.productionChart.destroy();
      }
  
      if (this.inspecteurChart) {
        this.inspecteurChart.destroy();
      }
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
  