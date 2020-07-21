import Vue from 'vue';
import Router from 'vue-router';

import AuthorsList from './components/authors/AuthorsList.vue';
import BooksList from './components/books/BooksList.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/books',
            name: 'books',
            component: BooksList
        },
        {
            path: '/authors',
            name: 'authors',
            component: AuthorsList
        },
    ],
});