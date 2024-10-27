/// <reference types="cypress"/>

class CartPage {
    clicarProdutoMochila() {
        return cy.get('#item_4_title_link').click()
    }

    clicarProdutoCamiseta() {
        return cy.get('#item_1_title_link').click()
    }

    //ação de adicionar produto ao carrinho
    adicionarCarrinho() {
        return cy.get('.btn_primary').click()
    }

    clicarCarrinho() {
        return cy.get('#shopping_cart_container > a > svg > path').click()
    }

    clicarBtnHome() {
        return cy.get('.cart_footer > .btn_secondary').click()
    }

    clicarBtnVoltar() {
        return cy.get('#inventory_item_container > div > button').click();
    }

    clicarMenu() {
        return cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click()
    }

    clicarBtnAllItems() {
        return cy.get('#inventory_sidebar_link').click()
    }

    //ação de remover produto do carrinho
    removerItemCarrinho() {
        return cy.get('.item_pricebar > .btn_secondary').click()
    }
    
    contadorCarrinho() {
        return cy.get('.fa-layers-counter')
    }
   
    validarTextoPaginaCarrinho() {
        return cy.get('.subheader')
    }

    validarTextoQTY() {
        return cy.get('.cart_quantity_label')
    }

    validarTextoDESCRIPTION() {
        return cy.get('.cart_desc_label')
    }

    validarQtyItensCarrinho() {
        return cy.get('.cart_quantity')
    }

    validarPrecoProduto() {
        return cy.get('.inventory_item_price')
    }

    validarDescricaoProduto() {
        return cy.get('.inventory_item_desc')
    }

    validarNomeProduto() {
        return cy.get('.inventory_item_name')
    }

    validarBtnRemoverProduto() {
        return cy.get('.item_pricebar > .btn_secondary')
    }

    validarBtnHome() {
        return cy.get('.cart_footer > .btn_secondary')
    }

    validarBtnComprar() {
        return cy.get('.btn_action')
    }
}

export default CartPage;

