/// <reference types="cypress"/>

import CartPage from '../pages/carrinho.cy.js';
import LoginPage from '../pages/login.cy.js';

//funcionalidade
describe('Operações com carrinho', () => {
    const loginPage = new LoginPage();
    const cartPage = new CartPage();
    //efetuando login
    it('Adicionando um produto ao carrinho', () => {
        loginPage.visit('/')
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

        //validações botões 
        cartPage.validarBtnRemoverProduto().should('have.text', "REMOVE")
        cartPage.validarBtnComprar().should('have.text', "CHECKOUT")
        cartPage.validarBtnHome().should('have.text', "Continue Shopping")
    
        cy.url().should('contain', '/cart')
    })

    it('Removendo um produto do carrinho', () => {
        loginPage.visit('/')
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

        //removendo produto do carrinho
        cartPage.removerItemCarrinho()

        //validações que não tem nenhum item no carrinho
        cartPage.validarQtyItensCarrinho().should('not.exist')
        cartPage.validarBtnRemoverProduto().should('not.exist')
        cartPage.validarPrecoProduto().should('not.exist')
        cartPage.validarDescricaoProduto().should('not.exist')
        cartPage.validarNomeProduto().should('not.exist')

        cy.url().should('contain', '/cart')
    })

    it('Adicionando mais de um produto ao carrinho', () => {
        loginPage.visit('/')
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //adicionando um produto ao carrinho
        cartPage.clicarProdutoMochila()
        //clicando no botão adicionar produto
        cartPage.adicionarCarrinho()
        //validando númeração no ícone do carrinho
        cartPage.contadorCarrinho().should('be.visible')

        //voltando na página principal dos produtos
        cartPage.clicarMenu()
        cartPage.clicarBtnAllItems()
        //adicionando mais um produto ao carrinho totalizando dois produtos
       
        cartPage.clicarProdutoCamiseta()
        cartPage.adicionarCarrinho()
        //validando númeração no ícone do carrinho
        cartPage.contadorCarrinho().should('be.visible')
        //clicando no carrinho pelo selector
        cartPage.clicarCarrinho()

        //validações dentro da página de carrinho
        
        //validações botões 
       cartPage.validarBtnRemoverProduto().should('be.visible')
       cartPage.validarBtnComprar().should('have.text', "CHECKOUT")
       cartPage.validarBtnHome().should('have.text', "Continue Shopping")
       
       
        //validações textos
        cartPage.validarTextoPaginaCarrinho().should('have.text', "Your Cart")
        cartPage.validarTextoQTY().should('have.text', "QTY")
        cartPage.validarTextoDESCRIPTION().should('have.text', "DESCRIPTION")
        cartPage.validarQtyItensCarrinho().should('be.visible')
        cartPage.validarPrecoProduto().should('be.visible')
        cartPage.validarDescricaoProduto().should('be.visible')
        cartPage.validarNomeProduto().should('be.visible')
        
        cy.url().should('contain', '/cart')
    })

})

