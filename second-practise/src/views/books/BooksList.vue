<template>
    <div>
        <div class="book_header">
            <h3>Books list</h3>
        </div>
        
        <Book 
        v-for="(book,index) in books" 
        :key="index" 
        :book="book" 
        :index="index">
        </Book>

        <button 
        v-bind:class="'btn_new_book'" 
        @click="createNewBook">
        Add new book</button>
    </div>
</template>

<script>
import Book from '../../components/books/Book.vue';

import { mapState, mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'BooksList',
        components: {
            Book,
        },
        data: function () {
            return {
                isNewBook: false,
                selectedBook: null,
                isBookSelected: false
            }
        },
        computed: {
            ...mapState('book', ['books']),
            ...mapGetters('book', ['getBookById']) 
        },
        methods: {
            ...mapMutations('book', ['deleteBook']),
            
            createNewBook() {
                this.$router.push({name: 'newBook'});
            }
        }
    }
</script>

<style>
    .book_header {
        width: 350px;
        text-align: center;
    }

    .btn_new_book {
        margin: 10px 120px;
    }

    .create_book {
        margin-bottom: 20px
    }
</style>