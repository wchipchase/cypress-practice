class HomePage{
    getEditBox() {
        return cy.get('[minlength="2"]')
    }

    getEmailInput() {
        return cy.get('[name="email"]')
    }

    getPasswordInput() {
        return cy.get('#exampleInputPassword1')
    }

    getIceCreamCheck() {
        return cy.get('#exampleCheck1')
    }

    getGender() {
        return cy.get('select')
    }

    getBirthday() {
        return cy.get('#bday')
    }

    getEntrepreneaur() {
        return cy.get('#inlineRadio3')
    }

    getSubmitBtn() {
        return cy.get('[value="Submit"]') 
    }

    getTwoWayDataBinding() {
        cy.get('form-comp h4 > [name="name"]')
    }

    getShopTab() {
        cy.get(':nth-child(2) > .nav-link')
    }
}



export default HomePage