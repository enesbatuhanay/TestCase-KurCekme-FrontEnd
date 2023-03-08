<script setup>
import {ref, onMounted} from 'vue'
import CurrencyService from '../service/axiousService.js'
import '@vuepic/vue-datepicker/dist/main.css'
import moment from "moment";
const date = ref();
const table = ref([]);

const headers = ref([
  {text: "Currency Code", value: "currencyCode", sortable: true},
  {text: "Unit", value: "unit", sortable: true},
  {text: "Currency Name", value: "currencyName", sortable: true},
  {text: "Forex Buying", value: "forexBuying", sortable: true},
  {text: "Forex Selling", value: "forexSelling", sortable: true},
  {text: "Banknote Buying", value: "banknoteBuying", sortable: true},
  {text: "Banknote Selling", value: "banknoteSelling", width: 200},

]);
async function getCurrency(isRefresh) {
  let shortDate;
  let longDate;

  if(!isRefresh) {
    shortDate = moment(new Date(date.value)).format("YYYYMM");
    longDate = moment(new Date(date.value)).format("DDMMYYYY");
  }
  else{
    shortDate = moment(new Date()).format("YYYYMM");
    longDate = moment(new Date()).format("DDMMYYYY");

  }
const finalDate=shortDate+"/"+longDate;
  table.value = await CurrencyService.getCurrencies(finalDate)
}


onMounted(async () => {
  table.value = await getCurrency(true);
  let currentDate=moment(new Date()).format()
  date.value=currentDate
});
</script>

<template>
  <div class="flex-parent-element">
    <div class="flex-child-element magenta">
      <VueDatePicker
          v-model="date"
          :enable-time-picker="false"
          autoApply
          format="dd.MM.yyyy">
      </VueDatePicker>
    </div>
    <div class="flex-child-element green">
      <div class="myButton" @click="getCurrency(false)"> Search</div>
    </div>
  </div>
<div>
  <EasyDataTable
      :headers="headers"
      :items="table"
  />
</div>
</template>

<style scoped>

.flex-parent-element {
  display: flex;
  width: 50%;
}

.flex-child-element {
  flex: 1;
  margin: 10px;
}

.flex-child-element:first-child {
  margin-right: 20px;
}
.myButton {
  background-color:#44c767;
  border-radius:28px;
  border:1px solid #18ab29;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:6px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color:#5cbf2a;
}
.myButton:active {
  position:relative;
  top:1px;
}
</style>

