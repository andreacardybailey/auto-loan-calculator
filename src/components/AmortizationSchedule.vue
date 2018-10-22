<template>
  <section class="Schedule">
    <a href="#" class="Schedule-showHide" v-show="dataPresent" v-on:click="showSchedule = !showSchedule"><span v-if="!showSchedule">See</span><span v-if="showSchedule">Hide</span> Amortization Schedule</a>
    <div class="Schedule-tableContainer" v-show="showSchedule && dataPresent">
    <table class="Schedule-table">
      <thead class="Schedule-thead">
        <tr class="Schedule-tr">
          <th class="Schedule-column">Month</th>
          <th class="Schedule-column Schedule-column--principalColumn">Principal</th>
          <th class="Schedule-column Schedule-column--graph"></th>
          <th class="Schedule-column Schedule-column--interestColumn">Interest</th>
          <th class="Schedule-column">Balance</th>
        </tr>
      </thead>
      <tbody class="Schedule-tbody">
        <tr class="Schedule-tr" v-for="(month, index) in amortizationData" :key="index">
          <td class="Schedule-column">{{index + 1}}</td>
          <td class="Schedule-column Schedule-column--principalColumn">${{Math.round(month.principal)}}</td>
          <td class="Schedule-column Schedule-column--graph">
            <div class="Schedule-graph">
              <div class="Schedule-graphBar Schedule-graphBar--principal" v-bind:style="{flex: month.principal}"></div>
              <div class="Schedule-graphBar Schedule-graphBar--interest" v-bind:style="{flex: month.interest}"></div>
            </div>
          </td>
          <td class="Schedule-column Schedule-column--interestColumn">${{Math.round(month.interest)}}</td>
          <td class="Schedule-column">${{Math.round(month.balance)}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "AmortizationSchedule",
  props: ["monthlyPayment", "amortizationData"],
  computed: {
    dataPresent() {
      return this.monthlyPayment > 0 ? true : false;
    }
  },
  data() {
    return {
      showSchedule: false
    };
  }
};
</script>
