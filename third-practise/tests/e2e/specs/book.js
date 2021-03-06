describe('Test whether app starts and book list is displayed', () => {

    it('Book list is displayed', () => {
        cy.visit('/')
          .get('.train-app')
          .contains('Books')
          .click()
            .get('.books-list')
            .find('.v-avatar')
            .its('length')
            .should('gte', 1)  
    })
})

describe('Test functionality: create, update, delete book', () => {

    it('Create new book', () => {
        cy.visit('/')
          .get('.train-app')
          .contains('Books')
          .click()
            .get('.btn-new-book')
            .click()
                .get('input[name="name"]').type('Test name')
                .get('input[name="author"]').type('Test author')
                .get('input[name="description"]').type('Test description')
                .get('input[name="tags"]').type('Test tags')
                .get('input[name="price"]').type('Test price')
                .get('input[name="category"]').type('Test category')
                    .get('.btn-book')
                    .click()
                        .get('.books-list')
                        .children()
                        .should('contain', 'Test name')
                            .and('contain', 'Test author')
                            .and('contain', 'Test category')
                            .and('contain', 'Test price')
    })

    it('Update book', () => {
        cy.visit('/')
          .get('.train-app')
          .contains('Books')
          .click()
            .get('.v-list-item')
            .first()
            .find('#book-edit')
            .click() 
               .get('input[name="name"]').clear().type('Edit name')
               .get('input[name="author"]').clear().type('Edit author')
               .get('input[name="description"]').clear().type('Edit description')
               .get('input[name="tags"]').clear().type('Edit tags')
               .get('input[name="price"]').clear().type('Edit price')
               .get('input[name="category"]').clear().type('Edit category')

                   .get('.btn-book')
                   .first()
                   .click()
                   
                   .get('.books-list')
                   .children()
                   .should('contain', 'Edit name')
                       .and('contain', 'Edit author')
                       .and('contain', 'Edit category')
                       .and('contain', 'Edit price')
    })

    it('Delete book', () => {
        cy.visit('/')
          .get('.train-app')
          .contains('Books')
          .click()
            .get('.v-list-item')
            .its('length')
            .then(length => {
                  cy.get('.v-list-item')
                  .first()
                  .find('#book-edit')
                  .click()
                    .get('.btn-book')
                    .last()
                    .click()
                    
                    .get('.v-list-item').its('length').should('eq', length -1)
            })
    })
})