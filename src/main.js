import Vue from "vue";
import LoanCalculator from "./components/LoanCalculator.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(LoanCalculator)
}).$mount("#app");
