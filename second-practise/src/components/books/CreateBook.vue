<template>
    <div class="new_book">
        <h3 class="new_book_header">Create new Book</h3>
        <div class="new_book_row">
            <label>Book name</label>
            <input type="text" v-model="book.name">
        </div>

        <div class="new_book_row">
            <label>Book author</label>
            <input type="text" v-model="book.author">
        </div>

        <div class="new_book_row">
            <label>Description</label>
            <input type="text" v-model="book.description">
        </div>

        <div class="new_book_row">
            <label>Tags</label>
            <input type="text" v-model="book.tags">
        </div>

        <div class="new_book_row">
            <label>Price</label>
            <input type="text" v-model="book.price">
        </div>

        <div class="new_book_row">
            <label>Category</label>
            <input type="text" v-model="book.category">
        </div>

        <button :class="'btn_create_book'" @click="createNewBook">Create</button>
    </div>
</template>

<script>
    export default {
        name: 'NewBook',
        data: function () {
            return {
                book: {}
            }
        },
        methods: {
            createNewBook() {
                this.$emit('createNewBook', this.book);
            }
        }
    }
</script>

<style>
    .new_book {
        display: flex;
        width: 350px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
    }

    .new_book_header {
        margin-left: 100px;
    }

    .new_book_row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .btn_create_book {
        width: 100px;
        margin: 10px 120px;
    }
</style>