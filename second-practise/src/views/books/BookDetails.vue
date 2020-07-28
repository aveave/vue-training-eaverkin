<template>
    <div class="book">
        <h3 class="book_header" v-if="isBookCreated">Create new Book</h3>
        <h3 class="book_header" v-if="isBookUpdated">Update Book</h3>

        <div class="book_row">
            <label>Book name</label>
            <input type="text" v-model="book.name">
        </div>

        <div class="book_row">
            <label>Book author</label>
            <input type="text" v-model="book.author">
        </div>

        <div class="book_row">
            <label>Description</label>
            <input type="text" v-model="book.description">
        </div>

        <div class="book_row">
            <label>Tags</label>
            <input type="text" v-model="book.tags">
        </div>

        <div class="book_row">
            <label>Price</label>
            <input type="text" v-model="book.price">
        </div>

        <div class="book_row">
            <label>Category</label>
            <input type="text" v-model="book.category">
        </div>

        <button 
        :class="'btn_book'" 
        @click="onBookCreate" 
        v-if="isBookCreated">
            Create</button>
            
        <button 
        class="btn_book" 
        @click="onBookUpdate" 
        v-if="isBookUpdated">
            Update</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'UpdateBook',
        props: {
            isBookCreated: Boolean,
            isBookUpdated: Boolean,
        },
        computed: {
            ...mapGetters('book', ['getBookById']),
            book() {
                if (this.isBookUpdated) {
                    return {
                        id: this.getBookById(this.$route.params.bookId).id,
                        name: this.getBookById(this.$route.params.bookId).name,
                        author: this.getBookById(this.$route.params.bookId).author,
                        description: this.getBookById(this.$route.params.bookId).description,
                        tags: this.getBookById(this.$route.params.bookId).tags,
                        price: this.getBookById(this.$route.params.bookId).price,
                        category: this.getBookById(this.$route.params.bookId).category,
                    }
                } else {
                    return {}
                }
            }
        },
        methods: {
            ...mapMutations('book', ['createBook']),
            ...mapMutations('book', ['updateBook']),
            onBookCreate() {
                this.createBook(this.book);
                this.$router.push({ name: 'books' });
            },
            onBookUpdate() {
                this.updateBook(this.book);
                this.$router.push({ name: 'books' });
            }
        }
    }
</script>

<style>
    .book {
        display: flex;
        width: 350px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
    }

    .book_row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .btn_book {
        width: 100px;
        margin: 10px 120px;
    } 
</style>