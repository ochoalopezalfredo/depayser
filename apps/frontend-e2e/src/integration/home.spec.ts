context('Window', () => {
    before(() => cy.visit('http://localhost:4200/'));
    it('should display welcome message', () => {
        cy.get('h1').should('be','Bienvenido');
    });
    it('should display background gradient', () => {
        cy.get('.background').should('be.visible');
        cy.get('.gradient').should('be.visible');
    });    
    it('should display genders', () => {
        cy.get('mat-button').should('be',17);
    });  
})