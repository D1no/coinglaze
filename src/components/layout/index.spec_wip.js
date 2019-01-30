// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

import React from "react";
import { mount } from "cypress-react-unit-test";
import { ServerStyleSheet } from "styled-components";
import Layout from "./index";

const sheet = new ServerStyleSheet();

/**
 * Layout Unit/Component Test
 */
describe("Is responsive", () => {
  beforeEach(() => {
    mount(sheet.collectStyles(Layout));
  });

  it("Shows a sidebar control on Desktop", () => {
    cy.viewport("macbook-13");

    cy.get('[data-test="sectionSidebarControl"]').should("be.visible");

    cy.get('[data-test="sectionTopControl"]').should("not.be.visible");
  });

  /*   it("Shows an above content area on Mobile", () => {
    mount(<Layout />)

    cy.viewport("iphone-6");

    cy.get('[data-test="sectionSidebarControl"]').should("not.be.visible");

    cy.get('[data-test="sectionTopControl"]').should("be.visible");
  }); */
});
