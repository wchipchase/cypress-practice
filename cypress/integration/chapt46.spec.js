/// <reference types="Cypress" />


describe('It should verify 2-way data bimding' , () => {
    
    before(() => {
        // All fixtures should load before code
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it('It should verify 2-way data bimding', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[minlength="2"]').type(globalThis.data.name)
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
        cy.get('form-comp h4 > [name="name"]').should('have.value', globalThis.data.name)
        cy.get('[minlength="2"]').should('have.attr', 'name')
        cy.get('#inlineRadio3').should('be.disabled')
    })
})