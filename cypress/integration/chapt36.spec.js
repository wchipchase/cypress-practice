describe('It should navigate to a table and iterate through it to locate specific text' , () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/"')
    })
    it('should navigate to the wabsite and retreive table contents', () => {
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})