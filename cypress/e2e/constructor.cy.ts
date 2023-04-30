describe('service is available', function () {
  it('should be available on localhost:3000', function () {
    cy.viewport(1300, 800);
    cy.visit('http://localhost:3000');
  });
});
