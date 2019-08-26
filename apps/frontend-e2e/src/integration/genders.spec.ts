context('Actions', () => {
    before(() => cy.visit('http://localhost:4200/genero/anime'));
    
    it('Navigate to gender anime', () => {
        cy.get('.mat-card-image').should('be', 7)
        cy.server().route("GET", 'https://mfwkweb-api.clarovideo.net//services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43862&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5qq76r3g6sg4jb90l38us52&user_id=22822863&from=0&isCacheable=true&node=gen_anime&domain=https://mfwkweb-api.clarovideo.net/&origin=https://www.clarovideo.com/').as('list');
        cy.wait('@list').its('status').should('eq', 200)
        // cy.scrollTo('bottom')
        // cy.get('h4').should('eq', 'Se han cargado todas las películas de este genero')
    });

    it('Filter Movies', () => {
        cy.get('input').type('wolverine')
        cy.get('.mat-card-image').should('be', 1)
    });

}); 