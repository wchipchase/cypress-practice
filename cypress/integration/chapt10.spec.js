import {have} from 'chai';

describe('It visits test website', () => {
    it('Navigates to test website', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        // cypress get acts like findElement in selenium
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').as('productLocator')
        //parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4);
        //eq gets the selected element
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
            console.log('Hello');
        });

        //this is to compare the text of .brand to the text on the screen and determine if they match.
        cy.get('.brand').should('have.text', 'GREENKART')


        //this is to print in logs
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }

        }) // Iterate through each 'li'

        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        });

    })
})

