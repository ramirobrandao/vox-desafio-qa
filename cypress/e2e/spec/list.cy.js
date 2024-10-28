/// <reference types="cypress"/>

import LoginPage from '../pages/login.cy.js';
import ListPage from '../pages/visualizacao-produtos.cy.js';

//funcionalidade
describe('Lista de produtos', () => {
    const listPage = new ListPage();
    const loginPage = new LoginPage();

    //acessar o site antes de executar cada cenário
    beforeEach(() => {
        loginPage.visit()
    });

    it('Validar lista de produtos', () => {
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações da lista de produtos
        loginPage.validarLogin().should('have.text', "Products")
        listPage.validarListaProdutos().should('be.visible')
        listPage.validarListaImagens().should('be.visible')
        loginPage.validarURL().should('contain', '/inventory')
    })

})