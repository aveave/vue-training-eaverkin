import { shallowMount, createLocalVue } from '@vue/test-utils';
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

    let authorWrapper;

    beforeEach(() => {

        getters = {
            getAuthorById: () => {return {id: 0, name: 'Leo', surname: "Tolstoy", age: 54 } },
        },

        store = new Vuex.Store({
            modules: {
                author: {
                    namespaced: true,
                    getters
                }
            }
        })

        authorWrapper = shallowMount(AuthorDetails) 
          
        authorWrapper = shallowMount(AuthorDetails, 
            {store, 
             localVue, 
             propsData: {
                isAuthorUpdated: true
        }
    }); 
    })

    test('AuthorDetails component mounts', () => {
        expect(authorWrapper.exists()).toBe(true)
    })

    test('AuthorDetails form is displayed', () => {
        console.log(authorWrapper.classes());
        expect(authorWrapper.classes()).toContain('author');
    })

    test('User creates new author', () => {
        const clickHandler = sinon.stub();

        const $route = {
            params: { authorId: 1 }
        };



        const authorCreateWrapper = shallowMount(AuthorDetails, 
                                                { propsData: { 
                                                    isAuthorCreated: true, 
                                                    clickHandler 
                                                    },
                                                    mocks: {
                                                        $route
                                                    }
                                                });
        authorCreateWrapper.find('.btn-author').trigger('click');
        expect(clickHandler.called).toBe(true);
    })

    test('AuthorDetails form is filled with author data', () => {
        const inputName = authorWrapper.find({name: "name"});
        expect(inputName.text()).toBe(getters.getAuthorById().name);
    })
})