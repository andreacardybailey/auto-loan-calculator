<template>
  <section class="Calculations">
    <h2>Estimated Monthly Payment</h2>
    <p class="Calculations-monthlyPayment">${{Math.round(monthlyPayment)}}</p>
    <dl class="Calculations-list">
      <dt class="Calculations-term">Total Principal:</dt>
      <dd class="Calculations-amount">${{Math.round(totalPrincipal)}}</dd>
      <dt class="Calculations-term">Total Interest:</dt>
      <dd class="Calculations-amount">${{Math.round(totalInterest)}}</dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: "Calculations",
  props: {
    monthlyPayment: Number,
    totalPrincipal: Number,
    totalInterest: Number
  }
};
</script>
