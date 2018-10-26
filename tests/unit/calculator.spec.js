import { expect } from "chai";
import { calculator } from "@/calculator.js";

describe("calculator.js", () => {
  let testCalculator = { ...calculator };
  beforeEach(() => {
    testCalculator.annualRate = 3;
    testCalculator.numMonths = 2;
    testCalculator.price = 10000;
    testCalculator.downPayment = 10;
  });
  describe("totalPrincipal", () => {
    it("calculates the total principal", () => {
      expect(testCalculator.totalPrincipal()).to.equal(9990);
    });
  });
  describe("monthlyRate", () => {
    it("calculates the monthly interest rate", () => {
      expect(testCalculator.monthlyRate()).to.equal(0.0025);
    });
  });
  describe("monthlyPayment", () => {
    it("calculates the monthly payment", () => {
      expect(testCalculator.monthlyPayment()).to.match(/^5013.73/);
    });
  });
  describe("totalInterest", () => {
    it("calculates the total interest", () => {
      expect(testCalculator.totalInterest()).to.match(/^37.47/);
    });
  });
  describe("calcInterest", () => {
    it("calculates a month's interest based on the current balance", () => {
      expect(
        testCalculator.calcInterest(testCalculator.totalPrincipal())
      ).to.equal(24.975);
    });
  });
  describe("calcPrincipal", () => {
    it("calculates a month's principal based on the current balance", () => {
      expect(
        testCalculator.calcPrincipal(testCalculator.totalPrincipal())
      ).to.match(/^4988.76/);
    });
  });
  describe("createAmortizationData", () => {
    let result;
    beforeEach(() => {
      result = testCalculator.createAmortizationData();
    });
    it("returns an array", () => {
      expect(result).to.be.an("array");
    });
    it("correctly calculates monthly balance, interest, and principal", () => {
      expect(result).to.eql([
        { balance: 5001, interest: 25, principal: 4989 },
        { balance: -0, interest: 13, principal: 5001 }
      ]);
    });
  });
});
