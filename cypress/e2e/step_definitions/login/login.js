import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the login page", () => {
    cy.visit("http://localhost:4200/#/home")
})

When("I type a registered my usarName and password", () => {
    cy.get('[formcontrolname="userName"]').type(Cypress.env('userName'));
    cy.get('[formcontrolname="password"]').type(Cypress.env('password'));
    cy.get('[data-test="loginBtn"]').click()
})

Then("I have a successful login", () => {
    cy.get('[placeholder="search..."]').click();
})

