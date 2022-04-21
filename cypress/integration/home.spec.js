// home page tests

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should navigate to the projects page', () => {
    cy.get('a[href*="projects"]').click()
    cy.url().should('include', '/projects')
    cy.get('h1').contains('Projects Page')
  })

  it('should navigate to the about page', () => {
    cy.get('a[href*="about"]').click()
    cy.url().should('include', '/about')
    cy.get('h1').contains('About Page')
  })

  it('should navigate to the blog page', () => {
    cy.get('a[href*="blog"]').click()
    cy.url().should('include', '/blog')
    cy.get('h1').contains('Blog Page')
  })
})
