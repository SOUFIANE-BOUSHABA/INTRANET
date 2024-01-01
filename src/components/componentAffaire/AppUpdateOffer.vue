<template>
  <div class="pr-20 mt-10 mb-44">
    <form class="mt-4">
      <h2 class="text-xl font-semibold mb-12 text-blue-700">
        Client
      </h2>
      <!-- Dropdown for selecting a client -->
   
      <!-- Other input fields for client details -->
      <div class="mb-4 flex" >
        <!-- Raison sociale / Nom -->
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].raisonSociale || ''"
              :readonly="isReadOnly"
              type="text"
              name="raisonSociale"
              id="raisonSociale"
              ref="raisonSocialeInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="raisonSociale"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Raison sociale / Nom
            </label>
          </div>
        </div>

        <!-- Adresse -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].adresse || ''"
              :readonly="isReadOnly"
              type="text"
              name="adresse"
              id="adresse"
              ref="adresseInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="adresse"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Adresse
            </label>
          </div>
        </div>
      </div>

      <!-- Ville -->
      <div class="mb-4 flex" >
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].ville || ''"
              :readonly="isReadOnly"
              type="text"
              name="ville"
              id="ville"
              ref="villeInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="ville"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ville
            </label>
          </div>
        </div>

        <!-- Code Postal -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].codePostal || ''"
              :readonly="isReadOnly"
              type="text"
              name="codePostal"
              id="codePostal"
              ref="codePostalInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="codePostal"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Code Postal
            </label>
          </div>
        </div>
      </div>

      <!-- Pays -->
      <div class="mb-4 flex" >
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].pays || ''"
              :readonly="isReadOnly"
              type="text"
              name="pays"
              id="pays"
              ref="paysInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="pays"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pays
            </label>
          </div>
        </div>

        <!-- E-mail -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].email || ''"
              :readonly="isReadOnly"
              type="text"
              name="email"
              id="email"
              ref="emailInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>
        </div>
      </div>

      <!-- ICE -->
      <div class="mb-4 flex" >
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].ice || ''"
              :readonly="isReadOnly"
              type="text"
              name="ice"
              id="ice"
              ref="iceInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="ice"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ICE
            </label>
          </div>
        </div>

        <!-- Référence client -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].referenceClient || ''"
              :readonly="isReadOnly"
              type="text"
              name="referenceClient"
              id="referenceClient"
              ref="referenceClientInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="referenceClient"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Référence client
            </label>
          </div>
        </div>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClient: "", 
      currentDate: "",
      showMissionForm: false,
      forms: [
        {
          isMissionAvecEquipements: false,
          selectedMission: "",
          Prix_HT: 0,
          Quantité: 0,
          taux_remise: 0,
          prixtotal: 0,
          equipments: [
            {
              equipement: "",
              prix: 0,
              quantite: "",
              taux_remise: "",
              prix_finale: 0,
              unite: "",
            },
          ],
          missions: [
            { value: "I1528552", label: "Mission 1" },
            { value: "T5852555", label: "Mission 2" },
          ],
        },
      ],


      clients: [{ id: "client1", name: "soufiane" }],

      interlocuteurs: [{ id: "interlocuteur1", name: "achraf " }],

      clientData: {
        client1: {
          raisonSociale: "youcode",
          adresse: "errachidia,aoufous",
          ville: "errachida",
          codePostal: "52000",
          pays: "maroc",
          email: "soufiane@email.com",
          ice: "ICE123",
          referenceClient: "Ref123",
        },
      },

      interlocuteurData: {
        interlocuteur1: {
          nom: "achraf",
          prenom: "lahcen",
          email: "achraf@email.com",
          fonction: "IT",
          telephone: "05666666666",
        },
      },
    };
  },
  computed: {
    isReadOnly() {
      return this.selectedClient !== "";
    },
    selectedMissionCode() {
      if (this.selectedMission) {
        return this.getCodeForMission(this.selectedMission);
      }
      return "";
    },
   
  },
  created() {
  
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  this.currentDate = formattedDate;
},
  methods: {
    

  },
};
</script>

<style scoped></style>
