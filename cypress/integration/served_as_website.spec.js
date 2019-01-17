// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe("Epic: App is served as a website", () => {
  const APP_NAME = "Coinglaze";

 describe("Renders as a website", () => {
  it("Is available under a URI", () => {
    cy.visit("/");
  })

  it(`Shows "${APP_NAME}" on website title`, () => {
    cy.visit("/");

    cy.get("[data-test=\"title\"]")
      .should("contain", APP_NAME);
  })
 })
})