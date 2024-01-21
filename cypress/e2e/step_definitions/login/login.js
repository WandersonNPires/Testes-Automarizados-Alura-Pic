import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the login page", () => {
    cy.visit("http://localhost:4200/#/home")
})

When("I type a registered my usarName and password", () => {
    cy.get('[formcontrolname="userName"]').type('teste');
    cy.get('[formcontrolname="password"]').type('teste123');
    cy.get('[data-test="loginBtn"]').click()
})

Then("I have a successful login", () => {
    cy.get('[placeholder="search..."]').click();
})

