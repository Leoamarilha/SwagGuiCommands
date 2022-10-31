/// <reference types="cypress" />

describe('Adicionar itens ao Carrinho', () => {

    beforeEach(() => {

        let email = 'standard_user'
        let senha = 'secret_sauce'

        cy.visit('/');   
        cy.login(email, senha);
    });

    it('Validar adicionar produtos no carrinho', function () {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain.text','1')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge').should('contain.text','2')
    });

    it('Validar adicionar produtos no carrinho e continuar comprando', function () {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="continue-shopping"]').click();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });

    it('Validar adicionar produtos no carrinho retirar o mesmo', function () {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="continue-shopping"]').click();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        cy.get('.shopping_cart_badge').should('not.exist');
    });


})