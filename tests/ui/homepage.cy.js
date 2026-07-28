describe('UI Test Suite - Example.com', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.title().should('include', 'Example Domain');
    cy.get('h1').should('contain', 'Example Domain');
  });

  it('should have a working iana.org example link', () => {
    cy.get('a[href="https://iana.org/domains/example"]').should('contain', 'Learn more');
  });

  it('should display example description text', () => {
    cy.get('p').should('have.length.at.least', 1);
  });
});
