<template>
  <main>
    <form class="Form" action role="form">
      <fieldset>
        <div class="Form-group">
          <label class="Form-label Form-label--currency" for="price">Vehicle Price</label>
          <input
            class="Form-input Form-input--currency"
            min="0"
            v-model.number="loanCalculator.price"
            type="number"
            id="price"
          >
        </div>
        <div class="Form-group">
          <label class="Form-label Form-label--currency" for="downPayment">Down Payment</label>
          <input
            class="Form-input Form-input--currency"
            min="0"
            v-model.number="loanCalculator.downPayment"
            type="number"
            id="downPayment"
          >
        </div>
        <div class="Form-group">
          <label class="Form-label" for="months">Months</label>
          <input
            class="Form-input Form-input--small"
            v-model.number="loanCalculator.numMonths"
            min="0"
            type="number"
            id="months"
          >
        </div>
        <div class="Form-group">
          <label class="Form-label Form-label--percent" for="rate">Interest Rate</label>
          <input
            class="Form-input Form-input--small"
            v-model.number="loanCalculator.annualRate"
            min="0"
            type="number"
            id="rate"
          >
        </div>
      </fieldset>
    </form>
    <calculations
      :monthlyPayment="loanCalculator.monthlyPayment()"
      :totalPrincipal="loanCalculator.totalPrincipal()"
      :totalInterest="loanCalculator.totalInterest()"
    />
    <amortization-schedule
      :monthlyPayment="loanCalculator.monthlyPayment()"
      :amortizationData="loanCalculator.createAmortizationData()"
    />
  </main>
</template>

<script>
import Calculations from "./Calculations.vue";
import AmortizationSchedule from "./AmortizationSchedule.vue";
import { calculator } from "../calculator.js";

export default {
  name: "LoanCalculator",
  components: {
    Calculations,
    AmortizationSchedule
  },
  data() {
    return {
      loanCalculator: { ...calculator }
    };
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/calculator.scss";
</style>
