<template>
  <div class="pr-20 mt-10 mb-44">
    <form class="mt-4">
      <h2 class="text-xl font-semibold mb-12 text-blue-700">
        Client
      </h2>
    
      <div class="mb-4 flex" >
        <!-- Raison sociale / Nom -->
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
            value="test"
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
            value="test"
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
            value="test"
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
            value="test"
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
            value="test"
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
            value="test"
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
            value="test"
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
              value="test"
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
      <button @click.prevent="toggleReadOnly" class="w-1/5 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        Changer
      </button>



      <!-- interloculteur -->


      <h2 class="text-xl mt-12 font-semibold mb-12 text-blue-700">
        Interloculteur
      </h2>
    
      <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                    <input type="text" name="Nom" id="Nom" value="boushaba" :readonly="isReadOnlyForInterlocuteur"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Nom"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                    <input type="text" name="Prénom" id="Prénom" value="soufiane" :readonly="isReadOnlyForInterlocuteur"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Prénom"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
                    </div>
                </div>

                <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                    <input type="email" name="E-mail" id="E-mail" value="soufiane@gmail.com" :readonly="isReadOnlyForInterlocuteur"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="E-mail"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
                    </div>
                    
                    <div class="w-1/2 mr-2 relative z-0 group">
          <select
            name="listeClients" :disabled="isReadOnlyForInterlocuteur"
            id="listeClients"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">selectioner client</option>
            <option value="hamid">hamid</option>
            
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
          >
            <svg
              class="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <label
            for="listeClients"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Liste des Clients
          </label>
        </div>


                  
                </div>

                <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                    <input type="tel" name="Téléphone" id="Téléphone" value="0666666666" :readonly="isReadOnlyForInterlocuteur"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Téléphone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Téléphone</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                    <input type="text" name="Fonction" id="Fonction" value="full stack" :readonly="isReadOnlyForInterlocuteur"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Fonction"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fonction</label>
                    </div>
                </div>

             

               

      <button @click.prevent="toggleReadOnlyForInterlocuteur" class="w-1/5 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        Changer
      </button>


      <!-- Offer -->


      <h2 class="text-xl mt-12 font-semibold mb-12 text-blue-700">
        Numéro d'offre & Apporteur d'offre & Date d'offre
      </h2>
    
      <div class="mb-4 flex">
          <!-- Numéro d'offre -->
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
              :readonly="isReadOnlyForOffer"
                type="text"
                name="numeroOffre"
                id="numeroOffre"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value="G34|12|2023|Google"
                required
              />
              <label
                for="numeroOffre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numéro d'offre
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
          <div class="w-1/2 ml-2 relative z-0 group">
            <select
            :disabled="isReadOnlyForOffer"
              name="apporteurAffaire"
              id="apporteurAffaire"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="">Sélectionner un apporteur d'affaire</option>
              <option value="" selected>hamid hamid</option>
              <option value="">achraf</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
            >
              <svg
                class="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <label
              for="apporteurAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apporteur d'affaire
            </label>
          </div>
        </div>

        <!-- Date d'offre -->
        <div class="mb-4 flex">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
              type="date"  value="2024-02-03" 
                :readonly="isReadOnlyForOffer"
                name="dateOffre"
                id="dateOffre"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="dateOffre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date d'offre
              </label>
            </div>
          </div>

          <div class="w-2/3 ml-2 flex items-center justify-end">
          
      <button @click.prevent="toggleReadOnlyForOffer" class="w-2/6 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        Changer
      </button>
          </div>
        </div>
      






      <!-- Missions -->

        
      <h2 class="text-xl mt-12 font-semibold mb-12 text-blue-700">
        Mission(s)
      </h2>
    
      <div class="mb-4 gap-3 flex">
        <div class="w-1/2  relative z-0 group">
          <select
              ref="Liste_missions"
              name="Liste_missions"
              @change="updateCodeMission"
              id="Liste_missions"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
                <option value="">Sélectionner votre mission</option>
                <option v-for="(mission, index) in missions" :key="index" :value="mission.name">{{ mission.name }}</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <svg
                  class="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <label
                for="apporteurAffaire" 
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Liste des missions
              </label>
            </div>
            <!-- Numéro d'offre -->
            <div class="w-1/2 mr-2 relative z-0 group">
              <div class="relative">
                <input
                :value="selectedMissionCode"
                  type="text"
                  name="Code_Mission"
                  id="Code_Mission"
                  class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="Code_Mission"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Code Mission
                </label>
              </div>
            </div>
          </div>


          <div class="mb-4 gap-3 flex">
        <div class="w-1/2  relative z-0 group">
              <select
               
                name="Devis"
                id="Devis"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option value="mad">MAD </option>
                <option value="euro">EURO </option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <svg
                  class="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <label
                for="Devis"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Devis
              </label>
            </div>
            <!-- Numéro d'offre -->
            <div class="w-1/2 mr-2 relative z-0 group">
              <div class="relative">
                <input
                  type="text" value="678"
                  name="prix"
                  id="prix"
                  class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="prix"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Prix
                </label>
              </div>
          
          </div>
          </div>
      
        <div class="mb-4 mt-12 gap-3 flex">
        
          <div class="w-1/2 grid mr-2 relative z-0 group">
              <div class="relative">
                <div v-for="(input, index) in prestationsInputs" :key="index" class="mb-4">
                <input
                  type="text"
                  name="Equipement"
                  id="Equipement"
                  v-model="prestationsInputs[index]"
                  class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
              
                />
                </div>
                <label
                  for="Equipement"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Equipement
                </label>
              </div>

              <div class="mb-4 flex">
                  <button @click.prevent="addInput" class="w-1/5 mr-2 h-10 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Ajouter</button>
                  <button @click.prevent="removeInput" v-show="prestationsInputs.length > 1" class="w-1/5 h-10 ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer</button>
              </div>
          
          </div>
            
            
            <div class="w-1/2 mr-2 grid relative z-0 group">
              <div class="relative">
                <div v-for="(input, index) in prestationsInputsrefference" :key="index" class="mb-4">
                <input
                  type="text"    v-model="prestationsInputsrefference[index]"
                  name="Référence"
                  id="Référence"
                  class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  
                /></div>
                <label
                  for="Référence"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Référence Rapports (Equipement):
                </label>
              </div>

              <div class="mb-4 flex">
                  <button @click.prevent="addInputReference" class="w-1/5 mr-2 p-2 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Ajouter</button>
                  <button @click.prevent="removeInputReference" v-show="prestationsInputsrefference.length > 1" class="w-1/5 ml-2 h-10 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer</button>
              </div>
            
          </div>
        </div>


        <div class="mb-4 mt-12 gap-3 flex">
        
        <div class="w-1/2 grid mr-2 relative z-0 group">
          <div class="mb-4 flex">
                  <button  class="w-2/6 mr-2 p-2 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">Changer Mission</button>
                  <button  class="w-2/6 ml-2 h-10 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer Mission</button>
              </div>
           </div>
        </div>  

        
      <!-- Missions -->

        
      <h2 class="text-xl mt-12 font-semibold mb-12 text-blue-700">
        Devis
      </h2>

      <div class="mb-4 flex">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
              type="file"  
               
                name="devis"
                id="devis"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="devis"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Devis
              </label>
            </div>
          </div>

          <div class="w-2/3 ml-2 flex items-center justify-end">
          
          <button  class="w-2/6 mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
            Change Devis
          </button>
          </div>
        </div>
    



        <div class="mb-4 mt-24 gap-3 grid">
        
        <div class="w-1/2 grid mr-2 relative z-0 group">
            <div class="relative">
              <h2 class="text-xl mt-12 font-semibold mb-4 text-blue-700">
                Intervention
              </h2>
            </div>

            <div class="mb-4 flex">
                <button  class="w-1/5 ml-2 h-10 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer</button>
              
            </div>
        
        </div>
          
          
          <div class="w-1/2 mr-2 grid relative z-0 group">
            <div class="relative">
              <h2 class="text-xl mt-12 font-semibold mb-4 text-blue-700">
                Bon de Commande
              </h2>
            </div>

            <div class="mb-4 flex">
                <button  class="w-1/5 ml-2 h-10 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Supprimer</button>
            
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
      isReadOnly: true,
      isReadOnlyForInterlocuteur : true,
      isReadOnlyForOffer: true,
      selectedMissionCode: '',
     
      prestations: "",
      prestationsInputs: [""],
      prestationsInputsrefference:[""],

      missions: [
        { name: 'Mission 1', code: 'M1' },
        { name: 'Mission 2', code: 'M2' },
        
      ],
    };
  },
  methods: {
    toggleReadOnly() {
      this.isReadOnly = !this.isReadOnly;
    },
    toggleReadOnlyForInterlocuteur() {
      this.isReadOnlyForInterlocuteur = !this.isReadOnlyForInterlocuteur;
    },
    toggleReadOnlyForOffer() {
      this.isReadOnlyForOffer = !this.isReadOnlyForOffer;
    },
    updateCodeMission() {
      const selectedMission = this.$refs.Liste_missions;
      const selectedMissionName = selectedMission.options[selectedMission.selectedIndex].value;
      const foundMission = this.missions.find((mission) => mission.name === selectedMissionName);
      if (foundMission) {
        this.selectedMissionCode = foundMission.code;
      } else {
        this.selectedMissionCode = '';
      }
    },
    
    addInput() {
      this.prestationsInputs.push("");
    },

    removeInput() {
      if (this.prestationsInputs.length > 1) {
        this.prestationsInputs.pop();
      }
    },
    addInputReference() {
      this.prestationsInputsrefference.push("");
    },

    removeInputReference() {
      if (this.prestationsInputsrefference.length > 1) {
        this.prestationsInputsrefference.pop();
      }
    },
  },
};
</script>

<style scoped></style>
