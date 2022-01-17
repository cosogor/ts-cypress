import { times } from "cypress/types/lodash"

it('google test', function(){
    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('automation step')
        .type('{enter}')
})

it.only('assertions', function(){
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn',{timeout:5000})
        .should('contain','Button')
        .should('have.class','query-btn btn btn-primary')
        .should('have.id','query-btn')
        .should('contain.text','Button')
})