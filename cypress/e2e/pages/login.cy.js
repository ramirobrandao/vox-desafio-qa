/// <reference types="cypress"/>

class LoginPage {
    visit() {
        cy.visit('/');
    }

    loginUsuario(usuarioLogin) {
        cy.get('[data-test="username"]').type('standard_user')
    }

    loginSenha(usuarioSenha) {
        cy.get('#password').type('secret_sauce')
    }

    loginUsuarioBloqueado(usuarioBloqueado) {
        cy.get('[data-test="username"]').type('locked_out_user')
    }

    loginUsuarioProblema(usuarioProblema) {
        cy.get('[data-test="username"]').type('problem_user')
    }


    loginUsuarioPerformance(usuarioPerfomance) {
        cy.get('[data-test="username"]').type('performance_glitch_user')
    }


    loginUsuarioInvalido(usuarioLoginInvalido) {
        cy.get('[data-test="username"]').type('ramiro')
    }

    loginSenhaInvalida(usuarioSenhaInvalida) {
        cy.get('[data-test="password"]').type('123456')
    }

    entrar() {
        cy.get('#login-button').click()
    }

    validarLogin() {
        return cy.get('.product_label');
    }

    validarListaProdutos() {
        return cy.get('#inventory_container');
    }

    validarImgProdutos() {
        return cy.get('#item_0_img_link > .inventory_item_img')
    }

    validarLoginDelay(startTime) {
        return cy.url().should('include', '/inventory').then(() => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; //convertendo para segundos
            return duration;
        });
    }
    
    validarMessagensErro() {
        return cy.get('[data-test="error"]');
    }

    validarURL() {
        return cy.url();
    }

}

export default LoginPage;

