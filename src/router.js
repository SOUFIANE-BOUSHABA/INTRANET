
import AppInterface from './components/componentInterface/AppInterface.vue';
import AppAdmin from './components/componentAdmin/AppAdmin.vue';
import AppProduction from './components/componentProduction/AppProduction.vue';
import AppTech from './components/componentTechnique/AppTechnique.vue';
import AppQuality from './components/componentQuality/AppQuality.vue';

import AppGestionAffaire from './views/AppGestionAffaire.vue';
import AppClient from './components/componentAffaire/AppClient.vue';
import AppInterlocuteur from './components/componentAffaire/AppInterlocuteur.vue';
import AppOfferCommercial from './components/componentAffaire/AppOfferCommercial.vue';
import UpdateClient from './components/componentAffaire/AppUpdateClient.vue';

import AppFacture from './views/AppFacture.vue';

import AppAttentFacture from './components/componentFacturation/AppAttentFacture.vue';
import AppEmiseFacture from './components/componentFacturation/AppEmiseFacture.vue';
import AppFactureEncaiss from './components/componentFacturation/AppFactureEncaiss.vue';

import ajouterClient from './components/componentAffaire/AppAddClient.vue';
import ajouterInterlocuteur from './components/componentAffaire/AppAddInterlocuteur.vue';
import AppAddOffer from './components/componentAffaire/AppAddOffer.vue';
import UpdateInterlocuteur from './components/componentAffaire/AppUpdateInterlocuteur.vue';
import UpdateOffer from './components/componentAffaire/AppUpdateOffer.vue';

import { createRouter, createWebHistory } from 'vue-router';
import AppAgenda from './components/componentAgenda/AppAgenda.vue';
import AppContact from './components/componentContact/AppContact.vue';
import AppDemandAbs from './components/componentDemandAbcense/AppDemandAbcense.vue';


import GestionRh from './views/AppGestionRh.vue';
import AppDemandeAbsence from './components/componentGestionRh/AppDemandeAbsence.vue';
import AppListeDemandeAbsence from './components/componentGestionRh/AppListeDemandeAbsence.vue';
import AppUpdateDemandeAbsence from './components/componentGestionRh/AppUpdateDemandeAbsence.vue';
import AppNouveauCollaborateur from './components/componentGestionRh/AppNouveauCollaborateur.vue';
import AppListCollaborateur from './components/componentGestionRh/AppListCollaborateur.vue';
import AppUpdateCollaborateur from './components/componentGestionRh/AppUpdateCollaborateur.vue';
import AppNouveauCompetencesQualification from './components/componentGestionRh/AppNouveauCompetencesQualification.vue';
import AppListeQualifications from './components/componentGestionRh/AppListeQualifications.vue';
import AppUpdateQualifications from './components/componentGestionRh/AppUpdateQualifications.vue';
import AppGestionFraisSalaries from './components/componentGestionRh/AppGestionFraisSalaries.vue';
import AppGestionJoursFeries from './components/componentGestionRh/AppGestionJoursFeries.vue';


import AppFournisour from './views/AppFournisseur.vue';
import AppFourniseur from './components/componentFournisseur/AppAppFourniseur.vue';
import AppAddFournisseour from './components/componentFournisseur/AppAddFournisseour.vue';
import AppAddsouTraitance from './components/componentFournisseur/AppAddsouTraitance.vue';
import AppSoustraitances from './components/componentFournisseur/AppSous-traitances.vue'
import AppFourniseurInterlocuteur from './components/componentFournisseur/AppInterlocuteur.vue';
import AppInterlocuteurs from './components/componentFournisseur/AppListInterlocuteurs.vue';
import AppChargeExploitation from './components/componentFournisseur/AppAddChargeExploitation.vue';
import AppListeChargesExploitation from './components/componentFournisseur/AppListeChargesExploitation.vue';
import AppUpdateChargeExploitationn from './components/componentFournisseur/AppUpdateChargeExploitationn.vue';
import AppAchatFournisseur from './components/componentFournisseur/AppAchatFournisseur.vue';
import AppDemandeAchatFournisseur from './components/componentFournisseur/AppDemandeAchatFournisseur.vue';
import AppAchatEnCours from './components/componentFournisseur/AppAchatEnCours.vue';


