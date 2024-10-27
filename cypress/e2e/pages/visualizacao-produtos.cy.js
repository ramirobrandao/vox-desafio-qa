/// <reference types="cypress"/>

class ListPage {
    validarListaProdutos(usuarioLogin) {
        return cy.get('.inventory_list')
    }

    validarListaImagens(usuarioLogin) {
        return cy.get('.inventory_item_img')
    }

}

export default ListPage;





