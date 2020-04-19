describe('User can see list of jobs', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays most recent position', () => {
      cy.get('#cv-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'French teacher at Franska skolan, Gothenburg');
        cy.get('.description').should('contain', 'Class mentor for students grade 4 and 5.');
        cy.get('.link').should('exist')
      })

      it('displays second most recent position', () => {
        cy.get('#cv-2').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Primary school teacher at Lycee francais of Dubai, UAE');
          cy.get('.description').should('contain', 'Class mentor for students grade 4.');
          cy.get('.link').should('exist')
        })



    });
});