// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe("Epic: App is served as a website", () => {
  const APP_NAME = "Coinglaze";

  describe("Renders as a website", () => {
    it("Is available under a URI", () => {
      cy.visit("/");
    });

    it(`Shows "${APP_NAME}" on website title`, () => {
      cy.visit("/");

      cy.get('[data-test="title"]').should("contain", APP_NAME);
    });
  });

  /**
   * Note: This test can be improved by actually checking react mounting behavior via
   * the installed cypress-react-unit-test plugin. This would make data-test attributes
   * obsolet, but mixes unit and bdd tests.
   */
  describe("Is responsive", () => {
    it("Shows a sidebar on Desktop for currency selection", () => {
      cy.viewport("macbook-13");

      cy.get('[data-test="sidebar"]').should("be.visible");

      cy.get('[data-test="urrencyDropdown"]').should("not.be.visible");
    });

    it("Shows a currency dropdown on Mobile for currency selection", () => {
      cy.viewport("iphone-6");

      cy.get('[data-test="sidebar"]').should("not.be.visible");

      cy.get('[data-test="CurrencyDropdown"]').should("be.visible");
    });
  });
});
