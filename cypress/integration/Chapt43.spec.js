/// <reference types="Cypress" />


describe('It should data drive tests' , () => {
    
    before(() => {
        // All fixtures should load before code
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it('It should data drive tests', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[minlength="2"]').type(globalThis.data.name)
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
    })
})