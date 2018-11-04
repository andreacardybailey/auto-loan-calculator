describe("Loan Calculator", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#price")
      .type("10000")
      .get("#downPayment")
      .type("100")
      .get("#months")
      .type("60")
      .get("#rate")
      .type("3");
  });
  it("loads the page", () => {
    cy.contains("h1", "Auto Loan Calculator");
  });
  it("calculates the monthly payment, principal, and interest", () => {
    cy.contains(".Calculations-monthlyPayment", /^\$178$/);
    cy.contains(".Calculations-amount", /^\$9900$/);
    cy.contains(".Calculations-amount", /^\$773$/);
  });
  it("shows the toggles amortization schedule visibility when button is clicked", () => {
    cy.get(".Schedule-showHide").click();
    cy.get(".Schedule-tableContainer").should("be.visible");
    cy.get(".Schedule-showHide").click();
    cy.get(".Schedule-tableContainer").should("be.hidden");
  });
});
