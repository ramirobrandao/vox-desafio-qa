/// <reference types="cypress"/>

import LoginPage from '../pages/login.cy.js';

//funcionalidade
describe('Login', () => {
    const loginPage = new LoginPage();
    //cenário de sucesso
    it('Login com sucesso', () => {
        loginPage.visit('/')
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações de login
        loginPage.validarLogin().should('have.text', "Products")
        loginPage.validarListaProdutos().should('be.visible')
        loginPage.validarURL().should('contain', '/inventory')
    })

    //cenários sem sucesso
    it('Login com usuário inválido', () => {
        loginPage.visit('/')
        loginPage.loginUsuarioInvalido()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações de usuário inválido
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Username and password do not match any user in this service")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login com senha inválida', () => {
        loginPage.visit('/')
        loginPage.loginUsuario()
        loginPage.loginSenhaInvalida()
        loginPage.entrar()
        //validações de senha inválida
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Username and password do not match any user in this service")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login com usuário e senha vazio', () => {
        loginPage.visit('/')
        loginPage.entrar()
        //validações usuário e senha vazio
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Username is required")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login com usuário vazio', () => {
        loginPage.visit('/')
        loginPage.loginSenha()
        loginPage.entrar()
        //validações usuário vazio
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Username is required")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login com senha vazia', () => {
        loginPage.visit('/')
        loginPage.loginUsuario()
        loginPage.entrar()
        //validações senha vazia
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Password is required")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login com usuário bloqueado', () => {
        loginPage.visit('/')
        loginPage.loginUsuarioBloqueado()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações usuário bloqueado
        loginPage.validarMessagensErro().should('have.text', "Epic sadface: Sorry, this user has been locked out.")
        loginPage.validarURL().should('contain', '/v1')
    })

    it('Login usuário com problema', () => {
        loginPage.visit('/')
        loginPage.loginUsuarioProblema()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações usuário com problema
        loginPage.validarImgProdutos().should('be.visible')
        cy.url().should('contain', '/inventory')
    })

    it('Login usuário com falha de desempenho', () => {
        const startTime = Date.now(); //captura o tempo atual
    
        loginPage.visit('/');
        loginPage.loginUsuarioPerformance();
        loginPage.loginSenha();
        loginPage.entrar();
        //validações de usuário com falha de desempenho
        loginPage.validarLoginDelay(startTime).then((duration) => {
            expect(duration).to.be.greaterThan(4); //verifica se o login demorou mais que 4 segundos
        });
    
        cy.url().should('contain', '/inventory');
    });
    
})