const state = {
    authors: [
        {id: 0, name: 'Leo', surname: "Tolstoy", age: 54 },
        {id: 1, name: 'John', surname: "Doe", age: 33 },
        {id: 2, name: 'Oscar', surname: "Wilde", age: 22 },
        {id: 3, name: 'William', surname: "Blake", age: 65 },
        {id: 4, name: 'John', surname: "Keats", age: 38 },
        {id: 5, name: 'Anton', surname: "Chekhov", age: 26 },
    ],
}

const getters = {
    getAuthors(state) {
        return state.authors;
    },

    getAuthorById:state => authorId => {
        return state.authors.find(author => author.id === authorId);
    },
}

const mutations = {
    createAuthor(state, author) {
        author.id = state.authors.length;
        state.authors.push(author);
    },
    updateAuthor(state, authorToUpdate) {
        state.authors.splice(authorToUpdate.id, 1, authorToUpdate);
    },
    deleteAuthor(state, authorId) {
        state.authors.splice(authorId, 1);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}