/// <reference types="Cypress" />
import HomePage from './pageObjects/homePage'

describe('It should verify 2-way data bimding' , () => {
    
    before(() => {
        // All fixtures should load before code
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it('It should verify 2-way data bimding', () => {
        const homePage = new HomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(thisGlobal.data.name)
        homePage.getGender().select(thisGlobal.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',thisGlobal.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()
    })
})