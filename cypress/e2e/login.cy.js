/// <reference types="cypress" />

describe('Logar na aplicação e validar as excessões', () => {

  beforeEach(() => {

    cy.visit('/');

  });

  it('Validar logar na aplicação com credenciais válidas', function () {

    let email = 'standard_user'
    let senha = 'secret_sauce'

    cy.login(email, senha);
    cy.validaLogin();

  });

  it('Validar logar na aplicação com credenciais inválidas', function () {

    let email = 'standard'
    let senha = 'secret_sauce'
    let alert = 'Epic sadface: Username and password do not match any user in this service'

    cy.login(email, senha);
    cy.validaLogin(alert)

  });

  it('Validar logar na aplicação sem email', function () {

    let email = undefined
    let senha = 'secret_sauce'
    let alert = 'Epic sadface: Username is required'

    cy.login(email, senha);
    cy.validaLogin(alert)

  });

  it('Validar logar na aplicação sem senha', function () {

    let email = 'standard_user'
    let senha = undefined
    let alert = 'Epic sadface: Password is required'

    cy.login(email, senha);
    cy.validaLogin(alert)

  });

  it('Validar logar na aplicação com usuário bloqueado', function () {

    let email = 'locked_out_user'
    let senha = 'secret_sauce'
    let alert = 'Epic sadface: Sorry, this user has been locked out.'

    cy.login(email, senha);
    cy.validaLogin(alert)

  });

});
