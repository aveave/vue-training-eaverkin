const state = {
    books: [
        { id: 0, name: 'War and Peace', author: "Leo Tolstoy", description: 'Description for book War and Peace', tags: '#classics', price: '43$', category: 'Classics' ,avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
        { id: 1, name: 'The Sun Rising', author: "John Donne", description: 'Description for book The Sun Rising', tags: '#fantasy', price: '11$', category: 'Fantasy' ,avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
        { id: 2, name: 'To Some Ladies ', author: "John Keats", description: 'Description for book To Some Ladies', tags: '#literaryfiction', price: '65$', category: 'Literary Fiction' ,avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', },
        { id: 3, name: 'Oliver Twist ', author: "Charles Dickens", description: 'Description for book Oliver Twist', tags: '#literaryfiction', price: '12$', category: 'Literary Fiction' ,avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', },
        { id: 4, name: 'The Runaway', author: "Robert Frost", description: 'Description for book The Runaway', tags: '#fantasy', price: '45$', category: 'Fantasy' ,avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', },
        { id: 5, name: 'Heart of the West ', author: "O. Henry", description: 'Description for book Heart of the West', tags: '#classics', price: '24$', category: 'Classics',  avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',},
    ],
}

const getters = {

    getBookById: state => bookId => {
        return state.books.find(book => book.id === bookId);
    }
}

const mutations = {

    createBook(state, book) {
        book.id = state.books.length;
        book.avatar = 'https://cdn.vuetifyjs.com/images/lists/5.jpg';
        state.books.push(book);
    },

    updateBook(state, book) {
        state.books.splice(book.id, 1, book);
    },

    deleteBook(state, bookId) {
        let indexToRemove = state.books.map(book => book.id).indexOf(bookId); 
        state.books.splice(indexToRemove, 1);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}