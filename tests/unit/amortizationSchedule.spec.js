import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AmortizationSchedule from "@/components/AmortizationSchedule.vue";

describe("AmortizationSchedule.vue", () => {
  let amortizationData, wrapper, link, table;
  beforeEach(() => {
    amortizationData = [
      { principal: 3, balance: 87, interest: 1 },
      { principal: 3, balance: 87, interest: 1 }
    ];
    wrapper = shallowMount(AmortizationSchedule, {
      propsData: {
        amortizationData,
        monthlyPayment: 3
      }
    });
    link = wrapper.find(".Schedule-showHide");
    table = wrapper.find(".Schedule-tableContainer");
  });
  it("sets the default data", () => {
    expect(typeof AmortizationSchedule.data).to.equal("function");
  });
  it("renders props.amortizationData when passed", () => {
    expect(wrapper.text()).to.include(3);
    expect(wrapper.text()).to.include(87);
    expect(wrapper.text()).to.include(1);
  });
  it("hides the 'Show Amortization Schedule' link when there is insufficient data", () => {
    wrapper.setProps({ monthlyPayment: 0 });
    expect(link.attributes("style")).to.equal("display: none;");
  });
  it("shows the 'Show Amortization Schedule' link once there is sufficient data to display", () => {
    wrapper.setProps({ monthlyPayment: 10 });
    expect(link.attributes("style")).to.equal(undefined);
  });
  it("hides the form by default", () => {
    expect(table.attributes("style")).to.equal("display: none;");
  });
  it("hides the form when there is insufficient data", () => {
    link.trigger("click");
    wrapper.setProps({ monthlyPayment: 0 });
    expect(table.attributes("style")).to.equal("display: none;");
  });
  it("shows the form when the 'Show Amortization Schedule' link is clicked", () => {
    link.trigger("click");
    expect(table.attributes("style")).to.equal("");
  });
});
