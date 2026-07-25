describe('UI Test Suite - Example.com', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.title().should('include', 'Example Domain');
    cy.get('h1').should('contain', 'Example Domain');
  });

  it('should have a working link to iana.org', () => {
    cy.get('a').contains('More information').should('have.attr', 'href', 'https://www.iana.org/domains/example');
  });

  it('should display the description text', () => {
    cy.get('p').should('contain', 'This domain is for use in illustrative examples');
  });
});