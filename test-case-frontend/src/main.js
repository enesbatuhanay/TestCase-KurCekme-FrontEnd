import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
const app = createApp(App);
app.use(VueAxios, axios)
app.component('VueDatePicker', VueDatePicker);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(Toast);
app.mount("#app");


