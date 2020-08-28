import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router'

import AuthorsList from '../../../src/views/authors/AuthorsList';
import author from '../../../src/store/modules/author';


const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('AuthorsList.vue', () => {

    let state, store;

    beforeEach(() => {

        state = {
            authors: [
                { id: 0, name: 'Leo', surname: "Tolstoy", age: 54 },
                { id: 1, name: 'John', surname: "Doe", age: 33 },
            ]
        },

            store = new Vuex.Store({
                modules: {
                    author: {
                        namespaced: true,
                        state,
                        getters: author.getters,
                        mutations: author.mutations
                    }
                }
            })
    })

    test('Component mounted without error', () => {
        const header = 'Authors list'
        const wrapper = shallowMount(AuthorsList, {
            store, localVue, propsData: { header }
        })
        expect(wrapper.text()).toMatch(header)
    })
})