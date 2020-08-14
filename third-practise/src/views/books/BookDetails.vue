<template>
    <div class="book">
        <h3 class="book-header" v-if="isBookCreated">Create new Book</h3>
        <h3 class="book-header" v-if="isBookUpdated">Book details</h3>

        <v-text-field v-model="book.name" :counter="20" label="Name" required></v-text-field>

        <v-text-field v-model="book.author" label="Author" required></v-text-field>

        <v-text-field v-model="book.description" label="Description" required></v-text-field>

        <v-text-field v-model="book.tags" label="Tags" required></v-text-field>

        <v-text-field v-model="book.price" label="Price" required></v-text-field>

        <v-text-field v-model="book.category" label="Category" required></v-text-field>

        <v-btn rounded color="primary" class="btn-book" @click="onBookCreate" v-if="isBookCreated">Create</v-btn>

        <div class="btn-book-details">
        <v-btn rounded color="primary" class="btn-book btn-book-update" @click="onBookUpdate" v-if="isBookUpdated">Update</v-btn>

        <v-btn rounded color="error" class="btn-book" @click="onBookDelete" v-if="isBookUpdated">Remove</v-btn>
        </div>
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
            ...mapMutations('book', ['deleteBook']),
            onBookCreate() {
                this.createBook(this.book);
                this.$router.push({ name: 'books' });
            },
            onBookUpdate() {
                this.updateBook(this.book);
                this.$router.push({ name: 'books' });
            },
            onBookDelete() {
                this.deleteBook(this.book.id);
                this.$router.push({ name: 'books' });
            }
        }
    }
</script>

<style>
    .book {
        display: flex;
        width: 500px;
        height: 500px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
        margin: auto;
        color: black;
        background-color: white;
        margin-top: 100px;
    }

    .book-row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .book-row input {
        border-style: solid;
    }

    .btn-book-details {
        margin: auto;
    }

    .btn-book {
        width: 100px;
        margin: auto;
        margin-bottom: 10px;
    }

    .btn-book-update {
        margin-right: 20px;
    }
</style>