// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, senha) => {

    if (email === undefined) {
        cy.get('[data-test="password"]').type(senha)
        cy.get('#login-button').click()
    }

    else if (senha === undefined) {
        cy.get('[data-test="username"]').type(email)
        cy.get('#login-button').click()
    }

    else {
        cy.get('[data-test="username"]').type(email)
        cy.get('[data-test="password"]').type(senha)
        cy.get('#login-button').click()
    }

});

Cypress.Commands.add('validaLogin', (alert) => {
    switch(alert){
        case 'Epic sadface: Username and password do not match any user in this service':
            cy.get('[data-test="error"]').should('contain.text', alert);
            break;
        
        case 'Epic sadface: Username is required':
            cy.get('[data-test="error"]').should('contain.text', alert);
            break;
        
        case 'Epic sadface: Password is required':
            cy.get('[data-test="error"]').should('contain.text', alert);
            break;
        
        case 'Epic sadface: Sorry, this user has been locked out.':
            cy.get('[data-test="error"]').should('contain.text', alert);
            break;

        default:
            cy.get('.shopping_cart_link').should('be.visible');
    }
})