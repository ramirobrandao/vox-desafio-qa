/// <reference types="cypress"/>

class CheckoutPage {

    clicarBtnComprar() {
        return cy.get('.btn_action').click
    }

    clicarContinua() {
        return cy.get('.btn_primary cart_button').click
    }

    clicarFinalizarCompra() {
        return cy.get('.btn_action cart_button').click
    }
   
    validarTextoPaginaDados() {
        return cy.get('.subheader')
    }

    validarTextoPaginaResumo() {
        return cy.get('.subheader')
    }

    validarConfirmacaoCompra() {
        return cy.get('.subheader')
    }

    validarTextoCompra() {
        return cy.get('.complete-header')
    }

    validarInformacaoPagamento() {
        return cy.get('.summary_info')
    }

    validarNome() {
        return cy.get('#first-name')
    }

    validarSobrenome() {
        return cy.get('#last-name')
    }

    validarCEP() {
        return cy.get('#postal-code')
    }

    validarMsgCamposVazioCadastro() {
        return cy.get('.error-button')
    }

    validarBtnFinalizar() {
        return cy.get('.btn_action cart_button')
    }

    nomeUsuario(usuarioNome) {
        cy.get('#first-name').type('Ramiro')
    }

    sobrenomeUsuario(usuarioSobrenome) {
        cy.get('#last-name').type('Brandão')
    }

    cepUsuario(cep) {
        cy.get('#postal-code').type('55870-000')
    }

}

export default CheckoutPage;