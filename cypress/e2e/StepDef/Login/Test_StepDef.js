import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given('Home page is opened', () => {
cy.visit("https://example.cypress.io");
})