import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthorsList from './views/authors/AuthorsList.vue';
import AuthorDetails from './views/authors/AuthorDetails.vue';

import BooksList from './views/books/BooksList.vue';
import BookDetails from './views/books/BookDetails.vue';

import StartView from './views/StartView.vue';

Vue.use(VueRouter);

const routes = [

    // Start view
    {
        path: '',
        name: 'start-page',
        component: StartView
    },

    // Authors
    {
        path: '/authors',
        name: 'authors',
        component: AuthorsList
    },
    {
        path: '/author',
        name: 'newAuthor',
        component: AuthorDetails,
        props: {isAuthorCreated: true}
    },
    {
        path: '/author/:authorId',
        name: 'author',
        component: AuthorDetails,
        props: {isAuthorUpdated: true}
    },

    // Books 
    {
        path: '/books',
        name: 'books',
        component: BooksList
    },
    {
        path: '/book',
        name: 'newBook',
        component: BookDetails,
        props: {isBookCreated: true}
    },
    {
        path: '/book/:bookId',
        name: 'book',
        component: BookDetails,
        props: {isBookUpdated: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
