<template>
  <div class="aside" :style="{ width: asideWidth }">
    <div class="menu">
      <div class="toggle-button" @click="toggleAsideWidth">
        <font-awesome-icon :icon="['fas', 'chevron-left']" v-if="asideWidth === '250px'" />
        <font-awesome-icon :icon="['fas', 'chevron-right']" v-else />
      </div>
      <ul>
       <li>
          <router-link to="ajouterFournisseurs" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '70px'">Ajouter  Fournisseurs</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="listFournisseurs">
            <font-awesome-icon :icon="['fas', 'user']" /> <span v-if="asideWidth !== '70px'"> Fournisseurs</span>
          </router-link>
        </li>
          <li>
          <router-link exact active-class="active-link" to="ajoutersoustraitance">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '70px'">Ajouter sous-traitance</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="soustraitance">
            <font-awesome-icon :icon="['fas', 'list']" /><span v-if="asideWidth !== '70px'">Sous traitance</span>
          </router-link>
        </li>
          <li>
          <router-link exact active-class="active-link" to="ajouterInterlocuteur">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '70px'">Ajouter  Interlocuteur</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="Interlocuteurs">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Interlocuteurs</span>
          </router-link>
        </li>
          <li>
          <router-link exact active-class="active-link" to="ChargeExploitation">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '70px'">  Charge Exploitation</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="ListeChargesExploitation">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Liste Exploitation</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="AchatFournisseur">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Fournisseur</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="DemandeAchatFournisseur">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Demande Achat F</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="AchatEnCours">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Achat En Cours</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="AchatTermine">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Achat Terminé</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="DemandSousTraitance">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Sous-Traitance</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="DemandSousTraitanceEncours">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Sous-Traitance En cours</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="DemandSousTraitanceTermine">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Sous-Traitance Terminé</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="AutreDepense">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Autre Dépensée</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="ListeDepenses">
           <font-awesome-icon :icon="['fas', 'list']" /> <span v-if="asideWidth !== '70px'">Liste Dépenses</span>
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
       this.asideWidth = this.asideWidth === '250px' ? '70px' : '250px';
      this.$emit('asideToggled', this.asideWidth === '70px');
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
  overflow-y: auto;
 height: 90vh;
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
