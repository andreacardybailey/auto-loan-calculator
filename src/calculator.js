export const calculator = {
  annualRate: null,
  numMonths: null,
  price: null,
  downPayment: null,
  /**
   * Calculates the total principal
   * @returns {number}
   */
  totalPrincipal() {
    return this.price - this.downPayment;
  },
  /**
   * Calculates the monthly interest rate
   * @returns {number}
   */
  monthlyRate() {
    return this.annualRate / 100 / 12;
  },
  /**
   * Calculates the monthly payment
   * @return {number}
   */
  monthlyPayment() {
    const payment =
      (this.totalPrincipal() *
        (this.monthlyRate() * (1 + this.monthlyRate()) ** this.numMonths)) /
      ((1 + this.monthlyRate()) ** this.numMonths - 1);
    return !payment || payment === Infinity ? 0 : payment;
  },
  /**
   * Calculates the total principal
   * @return {number}
   */
  totalInterest() {
    const totalPayment = this.numMonths * this.monthlyPayment();
    const interest = totalPayment - this.totalPrincipal();
    return interest > 0 ? interest : 0;
  },
  /**
   * Calculates monthly interest
   * @param {number} currentBalance
   * @return {number}
   */
  calcInterest(currentBalance) {
    return this.monthlyRate() * currentBalance;
  },
  /**
   * Calculates monthly principal
   * @param {number} currentBalance
   * @return {number}
   */
  calcPrincipal(currentBalance) {
    return this.monthlyPayment() - this.calcInterest(currentBalance);
  },
  /**
   * Creates an array of objects containing
   * principal, interest, and balance data
   * for each month of a calculated loan
   * @return {array}
   */
  createAmortizationData() {
    let balance = this.totalPrincipal();
    let amortization = [];
    let counter = 1;
    while (counter <= this.numMonths) {
      let interest = this.calcInterest(balance);
      let principal = this.calcPrincipal(balance);
      balance = balance - principal;
      amortization.push({
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        balance: Math.round(balance * 100) / 100
      });
      counter++;
    }
    return amortization;
  }
};
