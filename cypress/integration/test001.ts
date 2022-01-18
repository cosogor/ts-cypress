import { times } from "cypress/types/lodash"

it('google test', ()=>{
    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('automation step')
        .type('{enter}')
})

it.only('assertions', function(){
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    // implicit asserts from cypress
    cy.get('#query-btn',{timeout:5000})
        // should contain
        .should('contain','Button')
        .should('contain.text','Button')
        // should have
        .should('have.class','query-btn btn btn-primary')
        .should('have.id','query-btn')
        // should be
        .should('be.visible')
        .should('be.enabled')
        .should('not.be.focused')
        //should equal
        cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')
        // and for chained assertions
        cy.get('#query-btn',{timeout:5000})
        .should('contain','Button')
        .and('contain.text','Button')

        //explicit assertions from chai
        //expect
        expect(true).to.be.true
        let name = 123
        expect(name).to.be.eqls(123)
        //assert from chai
        assert.equal(123,123,'Not stricly equal')
        assert.notEqual(123,1234,'Not stricly equal')
        assert.strictEqual(123,123,'Not stricly equal')
        assert.isAbove(123,12)
        assert.isBelow(12,123)
        assert.isAbove(123,12)
        assert.exists(123,'Target neither null nor defined')
        assert.notExists(null,'Target neither null nor defined')
        assert.isTrue(true)
        assert.isFalse(false)
        assert.isString('123')
        assert.isNotString(123)
        assert.isNumber(123)
        assert.isNotNumber('123')
})