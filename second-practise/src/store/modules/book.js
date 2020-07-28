const state = {
    books: [
        { id: 0, name: 'War and Peace', author: "Leo Tolstoy", description: 54, tags: 54, price: '43$', category: 54 },
        { id: 1, name: 'The Sun Rising', author: "John Donne", description: 54, tags: 54, price: '11$', category: 54 },
        { id: 2, name: 'To Some Ladies ', author: "John Keats", description: 54, tags: 54, price: '65$', category: 54 },
        { id: 3, name: 'Oliver Twist ', author: "Charles Dickens", description: 54, tags: 54, price: '12$', category: 54 },
        { id: 4, name: 'The Runaway"', author: "Robert Frost", description: 54, tags: 54, price: '45$', category: 54 },
        { id: 5, name: 'Heart of the West ', author: "O. Henry", description: 54, tags: 54, price: '24$', category: 54 },
    ],
}

const getters = {
    // getBookById(state, bookId) {
    //     return state.books.find(book => book.id === bookId);
    // }

    getBookById: state => bookId => {
        return state.books.find(book => book.id === bookId);
    }
}

const mutations = {

    createBook(state, book) {
        book.id = state.books.length;
        state.books.push(book);
    },

    updateBook(state, book) {
        state.books.splice(book.id, 1, book);
    },

    deleteBook(state, bookId) {
        state.books.splice(bookId, 1);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}