/// <reference types='cypress'/>

describe('visual testing', () => {
    it('take snapshot of index page', () => {
        cy.visit('/')
        cy.get('.fa-shopping-cart').should('exist')
        cy.get('.fa-shopping-cart').percySnapshot('cart-icon')
        cy.get('.fa-search').then(() => {
            cy.percySnapshot('search-icon')
        })
        cy.percySnapshot('whole page')
    })
})