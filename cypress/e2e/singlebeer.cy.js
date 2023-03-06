export { }

describe('Single Beer', () => {
    it('Should display a single beer', () => {
        cy.intercept('GET', 'https://api.punkapi.com/v2/beers/1', { fixture: 'singlebeer.json' })
        cy.visit('http://localhost:3000/beers/1')
        cy.get('p[id="description"]').should('contain', 'A light, crisp and bitter IPA brewed with English and American hops.')
    })
})