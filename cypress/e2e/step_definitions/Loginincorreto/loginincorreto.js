import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(() => {
    cy.visit("http://localhost:4200/#/home");

Given("I'm on the login page Incorrect", () => {
    
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
    })
})
When("Check required field messages on login page", () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
})

Then("I have not  successful login", () => {
    cy.login('junin', '12345678')
    cy.wait('@stubPost')
})
