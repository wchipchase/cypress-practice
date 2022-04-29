/// <reference types="Cypress" />
 
describe('dropdowns and checkboxes', function() 
{
 
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })

    it('dropdowns and checkboxes',function() {

        //Check boxes
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Dealing with separate windows/browser tabs
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // navigating forward and backwards in browser history
        cy.go('back')
    cy.end()
    })
})

