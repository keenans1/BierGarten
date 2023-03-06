export { }

describe('error handling/sad paths', () => {
    it('Should display an error message when an invalid url endpoint is entered', () => {
        cy.visit('http://localhost:3000/abcd')
        cy.get('p[id="errorMessage"]').should('contain', 'url is invalid')
    })

    it.only('Should display an error when a beer id doesnt exist', () => {

    })
})

// beer id doesnt exist