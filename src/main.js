
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import swal from 'sweetalert2'


import 'datatables.net-dt/css/jquery.dataTables.min.css'
import {DataTable} from "datatables.net-bs5";




import '../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret , faInfo, faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'





library.add(faUserSecret,faPenToSquare,faTrash,faInfo)



window.Swal = swal
window.$=window.jquery=require('jquery')

import 'bootstrap-select'
createApp(App).use(store).component('font-awesome-icon', FontAwesomeIcon) .use(bootstrap).use(router).mount('#app')
