/// <reference types="cypress" />

describe('It should get a collection of web elements and then select an individual element based on text' , () => {
    
    before(() => {
        // All fixtures should load before code
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it('It should get a collection of web elements and then select an individual element based on text', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[href="/angularpractice/shop"]').click();
        cy.selectProduct('Blackberry')
        cy.get('.btn-primary').click();
        cy.get('.btn-success').click();
    })
})