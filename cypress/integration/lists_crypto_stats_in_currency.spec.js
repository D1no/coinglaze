// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe("Epic: Lists crypto stats in selected currency", () => {
  const DEFAULT_CURRENCY = "EUR";
  const PREFERRED_CURRENCY = "USD";

  /**
   * Note: Its possible to inherit mobile / device configurations to reduce
   * duplication. However, that hurts readability / test self documentation.
   */
  describe("Selecting a base currency", () => {

    beforeEach(() => {
      cy.visit("/");
    });

    describe("On mobile", () => {
      beforeEach(() => {
        cy.viewport("iphone-6");
      });

      it(`Dropdown defaults to ${DEFAULT_CURRENCY}`, () => {

        cy.get("[data-test=\"CurrencyDropdown\"]")
          .should("have.value", DEFAULT_CURRENCY);

      })

      it(`Is possible to select ${PREFERRED_CURRENCY}`, () => {

        cy.get('[data-test="CurrencyDropdown"]')
          .select(PREFERRED_CURRENCY);

      })
    });

    describe("On Desktop", () => {
      beforeEach(() => {
        cy.viewport("macbook-13");
      });

      it(`Sidebar defaults to ${DEFAULT_CURRENCY}`, () => {

        cy.get("[data-test=\"sidebar\"]")
          .should("have.value", DEFAULT_CURRENCY);

      })

      it(`Is possible to select ${PREFERRED_CURRENCY}`, () => {

        cy.get('[data-test="sidebar"]')
          .select(PREFERRED_CURRENCY);

      })
    });
  });
});