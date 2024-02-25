import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm requesting login", () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/user/login',
        body: Cypress.env(),
        headers: {
            'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ3YW5kZXJzb25uZWl2YUBnbWFpbC5jb20iLCJpYXQiOjE3MDg4OTAwNTEsImV4cCI6MTcwODk3NjQ1MX0.SZGHoeUe3-5B6rEIVWqQ2aRmLuv_8KTrL65c-ZQcEHc'
          }
    }).as("login")

})

Then("I have a successful login", () => {
    cy.get('@login').should((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('id')
        expect(res.body.id).to.be.equal(4)

    })

})