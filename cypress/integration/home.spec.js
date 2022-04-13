// home page tests

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should navigate to the react page', () => {
    cy.get('a[href*="react"]').click()
    cy.url().should('include', '/react')
    cy.get('h1').contains('React Page')
  })

  it('should navigate to the next page', () => {
    cy.get('a[href*="next"]').click()
    cy.url().should('include', '/next')
    cy.get('h1').contains('Next Page')
  })

  it('should navigate to the node page', () => {
    cy.get('a[href*="node"]').click()
    cy.url().should('include', '/node')
    cy.get('h1').contains('Node Page')
  })

  it('should navigate to the cypress page', () => {
    cy.get('a[href*="cypress"]').click()
    cy.url().should('include', '/cypress')
    cy.get('h1').contains('Cypress Page')
  })
})

describe('Styling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should underline TanneraBread on hover', () => {
    cy.get('span[class*="websiteTitle"]')
      .should('have.css', 'text-decoration', 'none*')
      // .trigger('mouseover')
      // .should('have.css', 'text-decoration', 'underline')

  })
})
