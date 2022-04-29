describe('It should manipulate mouseovers and hovers' , () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })
    it('It should manipulate mouseovers and hovers', () => {
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true}) 
        cy.url().should('include', 'top')

    })
})