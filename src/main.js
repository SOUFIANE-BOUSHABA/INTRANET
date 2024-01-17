import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faArrowRightFromBracket, faCalendar, faCalendarDays , faDollarSign , faHeadset ,faPenToSquare ,
    faPenNib , faTrash , faUpload,faPaperPlane,faCircleCheck,faEnvelope ,faChevronLeft ,faChevronRight ,
    faUser,faUsersLine,faBriefcase , faPlus ,faFile,faSackDollar,faFileExport,faList,faFloppyDisk,faFilePdf,
    faMinus,faImage,faXmark,faCheck , faMagnifyingGlass  , faTimes , faDownload ,faForwardStep,faBoxesPacking,
    faCashRegister,faMoneyBill1Wave,faFileInvoiceDollar 
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faArrowRightFromBracket , faCalendar, faCalendarDays , faDollarSign , faHeadset, faPenToSquare ,
    faPenNib , faTrash , faUpload,faPaperPlane,faCircleCheck,faEnvelope,faChevronLeft,faChevronRight,faUser,
    faUsersLine,faBriefcase ,faPlus,faFile,faSackDollar , faFileExport , faList,faFloppyDisk,faFilePdf,faImage,
    faMinus,faXmark,faCheck ,faMagnifyingGlass ,faTimes ,faDownload , faForwardStep,faBoxesPacking,faCashRegister,
    faMoneyBill1Wave,faFileInvoiceDollar
);


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
