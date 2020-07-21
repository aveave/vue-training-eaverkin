<template>
    <div class="update_book">

        <h3 class="update_book_header">Update Book</h3>

        <div class="new_book_row">
            <label>Book name</label>
            <input type="text" v-model="updatedBook.name">
        </div>

        <div class="new_book_row">
            <label>Book author</label>
            <input type="text" v-model="updatedBook.author">
        </div>

        <div class="new_book_row">
            <label>Description</label>
            <input type="text" v-model="updatedBook.description">
        </div>

        <div class="new_book_row">
            <label>Tags</label>
            <input type="text" v-model="updatedBook.tags">
        </div>

        <div class="new_book_row">
            <label>Price</label>
            <input type="text" v-model="updatedBook.price">
        </div>

        <div class="new_book_row">
            <label>Category</label>
            <input type="text" v-model="updatedBook.category">
        </div>
        <button class="update_btn" @click="updateBook">Update</button>
    </div>
</template>

<script>
    export default {
        name: 'UpdateBook',
        props: {
            book: Object,
        },
        data() {
            return {
                updatedBook: {
                    id: this.book.id,
                    name: this.book.name,
                    author: this.book.author,
                    description: this.book.description,
                    tags: this.book.tags,
                    price: this.book.price,
                    category: this.book.category
                }
            }
        },
        methods: {
            updateBook() {
                this.$emit('updateBook', this.updatedBook);
                this.updatedBook = {};
            }
        }
    }
</script>

<style>
    .update_book {
        width: 350px;
        display: flex;
        flex-direction: column;
        border: solid;
    }

    .update_book_header {
        margin-left: 100px;
    }

    .update_book_row {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .update_btn {
        width: 100px;
        text-align: center;
        margin: 10px auto;
    }
</style>