<template>
  <div class="aside" :style="{ width: asideWidth }">
    <div class="menu">
      <div class="toggle-button" @click="toggleAsideWidth">
        <font-awesome-icon :icon="['fas', 'chevron-left']" v-if="asideWidth === '250px'" />
        <font-awesome-icon :icon="['fas', 'chevron-right']" v-else />
      </div>
      <ul>
        <li>
          <router-link to="ListDesRapport" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Liste des rapports</span>
          </router-link>
        </li>
        <li>
          <router-link to="ListDesRapportNonConfirme" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Liste des rapports Non Confirme</span>
          </router-link>
        </li>
        <li>
          <router-link to="ListDesRapportConfirme" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Liste des rapports Confirme</span>
          </router-link>
        </li>
        <li>
          <router-link to="RechercheParNomDeFichier" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Recherche Par Nom Fichier</span>
          </router-link>
        </li>
        <li>
          <router-link to="RechercheParNumeroAffaires" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Recherche par Numéro d'affaires</span>
          </router-link>
        </li>
        <li>
          <router-link to="ListeDesAdmins" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Liste des admins</span>
          </router-link>
        </li>
        <li>
          <router-link to="CreationAdmins" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '80px'">Création admin</span>
          </router-link>
        </li>
        <li>
          <router-link to="ListeDesAgendas" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Liste des agendas</span>
          </router-link>
        </li>
        <li>
          <router-link to="ReparationAffaireRapport" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Réparation N°Affaire & N° Rapport</span>
          </router-link>
        </li>
        <li>
          <router-link to="InitialiserAffaireRapport" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Initialiser N°Affaire & N° Rapport</span>
          </router-link>
        </li>
        <li>
          <router-link to="ReparationInterlocuteursClients" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Réparation Interlocuteurs & Clients</span>
          </router-link>
        </li> 
        <li>
          <router-link to="SupprimerMissionInspecteur" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '80px'">Supprimer Mission Inspecteur</span>
          </router-link>
        </li> 
        <li>
          <router-link to="NouveauActualite" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '80px'">Nouveau Actualité</span>
          </router-link>
        </li> 
        
        

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideWidth: '250px',
    };
  },
  methods: {
    toggleAsideWidth() {
       this.asideWidth = this.asideWidth === '250px' ? '80px' : '250px';
    this.$emit('asideToggled', this.asideWidth === '80px');
    },
  },
};
</script>

<style scoped>
.aside {
  background-color: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  position: fixed;
  height: 90vh; 
  overflow-y: auto;
 
  left: 0;

  padding-right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.3);
}

.menu {
  margin-top: 20px;
}

.toggle-button {
  display:flex;
  justify-content:end;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  color: #cbd5e0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.active-link {
  background: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
}
li {
  margin-bottom: 15px;
 
  border-radius: 5px;
  transition: 0.3s ease;
}

a {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: #cbd5e0;
  font-size: 1rem;
  transition: 0.3s ease;
}

li:hover {
  background: white;
}

li:hover a {
  color: black;
}
</style>
