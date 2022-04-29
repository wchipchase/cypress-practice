describe('It should work with child tabs' , () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })
    it('It should work with child tabs', () => {
        //gets URL to navigate to. Grab href attribute
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
        })

    })
})