/// <reference types="Cypress" />
 
describe('dropdowns and checkboxes', function() 
{
 
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })

    it('dropdowns and checkboxes',function() {

    // Popups and Alert window operation. Cypress accepts all alerts and windows. Can alose listen for browser event
    cy.get('#confirmbtn').click()
    cy.get('[value="Confirm"]').click()
    // window.alert
    cy.on('window:alert',(str) => {
        //how to compare 2 strings with mocha
        expect(str).to.equal('Hello Wayne, share this practice page and share your knowledge')
        })
    cy.on('window:confirm',(str) => {
        //how to compare 2 strings with mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})

