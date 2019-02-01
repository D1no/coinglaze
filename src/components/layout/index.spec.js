// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

import React from "react";
import Layout from "./index";
import Theme from "./../../containers/theme";

/**
 * Running Test
 * Note: Its not possible to mount more than once with current
 * styledMount.js implementation!
 */
describe("Layout Component", () => {
  it("Renders with Theme", () => {
    // Global from styledMount.js
    // @ts-ignore
    cy.mount(
      <>
        <Theme>
          <Layout debug={true}>This is the main content area.</Layout>
        </Theme>
      </>
    );
  });

  it("Desktop: Shows Sidebar", () => {
    // @ts-ignore (global from styledMount.js)
    cy.viewport("macbook-13");

    cy.get('[data-test="sectionSidebarControl"]').should("be.visible");
  });

  it("Desktop: Hides Top Control", () => {
    // @ts-ignore (global from styledMount.js)
    cy.viewport("macbook-13");

    cy.get('[data-test="sectionTopControl"]').should("not.be.visible");
  });

  it("Mobile: Shows Top Control", () => {
    // @ts-ignore (global from styledMount.js)
    cy.viewport("iphone-6");

    cy.get('[data-test="sectionTopControl"]').should("be.visible");
  });

  it("Mobile: Hides Sidebar", () => {
    // @ts-ignore (global from styledMount.js)
    cy.viewport("iphone-6");

    cy.get('[data-test="sectionSidebarControl"]').should("not.be.visible");
  });
});
