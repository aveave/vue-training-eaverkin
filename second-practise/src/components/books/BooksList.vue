<template>
    <div>
        <div class="book_header">
            <h3>Books list</h3>
        </div>
        
        <Book 
        v-for="(book,index) in books" 
        :key="index" 
        :book="book" 
        :index="index" 
        @removeBook="onRemoveBook($event)"
        @selectBook="onBookSelected($event)">
        </Book>

        <button 
        v-bind:class="'btn_new_book'" 
        @click="isNewBook=true">
        Add new book</button>

        <CreateBook 
        v-if="isNewBook" 
        @createNewBook="onNewBookCreated" 
        :class="'create_book'"></CreateBook>

        <UpdateBook 
        v-if="isBookSelected" 
        :book="selectedBook" 
        @updateBook="onBookUpdated">
        </UpdateBook>
    </div>
</template>
<script>

    import Book from './Book.vue';
    import CreateBook from './CreateBook.vue';
    import UpdateBook from './UpdateBook.vue';

    export default {
        name: 'BooksList',
        components: {
            Book,
            CreateBook,
            UpdateBook
        },
        props: {

        },
        data: function () {
            return {
                books: [
                    { id: 0, name: 'War and Peace', author: "Leo Tolstoy", description: 54, tags: 54, price: '43$', category: 54 },
                    { id: 1, name: 'The Sun Rising', author: "John Donne", description: 54, tags: 54, price: '11$', category: 54 },
                    { id: 2, name: 'To Some Ladies ', author: "John Keats", description: 54, tags: 54, price: '65$', category: 54 },
                    { id: 3, name: 'Oliver Twist ', author: "Charles Dickens", description: 54, tags: 54, price: '12$', category: 54 },
                    { id: 4, name: 'The Runaway"', author: "Robert Frost", description: 54, tags: 54, price: '45$', category: 54 },
                    { id: 5, name: 'Heart of the West ', author: "O. Henry", description: 54, tags: 54, price: '24$', category: 54 },
                ],
                isNewBook: false,
                selectedBook: null,
                isBookSelected: false
            }
        },
        methods: {
            onRemoveBook(bookId) {
                this.books.splice(bookId, 1);
            },
            onNewBookCreated(book) {
                book.id = this.books.length;
                this.books.push(book);
            },
            onBookSelected(book) {
                this.isBookSelected = true;
                this.selectedBook = book;
            },
            onBookUpdated(updatedBook) {
                this.isBookSelected = false;
                this.books.splice(updatedBook.id, 1, updatedBook);
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