
describe('Check whether app starts and authors table is displayed', () => {

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.train-app')
      .should('be.visible')
  });

  it('Author Table is displayed', () => {
    cy.visit('/')
    cy.get('.train-app')
       .contains('Authors')
       .click()
        cy.get('.authors-list')
          .should('be.visible')
  });

  it('Table contains list of authors', () => {
    cy.visit('/')
    cy.get('.train-app')
       .contains('Authors')
       .click()
         cy.get('.authors-list')
         .find('tr')
         .should('have.length.gte', 1)
  });

})

describe('Test functionality (create, update, delete author)', () => {

  it('Create new author and check if this record exists in the table', () => {
   cy.visit('/')
   cy.get('.train-app')
      .contains('Authors')
      .click()
        cy.get('.authors-list')
           .find('.btn-new-author')
           .click()
           .get('input[name="name"]').type('Alexander')
           .get('input[name="surname"]').type('Pushkin')
           .get('input[name="age"]').type('38')
           .get('.author')
           .find('.btn-author')
           .click()
           .get('.authors-list')
           .children()
           .should('contain', 'Name')
              .and('contain', 'Alexander')
              .and('contain', 'Pushkin')  
              .and('contain', '38')    

  })

  it('Update existing author', () => {
    cy.get('.train-app')
    .contains('Authors')
    .click()
      .get('tbody>tr')
      .find('.mdi-pencil')
      .first()
      .click()
      .get('input[name="name"]').clear().type('Test name')
      .get('input[name="surname"]').clear().type('Test surname')
      .get('input[name="age"]').clear().type('Test age')
      .get('.btn-author')
      .click()
      .get('.authors-list')
      .children()
      .should('contain', 'Test surname')
         .and('contain', 'Test surname')
         .and('contain', 'Test age')   
  })

  it('Delete existing author', () => {
    cy.get('.train-app')
    .contains('Authors')
    .click()
      .get('tbody')
      .find('tr')
      .its('length')
      .then(length => {
        cy.get('tbody>tr')
          .first()
          .find('.mx-2')
          .click()
          cy.get('tbody>tr').its('length').should('eq', length - 1)
      }) 
  })
})
