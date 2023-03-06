export { }

describe('BierGarten', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.punkapi.com/v2/beers', { fixture: 'allbeers.json' })
    cy.visit('http://localhost:3000/')
  })

  it('Should visit the home page and display welcome', () => {
    cy.get('h2').should('contain', 'Welcome to the BierGarten')
  })

  it('Should take the user to a different url and a list of all beers when the beers button in the menu is clicked', () => {
    cy.get('a[href="/allbeers"]').click()
    cy.url().should('include', '/allbeers')
    cy.get('div[class="beers-container"]').should('contain', 'Trashy Blonde')
  })

  it('Should take me to a specific beers info when i clicked its title', () => {
    cy.get('a[href="/allbeers"]').click()
    cy.get('h2').first().click()
    cy.url().should('include', '/beers/1')
  })

  it('Should add the displayed beer to the favorites page when the add to favorites button is clicked', () => {
    cy.get('a[href="/allbeers"]').click()
    cy.get('button').last().click()
    cy.get('a[href="/favorites"]').click()
    cy.get('h2').should('contain', 'Your Favorites')
    cy.get('a[href="/beers/2"]').should('contain', 'Trashy Blonde')
  })

  it('Should allow a user to click on a beer when on the favorites page and see that specific beers info', () => {
    cy.get('a[href="/allbeers"]').click()
    cy.get('button').last().click()
    cy.get('a[href="/favorites"]').click()
    cy.get('a[href="/beers/2"]').click()
    cy.get('p[id="description"]').should('contain', 'A titillating, neurotic, peroxide punk of a Pale Ale.')
    cy.url().should('include', 'beers/2')
  })

  it('Should allow a user to click the home button and return home', () => {
    cy.get('a[href="/favorites"]').click()
    cy.get('a[href="/"]').children().last().click()
    cy.get('h2').first().should('contain', 'Welcome to the BierGarten')
  })

})