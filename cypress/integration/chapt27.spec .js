/// <reference types="Cypress" />
 
describe('dropdowns and checkboxes', function() 
{
 
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })

    it('dropdowns and checkboxes',function() {
        // Checkbox operations
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type = "checkbox"]').check(['option2','option3'])

        // Static dropdown operations
        cy.get('select').select('option2').should('have.value', 'option2')

        // Handling visible and invisible elements
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India")
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        // Handling visible and invisible elements

        cy.get('#name').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio button elements
        cy.get('[value = "radio2"]').check().should('be.checked')


    })
})

