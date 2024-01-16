<template>
    <div class="cont mb-5">
        <div class="w-full h-100 bg-indigo-600 bg-opacity-60 flex items-center justify-center mb-4 p-4">
            <h2 class="text-white font-bold text-3xl">Achats</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div v-for="(achat, index) in achats" :key="index" class="bg-white p-6 shadow-md rounded-md transition duration-300 transform hover:scale-105">
            <h2 class="text-xl font-semibold mb-4 text-indigo-600">{{ achat.mois }}</h2>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                        <font-awesome-icon :icon="['fas', 'boxes-packing']" />
                        Fournisseurs:</span>
                    <span class="ml-2 text-gray-900">{{ achat.fournisseurs }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'cash-register']" />
                    Achats:</span>
                <span class="ml-2 text-gray-900">{{ achat.achats }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'money-bill-1-wave']" />
                    Dépenses:</span>
                <span class="ml-2 text-gray-900">{{ achat.depenses }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
                    Charges:</span>
                <span class="ml-2 text-gray-900">{{ achat.charges }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="cont mt-5 mb-5">
        <div class="w-full h-100 bg-indigo-600 bg-opacity-60 flex items-center justify-center mb-4 p-4">
            <h2 class="text-white font-bold text-3xl">Sous-Traitance</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div v-for="(SousTraitance, index) in SousTraitances" :key="index" class="bg-white p-6 shadow-md rounded-md transition duration-300 transform hover:scale-105">
            <h2 class="text-xl font-semibold mb-4 text-indigo-600">{{ SousTraitance.mois }}</h2>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                        <font-awesome-icon :icon="['fas', 'boxes-packing']" />
                        Fournisseurs:</span>
                    <span class="ml-2 text-gray-900">{{ SousTraitance.fournisseurs }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'cash-register']" />
                    Achats:</span>
                <span class="ml-2 text-gray-900">{{ SousTraitance.achats }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'money-bill-1-wave']" />
                    Dépenses:</span>
                <span class="ml-2 text-gray-900">{{ SousTraitance.depenses }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
                    Charges:</span>
                <span class="ml-2 text-gray-900">{{ SousTraitance.charges }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="cont mt-5 mb-5">
        <div class="w-full h-100 bg-indigo-600 bg-opacity-60 flex items-center justify-center mb-4 p-4">
            <h2 class="text-white font-bold text-3xl">Charge En Exploitation</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div v-for="(ChargeExploitations, index) in ChargeExploitation" :key="index" class="bg-white p-6 shadow-md rounded-md transition duration-300 transform hover:scale-105">
            <h2 class="text-xl font-semibold mb-4 text-indigo-600">{{ ChargeExploitations.mois }}</h2>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                        <font-awesome-icon :icon="['fas', 'boxes-packing']" />
                        Fournisseurs:</span>
                    <span class="ml-2 text-gray-900">{{ ChargeExploitations.fournisseurs }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'cash-register']" />
                    Achats:</span>
                <span class="ml-2 text-gray-900">{{ ChargeExploitations.achats }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'money-bill-1-wave']" />
                    Dépenses:</span>
                <span class="ml-2 text-gray-900">{{ ChargeExploitations.depenses }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
                    Charges:</span>
                <span class="ml-2 text-gray-900">{{ ChargeExploitations.charges }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="cont mt-5 mb-5">
        <div class="w-full h-100 bg-indigo-600 bg-opacity-60 flex items-center justify-center mb-4 p-4">
            <h2 class="text-white font-bold text-3xl">Autre dépense</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div v-for="(AutreDepense, index) in AutreDepenses" :key="index" class="bg-white p-6 shadow-md rounded-md transition duration-300 transform hover:scale-105">
            <h2 class="text-xl font-semibold mb-4 text-indigo-600">{{ AutreDepense.mois }}</h2>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                        <font-awesome-icon :icon="['fas', 'boxes-packing']" />
                        Fournisseurs:</span>
                    <span class="ml-2 text-gray-900">{{ AutreDepense.fournisseurs }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'cash-register']" />
                    Achats:</span>
                <span class="ml-2 text-gray-900">{{ AutreDepense.achats }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'money-bill-1-wave']" />
                    Dépenses:</span>
                <span class="ml-2 text-gray-900">{{ AutreDepense.depenses }}</span>
                </div>
                <div class="flex items-center">
                <span class="font-bold text-gray-600">
                    <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
                    Charges:</span>
                <span class="ml-2 text-gray-900">{{ AutreDepense.charges }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        achats: [
          { mois: 'Janvier', fournisseurs: 2, achats: 2, depenses: 2, charges: 2 },
          { mois: 'Février', fournisseurs: 3, achats: 1, depenses: 4, charges: 2 },
          { mois: 'Mars', fournisseurs: 4, achats: 3, depenses: 1, charges: 3 },
          { mois: 'Avril', fournisseurs: 2, achats: 5, depenses: 2, charges: 1 },
          { mois: 'Mai', fournisseurs: 3, achats: 2, depenses: 3, charges: 4 },
          { mois: 'Juin', fournisseurs: 1, achats: 4, depenses: 1, charges: 3 },
          { mois: 'Juillet', fournisseurs: 3, achats: 3, depenses: 2, charges: 1 },
          { mois: 'Août', fournisseurs: 2, achats: 1, depenses: 4, charges: 3 },
          { mois: 'Septembre', fournisseurs: 4, achats: 2, depenses: 3, charges: 2 },
          { mois: 'Octobre', fournisseurs: 1, achats: 3, depenses: 2, charges: 4 },
          { mois: 'Novembre', fournisseurs: 3, achats: 2, depenses: 4, charges: 1 },
          { mois: 'Décembre', fournisseurs: 2, achats: 1, depenses: 3, charges: 2 },
        ],
        SousTraitances: [
          { mois: 'Janvier', fournisseurs: 2, achats: 2, depenses: 2, charges: 2 },
          { mois: 'Février', fournisseurs: 3, achats: 1, depenses: 4, charges: 2 },
          { mois: 'Mars', fournisseurs: 4, achats: 3, depenses: 1, charges: 3 },
          { mois: 'Avril', fournisseurs: 2, achats: 5, depenses: 2, charges: 1 },
          { mois: 'Mai', fournisseurs: 3, achats: 2, depenses: 3, charges: 4 },
          { mois: 'Juin', fournisseurs: 1, achats: 4, depenses: 1, charges: 3 },
          { mois: 'Juillet', fournisseurs: 3, achats: 3, depenses: 2, charges: 1 },
          { mois: 'Août', fournisseurs: 2, achats: 1, depenses: 4, charges: 3 },
          { mois: 'Septembre', fournisseurs: 4, achats: 2, depenses: 3, charges: 2 },
          { mois: 'Octobre', fournisseurs: 1, achats: 3, depenses: 2, charges: 4 },
          { mois: 'Novembre', fournisseurs: 3, achats: 2, depenses: 4, charges: 1 },
          { mois: 'Décembre', fournisseurs: 2, achats: 1, depenses: 3, charges: 2 },
        ],
        ChargeExploitation: [
          { mois: 'Janvier', fournisseurs: 2, achats: 2, depenses: 2, charges: 2 },
          { mois: 'Février', fournisseurs: 3, achats: 1, depenses: 4, charges: 2 },
          { mois: 'Mars', fournisseurs: 4, achats: 3, depenses: 1, charges: 3 },
          { mois: 'Avril', fournisseurs: 2, achats: 5, depenses: 2, charges: 1 },
          { mois: 'Mai', fournisseurs: 3, achats: 2, depenses: 3, charges: 4 },
          { mois: 'Juin', fournisseurs: 1, achats: 4, depenses: 1, charges: 3 },
          { mois: 'Juillet', fournisseurs: 3, achats: 3, depenses: 2, charges: 1 },
          { mois: 'Août', fournisseurs: 2, achats: 1, depenses: 4, charges: 3 },
          { mois: 'Septembre', fournisseurs: 4, achats: 2, depenses: 3, charges: 2 },
          { mois: 'Octobre', fournisseurs: 1, achats: 3, depenses: 2, charges: 4 },
          { mois: 'Novembre', fournisseurs: 3, achats: 2, depenses: 4, charges: 1 },
          { mois: 'Décembre', fournisseurs: 2, achats: 1, depenses: 3, charges: 2 },
        ],
        AutreDepenses: [
          { mois: 'Janvier', fournisseurs: 2, achats: 2, depenses: 2, charges: 2 },
          { mois: 'Février', fournisseurs: 3, achats: 1, depenses: 4, charges: 2 },
          { mois: 'Mars', fournisseurs: 4, achats: 3, depenses: 1, charges: 3 },
          { mois: 'Avril', fournisseurs: 2, achats: 5, depenses: 2, charges: 1 },
          { mois: 'Mai', fournisseurs: 3, achats: 2, depenses: 3, charges: 4 },
          { mois: 'Juin', fournisseurs: 1, achats: 4, depenses: 1, charges: 3 },
          { mois: 'Juillet', fournisseurs: 3, achats: 3, depenses: 2, charges: 1 },
          { mois: 'Août', fournisseurs: 2, achats: 1, depenses: 4, charges: 3 },
          { mois: 'Septembre', fournisseurs: 4, achats: 2, depenses: 3, charges: 2 },
          { mois: 'Octobre', fournisseurs: 1, achats: 3, depenses: 2, charges: 4 },
          { mois: 'Novembre', fournisseurs: 3, achats: 2, depenses: 4, charges: 1 },
          { mois: 'Décembre', fournisseurs: 2, achats: 1, depenses: 3, charges: 2 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
    .cont{
        width: 98%;
    }
  </style>
  