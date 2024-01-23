import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the Register page", () => {
    cy.visit("http://localhost:4200/#/home/signup")
})

When("i type registered my email and fullName and userName and password", () => {
    cy.get('[formcontrolname="email"]').type('wandersonneiva@gmail.com');
    cy.get('[formcontrolname="fullName"]').type('WandersonNeiva');
    cy.get('[formcontrolname="userName"]').type('teste');
    cy.get('[data-test="registerPassword"]').type('teste123');
    cy.get('[data-test="btnRegister"]').click()
})

Then("I  have  successful register", () => { 

    cy.visit("http://localhost:4200/#/home")
    cy.get('[formcontrolname="userName"]').type('teste');
    cy.get('[formcontrolname="password"]').type('teste123');
    cy.get('[data-test="loginBtn"]').click()

})