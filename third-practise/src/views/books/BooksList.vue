<template>
    <div>
        <v-card max-width="450" class="mx-auto books-list">
            <v-toolbar color="cyan" dark>

                <v-toolbar-title>Books list</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn small rounded color="primary" class="btn-new-book" @click="createNewBook">Add new book</v-btn>
            </v-toolbar>

            <v-list three-line>

                    <v-list-item v-for="item in books" :key="item.author">
                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.name"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.author"></v-list-item-subtitle>
                            <v-list-item-subtitle v-html="item.category"></v-list-item-subtitle>
                            <v-list-item-subtitle v-html="item.price"></v-list-item-subtitle>

                        </v-list-item-content>

                        <v-icon large color="blue darken-2" @click="showDescription(item)">mdi-message-text</v-icon>

                        <v-icon id="book-edit" @click="selectBook(item)">mdi-pencil</v-icon>
                    </v-list-item>
            </v-list>
        </v-card>

        <v-row justify="center">
            <v-dialog v-model="dialog" width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Book description</span>
                    </v-card-title>
                    <v-card-text>{{description}}</v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'BooksList',
        data: function () {
            return {
                isNewBook: false,
                selectedBook: null,
                isBookSelected: false,
                dialog: false,
                description: '',
            }
        },
        computed: {
            ...mapState('book', ['books']),
            ...mapGetters('book', ['getBookById']),
        },
        methods: {
            ...mapMutations('book', ['deleteBook']),

            createNewBook() {
                this.$router.push({ name: 'newBook' });
            },
            selectBook(book) {
                this.$router.push({ name: 'book', params: { bookId: book.id } });
            },
            showDescription(book) {
                this.description = book.description;
                this.dialog = true;
            }
        }
    }
</script>

<style>
    .books-list {
        margin-top: 100px;
    }

    .book-header {
        text-align: center;
    }

    .btn-new-book {
        width: 120px;
        border-style: solid;
        margin: 1% auto;
    }

    .create-book {
        margin-bottom: 20px
    }

    #book-edit {
        margin-left: 50px;
    }
</style>