import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm requesting a photo", () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/teste/photos',
        body: Cypress.env(),
        headers: {
            'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ3YW5kZXJzb25uZWl2YUBnbWFpbC5jb20iLCJpYXQiOjE3MDg4OTAwNTEsImV4cCI6MTcwODk3NjQ1MX0.SZGHoeUe3-5B6rEIVWqQ2aRmLuv_8KTrL65c-ZQcEHc'
          }
    }).as("login")

})

Then("I have a successful photo", () => {
    cy.get('@login').should((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('description')
        expect(res.body[0].description).to.be.equal('Sora')

    })

})