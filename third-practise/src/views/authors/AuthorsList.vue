<template>
    <div class="authors-list">
        <div class="author-header">
            <h3>Authors list</h3>
        </div>

        <v-data-table
        :headers="headers"
        :items="authorsWithIndex"
        :items-per-page="10"
        class="elevation-1"
        >
        <template #item.update="{item}">
            <v-btn class="ma-2" tile outlined color="success" @click="selectAuthor(item)">
                <v-icon left>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <template #item.busket="{item}">
            <v-btn class="mx-2" fab dark small color="primary" @click="deleteAuthor(item.index)">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
        </template>
        </v-data-table>
        <v-btn small rounded color="primary" class="btn-new-author" @click="createNewAuthor">Add new Author</v-btn>
    </div>
</template>
<script>

import { mapState, mapMutations } from "vuex";

    export default {
        name: 'AuthorsList',
        data() {
            return {
                isCreateAuthor: false,
                selectedAuthor: null,
                isAuthorSelected: false,
                headers: [
                    {text: "Name", value: "name"},
                    {text: "Surname", value: "surname"},
                    {text: "Age", value: "age"},
                    {text: "Update Author", value: "update"},
                    {text: "To busket", value: "busket"},
                ]
            }
        },
        computed: {
            ...mapState('author', ['authors']),
            authorsWithIndex() {
                return this.authors.map(
                    (items, index) => ({
                        ...items,
                        index: index
                    })
                )
            }
        },
        methods: {
            ...mapMutations('author', ['deleteAuthor']),
            createNewAuthor() {
                this.$router.push('author');
            },
            selectAuthor(author) {
                this.$router.push({name: 'author', params: {authorId: author.id}});
            },
        }
    }
</script>
<style>

    .author-header {
        color: #000;
    }
    
    .btn-new-author {
        margin: 1%;
    }

    .authors-list {
        margin: auto;
        width: 700px;
        text-align: center;
        border: solid;
        background-color: white;
        margin-top: 100px;
        font: 12pt Arial;
    }
</style>