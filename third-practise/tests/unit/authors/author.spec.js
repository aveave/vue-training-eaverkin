import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';
import sinon from 'sinon';

import AuthorDetails from '../../../src/views/authors/AuthorDetails';

Vue.use(Vuetify);

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Test Author details form', () => {

    let store
    let getters;
    let mutations

    let authorWrapper;

    beforeEach(() => {

        getters = {
            getAuthorById: () => {return {id: 1, name: 'Leo', surname: "Tolstoy", age: 54 } },
        },

        mutations = {
            createAuthor: () => { }
        }

        store = new Vuex.Store({
            modules: {
                author: {
                    namespaced: true,
                    getters,
                    mutations
                }
            }
        })

        authorWrapper = mount(AuthorDetails) 
          
    })

    test('AuthorDetails component mounts', () => {
        expect(authorWrapper.exists()).toBe(true)
    })

    test('AuthorDetails form is displayed', () => {
        expect(authorWrapper.classes()).toContain('author');
    })

    test('User creates new author', () => {
        const clickHandler = sinon.stub();
        const $route = {
            params: { authorId: 1 }
        };

        const $router = {
            push: (name) => {console.log('move to the route /'+ name)}
        }

        const authorCreateWrapper = mount(AuthorDetails, { store, localVue, propsData: { isAuthorCreated: true, clickHandler }, mocks: { $route, $router} });

        authorCreateWrapper.find('.btn-author').trigger('click');
        expect(clickHandler.called).toBe(true);
    })

    test('AuthorDetails form is filled with author data', () => {

        const $route = {
            params: {
                authorId: 1
            }
        }

         const authorWrapper = mount(AuthorDetails, {
             store, 
             localVue, 
             propsData: { isAuthorUpdated: true }, 
             mocks: {
               $route
             }
           })

        authorWrapper.vm.$route.params.authorId = 0;

        expect(authorWrapper.find('#authorName').element.innerText).toBe(getters.getAuthorById().name);
    })
})