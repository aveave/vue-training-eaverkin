<template>
    <div>
        <div class="author_header">
            <h3>Authors list</h3>
        </div>

        <v-data-table
        :headers="headers"
        :items="authors"
        :items-per-page="5"
        class="elevation-1 authors-list"
        >
        <template #item.update="{item}">
            <button @click="selectAuthor(item)">Update</button>
        </template>
        <template #item.busket="{item}">
            <button @click="deleteAuthor(item.id)">x</button>
        </template>
        </v-data-table>

        <button v-bind:class="'btn_new_author'" @click="createNewAuthor">Add new author</button>
    </div>
</template>
<script lang="ts">

import { mapState, mapMutations } from "vuex";

    export default {
        name: 'AuthorsList',
        props: {

        },
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
        },
        methods: {
            ...mapMutations('author', ['deleteAuthor']),
            createNewAuthor() {
                this.$router.push('author');
            },
            selectAuthor(author) {
                console.log(author);
                this.$router.push({name: 'author', params: {authorId: author.id}});
            },
            deleteDelete(id) {
                console.log(id);
                // this.deleteAuthor(id)
                // console.log(id);
            }
        }
    }
</script>
<style>
    .author_header {
        width: 350px;
        text-align: center;
    }

    .btn_new_author {
        margin: 10px 120px;
    }

    .create_author {
        margin-bottom: 20px;
    }

    .authors-list {
        width: 500px;
    }
</style>