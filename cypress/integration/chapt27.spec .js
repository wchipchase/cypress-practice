/// <reference types="Cypress" />
 
describe('dropdowns and checkboxes', function() 
{
 
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })

    it('dropdowns and checkboxes',function() {
        
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    
     })
})

