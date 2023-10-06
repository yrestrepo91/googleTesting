describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://www.google.com/')
  })
  it('Number of results and time to response are visible', () => {
    cy.get('#APjFqb').type('testing types{enter}')
    cy.wait(5000)
    cy.get('#extabar').within(()=>{
      cy.get('#result-stats').should('be.visible')
    })   
  })

  it('No results message', () => {
    cy.get('#APjFqb').type('12365479687{enter}')
    cy.wait(5000)
    expect
    cy.get('#botstuff').should('contain.text', 'No se han encontrado resultados para tu búsqueda (12365479687).')   
  })
})