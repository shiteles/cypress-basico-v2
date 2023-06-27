/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT',() => {
    beforeEach(function(){
        cy.visit("./src/index.html")
    })
    it('verifica o título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        const longText = "Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis."
        cy.get('#firstName').type('Shirlene')
        cy.get('#lastName').type('Teles')
        cy.get('#email').type('shiteles@email.com')
        cy.get('#open-text-area').type(longText,{delay: 0})
        cy.get('.button[type="submit"]').click()

        cy.get('.success > strong').should('be.visible')

    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Vinicius')
        cy.get('#lastName').type('Morato')
        cy.get('#email').type('vini.com')
        cy.get('#open-text-area').type("Ótimo curso!")
        cy.get('.button[type="submit"]').click()

        cy.get('.error > strong').should('be.visible')
    });
    
    it('campo de telefone deve permanecer vazio quando preenchido com valor não númerico', () => {
        cy.get('#phone')
            .type('abchphg')
            .should('have.value', '')
        
        
    });
 })