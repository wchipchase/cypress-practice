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

        //navigating within the browser
        // Below opens a link in the current windo instead of in a new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        // This gets current URL
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')

        // below just goes back in the browser history
        cy.go('back')

        //using strings to navigate and search a table.

    })
})

