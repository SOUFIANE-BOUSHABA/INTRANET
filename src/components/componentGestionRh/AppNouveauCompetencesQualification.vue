<template>
    <div class="flex justify-center" >
        <div class="container">
    
            <div class=" md:p-5 space-y-4">
                <form class=" mx-auto">
                    <div class="DEMANDE_ABSENCE_SCROOL pt-4">
        <!-- ------------------------------Informations Personnelles------------------- -->
                        <div class="mt-5 pt-5 mb-5 pb-5">
                            <h4 class="text-xl font-semibold text-left text-blue-700">
                                Selectionner collaborateur / inspecteur
                            </h4>
                            <hr>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <label for="collaborateur" class="sr-only">Choisir Collaborateur</label>
                            <select v-model="selectedCollaborateur" @change="handleCollaborateurChange"
                                    id="collaborateur"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="null" disabled>Choisir Collaborateur</option>
                                <option value="rabie/ait imgh">rabie ait imgh</option>
                                <option value="Soufian/boushaba">Soufian boushaba</option>
                            </select>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input v-model="nom" type="text" name="nom" id="nom" disabled
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required/>
                                <label for="nom"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input v-model="prenom" type="text" name="prenom" id="prenom" disabled
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required/>
                                <label for="prenom"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
                            </div>
                        </div>    
                        <div class="mt-5 pt-5 mb-5 pb-5">
                            <h4 class="text-xl font-semibold text-left text-blue-700">
                                Informations Techniques
                            </h4>
                            <hr>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input  type="date" name="Date_de_Formation" id="Date_de_Formation"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required/>
                                <label for="Date_de_Formation"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Date de Formation
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <label for="metier" class="sr-only">Choisir un métier</label>
                                <select data-v-6b63125a="" id="metier" v-model="selectedMetier" @change="handleMetierChange"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option data-v-36fe5ece="" value="none">Choisir un métiert</option>
                                    <option data-v-36fe5ece="" value="Electricité"> Electricité</option>
                                    <option data-v-36fe5ece="" value="Levage / Mécanique"> Levage / Mécanique</option>
                                    <option data-v-36fe5ece="" value="Ascenseurs - Escaliers Mécaniques - Trottoirs Roulants"> Ascenseurs - Escaliers Mécaniques – Trottoirs Roulants</option>
                                    <option data-v-36fe5ece="" value="Incendie"> Incendie</option>
                                    <option data-v-36fe5ece="" value="Machine"> Machine</option>
                                    <option data-v-36fe5ece="" value="Pression"> Pression</option>
                                    <option data-v-36fe5ece="" value="Environnement"> Environnement</option>
                                    <option data-v-36fe5ece="" value="Autre"> Autre</option>
                                </select>
                            </div>
                        </div> 
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <label for="Domaine" class="sr-only">Choisir Domaine Famille</label>
                                <select data-v-6b63125a="" id="Domaine"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choisir Domaine Famillet</option>
                                    <option v-for="option in filteredDomaines" :key="option" :value="option">{{ option }}</option>
                                </select>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <label for="Domaine" class="sr-only">Choisir Qualification</label>
                                <select data-v-6b63125a="" id="Domaine"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choisir Qualificationt</option>
                                    <option data-v-36fe5ece="" value="INC- CTSSI"> INC- CTSSI</option>
                                    <option data-v-36fe5ece="" value="INC- CPSSI"> INC- CPSSI</option>
                                    <option data-v-36fe5ece="" value="INC- CDEF"> INC- CDEF</option>
                                    <option data-v-36fe5ece="" value="INC- CMSS"> INC- CMSS</option>
                                    <option data-v-36fe5ece="" value="INC- CGC"> INC- CGC</option>
                                    <option data-v-36fe5ece="" value="INC- AUD"> INC- AUD</option>
                                    <option data-v-36fe5ece="" value="INC- DIAG"> INC- DIAG</option>
                                    <option data-v-36fe5ece="" value="INC- AST"> INC- AST</option>
                                </select>
                            </div>
                        </div> 
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <label for="Domaine" class="sr-only">Choisir les connaissance theorique et pratique</label>
                                <select data-v-6b63125a="" id="Domaine"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option data-v-36fe5ece="" value="none">Choisir les connaissance theorique et pratiquet</option>
                                    <option data-v-36fe5ece="" value="Abandonner">Abandonner</option>
                                    <option data-v-36fe5ece="" value="Adevelopper">Adevelopper</option>
                                    <option data-v-36fe5ece="" value="Encours d'acquisition">Encœur d'acquisition</option>
                                    <option data-v-36fe5ece="" value="Àquise">Àquise</option>
                                    <option data-v-36fe5ece="" value="Bonnes">Bonnes</option>
                                    <option data-v-36fe5ece="" value="Grand expérience">Grand expérience</option>

                                </select>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input  type="text" name="ModuleFormation" id="ModuleFormation"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required/>
                                <label for="ModuleFormation"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Module Formation</label>
                            </div>
                        </div> 
                        <div class="relative z-0 w-full mb-5 group">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="Document_preuve">Télécharger P.J (Format PDF)</label>
                            <input
                                class="block form-control w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="user_avatar_help" id="Document_preuve" name="Document_preuve"
                                type="file">
                        </div>
                    </div>
                    <div
                        class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            CRÉER FICHE COLLABORATEUR</button>
                        <button data-modal-hide="demand-abcsence-modal" type="reset"
                            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Reset</button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            selectedCollaborateur: "null",
            nom: '',
            prenom: '',
            selectedMetier: "none",
            selectedDomaine: null,
            };
        },
        computed: {
            filteredDomaines() {
            if (this.selectedMetier === 'Electricité') {
                return ['Elect-HT', 'Elect-BT', 'Elect-HT/BT'];
            } else if (this.selectedMetier === 'Levage / Mécanique') {
                return ['Famille 1', 'Famille 2', 'Famille 3'];
            }else if (this.selectedMetier === 'Ascenseurs - Escaliers Mécaniques - Trottoirs Roulants') {
                return ['Ascenseurs - Escaliers Mécaniques - Trottoirs Roulants'];
            }else if (this.selectedMetier === 'Incendie') {
                return ['INC'];
            }else if (this.selectedMetier === 'Machine') {
                return ['MAC', 'ENG'];
            }else if (this.selectedMetier === 'Pression') {
                return ['PRS'];
            }else if (this.selectedMetier === 'Environnement') {
                return ['ENVIR'];
            }
            return [];
            },
        },
        methods: {
            handleCollaborateurChange() {
                if (this.selectedCollaborateur) {
                    const [nom, prenom] = this.selectedCollaborateur.split('/');
                    this.nom = nom;
                    this.prenom = prenom;
                } else {
                    this.nom = '';
                    this.prenom = '';
                }
            },
            handleMetierChange() {
                this.selectedDomaine = null;
            },
        },
    };
</script>