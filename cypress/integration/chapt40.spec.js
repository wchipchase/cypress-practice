/// <reference types="cypress-iframe" />
/// <reference types="Cypress" />
import 'cypress-iframe'

describe('It should manipulate frames' , () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })
    it('It should wmanipulate frames', () => {
        // selecting a frame npm install -v cypress-iframe
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})