import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LoanCalculator from "@/components/LoanCalculator.vue";

describe("LoanCalculator.vue", () => {
  let wrapper, data;
  beforeEach(() => {
    wrapper = shallowMount(LoanCalculator);
    data = {
      loanCalculator: {
        price: 1000,
        downPayment: 1,
        numMonths: 30,
        annualRate: 3
      }
    };
    wrapper.setData(data);
  });
  it("sets the default data", () => {
    expect(typeof LoanCalculator.data).to.equal("function");
  });
  it("renders the price", () => {
    expect(wrapper.find("#price").element.value).to.equal("1000");
  });
  it("renders the down payment", () => {
    expect(wrapper.find("#downPayment").element.value).to.equal("1");
  });
  it("renders the number of months", () => {
    expect(wrapper.find("#months").element.value).to.equal("30");
  });
  it("renders the rate", () => {
    expect(wrapper.find("#rate").element.value).to.equal("3");
  });
});
