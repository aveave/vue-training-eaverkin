import Vue from 'vue';
import Vuex from 'vuex';

import author from './modules/author';
import book from './modules/book';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        author,
        book
    }
});