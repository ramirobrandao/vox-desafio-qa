/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import CartPage from '../pages/carrinho.js';
import CheckoutPage from '../pages/finalizando-compra.js';

//funcionalidade
describe('Efetuando uma compra', () => {
    const loginPage = new LoginPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    //efetuando login no site, adicionando produto ao carrinho e continuando 
    //para confirmação de dados antes de cada cenário

    beforeEach(() => {
        loginPage.visit()
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //adicionando um produto ao carrinho
        cartPage.clicarProdutoMochila()
        //clicando no botão adicionar produto
        cartPage.adicionarCarrinho()
        //validando númeração no ícone do carrinho
        cartPage.contadorCarrinho().should('be.visible')
        //clicando no carrinho pelo selector
        cartPage.clicarCarrinho()
        //validações dentro da página de carrinho

        //validações textos
        cartPage.validarTextoPaginaCarrinho().should('have.text', "Your Cart")
        cartPage.validarTextoQTY().should('have.text', "QTY")
        cartPage.validarTextoDESCRIPTION().should('have.text', "DESCRIPTION")
        cartPage.validarQtyItensCarrinho().should('have.text', "1")
        cartPage.validarPrecoProduto().should('be.visible')
        cartPage.validarDescricaoProduto().should('be.visible')
        cartPage.validarNomeProduto().should('be.visible')

        cy.url().should('contain', '/cart')

        //validações botões 
        cartPage.validarBtnRemoverProduto().should('have.text', "REMOVE")
        cartPage.validarBtnComprar().should('have.text', "CHECKOUT")
        cartPage.validarBtnHome().should('have.text', "Continue Shopping")

        //finalizando a compra
        cartPage.clicarBtnComprar()

        //validando que estou na página de checkout
        checkoutPage.validarTextoPaginaDados().should('have.text', "Checkout: Your Information")
        checkoutPage.validarNome().should('be.visible')
        checkoutPage.validarSobrenome().should('be.visible')
        checkoutPage.validarCEP().should('be.visible')

        cy.url().should('contain', '/checkout-step-one')
    });

    //cenário de sucesso
    it('Validando o fluxo de compra', () => {

        //preenchendo dados do comprador
        checkoutPage.nomeUsuario()
        checkoutPage.sobrenomeUsuario()
        checkoutPage.cepUsuario()

        checkoutPage.clicarContinua()

        //validando que estou na página de resumo da compra
        checkoutPage.validarTextoPaginaResumo().should('have.text', "Checkout: Overview")
        cartPage.validarTextoQTY().should('have.text', "QTY")
        cartPage.validarTextoDESCRIPTION().should('have.text', "DESCRIPTION")
        checkoutPage.validarQtyItensCarrinho().should('have.text', "1")
        cartPage.validarPrecoProduto().should('be.visible')
        cartPage.validarDescricaoProduto().should('be.visible')
        cartPage.validarNomeProduto().should('be.visible')
        checkoutPage.validarInformacaoPagamento().should('be.visible')
        checkoutPage.validarBtnFinalizar().should('be.visible')

        cy.url().should('contain', '/checkout-step-two')

        checkoutPage.clicarFinalizarCompra()


        //validando confirmação de compra 
        checkoutPage.validarConfirmacaoCompra().should('be.visible')
        checkoutPage.validarTextoCompra().should('have.text', "THANK YOU FOR YOUR ORDER")

        cy.url().should('contain', '/checkout-complete')
    })

    //cenários sem sucesso
    it('Cadastro com campos vazio', () => {

        //clicar no botão sem preencher nenhum campo obrigatário 
        checkoutPage.clicarContinua()

        //validar mensagem de erro de todos os campos vazio
        checkoutPage.validarMsgCamposVazioCadastro().should('have.text', "Error: First Name is required")

        cy.url().should('contain', '/checkout-step-one')

    })

    it('Cadastro com nome vazio', () => {

        //preenchendo dados do comprador
        checkoutPage.sobrenomeUsuario()
        checkoutPage.cepUsuario()
        checkoutPage.clicarContinua()

        //validar mensagem de erro de todos os campos vazio
        checkoutPage.validarMsgCamposVazioCadastro().should('have.text', "Error: First Name is required")

        cy.url().should('contain', '/checkout-step-one')

    })

    it('Cadastro com sobrenome vazio', () => {

        //validando que estou na página de checkout
        checkoutPage.validarTextoPaginaDados().should('have.text', "Checkout: Your Information")
        checkoutPage.validarNome().should('be.visible')
        checkoutPage.validarSobrenome().should('be.visible')
        checkoutPage.validarCEP().should('be.visible')

        //preenchendo dados do comprador
        checkoutPage.nomeUsuario()
        checkoutPage.cepUsuario()
        checkoutPage.clicarContinua()

        //validar mensagem de erro de todos os campos vazio
        checkoutPage.validarMsgCamposVazioCadastro().should('have.text', "Error: Last Name is required")

        cy.url().should('contain', '/checkout-step-one')

    })

    it('Cadastro com cep vazio', () => {

        //validando que estou na página de checkout
        checkoutPage.validarTextoPaginaDados().should('have.text', "Checkout: Your Information")
        checkoutPage.validarNome().should('be.visible')
        checkoutPage.validarSobrenome().should('be.visible')
        checkoutPage.validarCEP().should('be.visible')

        //preenchendo dados do comprador
        checkoutPage.nomeUsuario()
        checkoutPage.sobrenomeUsuario()
        checkoutPage.clicarContinua()

        //validar mensagem de erro com cep vazio
        checkoutPage.validarMsgCamposVazioCadastro().should('have.text', 'Error: Postal Code is required')

        cy.url().should('contain', '/checkout-step-one')

    })

})