import AppGestionCalendrier from './components/componentGestionCalendrier/AppGestionCalendrier.vue';

import AppGestionNotesFrais from './components/GestionNotesFrais/AppGestionNotesFrais.vue';


const routes = [
  { path: '/', component: AppInterface },
  { path: '/Administrativ', component: AppAdmin },
  { path: '/Production', component: AppProduction },
  { path: '/Technique', component: AppTech },
  { path: '/Quality', component: AppQuality },
  { path: '/Agenda', component: AppAgenda },
  { path: '/Contact', component: AppContact },
  { path: '/DemandAbs', component: AppDemandAbs },
  
  {
    path: '/GestionDesAffaire',
    component: AppGestionAffaire,
    children: [
      { path: 'ajouterClient', component: ajouterClient },
      { path: 'client', component: AppClient },
      { path: 'ajouterInterlocuteur', component: ajouterInterlocuteur },
      { path: 'interlocuteur', component: AppInterlocuteur },
      { path: 'UpdateInterlocuteur', component: UpdateInterlocuteur },
      { path: 'ajouterOffres', component: AppAddOffer },
      { path: 'offresCommerciales', component: AppOfferCommercial },
      { path: 'UpdateClient', component: UpdateClient },
      { path: 'UpdateOffer', component: UpdateOffer },
    ],
  },
  {
    path: '/comptabilitFacturation',
    component: AppFacture,
    children: [
      { path: 'EnAttenteFActuration', component: AppAttentFacture },
      { path: 'EmiseFacture', component: AppEmiseFacture },
      { path: 'FactureEncaissee', component: AppFactureEncaiss },
      
    ],
  },
  {
    path: '/GestionFournisseurs',
    component: AppFournisour,
    children: [
      { path: 'ajouterFournisseurs', component: AppAddFournisseour },
      { path: 'listFournisseurs', component: AppFourniseur },
      { path: 'ajoutersoustraitance', component: AppAddsouTraitance },
      { path: 'soustraitance', component: AppSoustraitances },
      { path: 'ajouterInterlocuteur', component: AppFourniseurInterlocuteur },
      { path: 'Interlocuteurs', component: AppInterlocuteurs },
      { path: 'ChargeExploitation', component: AppChargeExploitation },
      { path: 'ListeChargesExploitation', component: AppListeChargesExploitation },
      { path: 'UpdateChargeExploitation', component: AppUpdateChargeExploitationn },
      { path: 'AchatFournisseur', component: AppAchatFournisseur },
      { path: 'DemandeAchatFournisseur', component: AppDemandeAchatFournisseur },
      { path: 'AchatEnCours', component: AppAchatEnCours },
      
    ],
  },
  { path: '/GestionCalendrier', component: AppGestionCalendrier },
  {
    path: '/GestionRh',
    component: GestionRh,
    children: [
      { path: 'DemandeAbsence', component: AppDemandeAbsence },
      { path: 'ListeDemandeAbsence', component: AppListeDemandeAbsence },
      { path: 'UpdateDemandeAbsence', component: AppUpdateDemandeAbsence },
      { path: 'NouveauCollaborateur', component: AppNouveauCollaborateur },
      { path: 'ListCollaborateur', component: AppListCollaborateur },
      { path: 'UpdateCollaborateur', component: AppUpdateCollaborateur },
      { path: 'NouveauCompetencesQualification', component: AppNouveauCompetencesQualification },
      { path: 'ListeQualifications', component: AppListeQualifications },
      { path: 'UpdateQualifications', component: AppUpdateQualifications },
      { path: 'GestionFraisSalaries', component: AppGestionFraisSalaries },
      { path: 'GestionJoursFeries', component: AppGestionJoursFeries },
      
    ],
  },
  { path: '/GestionNotesFrais', component: AppGestionNotesFrais },

  
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
