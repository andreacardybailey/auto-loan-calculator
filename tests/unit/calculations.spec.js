import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Calculations from "@/components/Calculations.vue";

describe("Calculations.vue", () => {
  let wrapper, componentInstance;
  beforeEach(() => {
    wrapper = shallowMount(Calculations, {
      propsData: {
        monthlyPayment: 360,
        totalPrincipal: 1000,
        totalInterest: 30
      }
    });
    componentInstance = wrapper.vm;
  });
  it("renders props.monthlyPayment when passed", () => {
    expect(wrapper.text()).to.include(360);
  });
  it("renders props.totalPrincipal when passed", () => {
    expect(wrapper.text()).to.include(1000);
  });
  it("renders props.totalInterest when passed", () => {
    expect(wrapper.text()).to.include(30);
  });
});
