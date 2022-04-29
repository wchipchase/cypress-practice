describe('It demonstrates hooks, before and after' , () => {
    
    before(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })
    it('It should wmanipulate frames', () => {
        cy.get('form input.form-control[name="name"]').type('Wayne')
        cy.get('select').select('Female');
    })
})