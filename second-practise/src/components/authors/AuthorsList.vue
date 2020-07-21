<template>
    <div>
        <div class="author_header">
            <h3>Authors list</h3>
        </div>
        <Author 
        v-for="(author,index) in authors" 
        :key="index" 
        :author="author"
        :index="index" 
        @removeAuthor="onRemoveAuthor($event)"
        @selectAuthor="onAuthorSelected($event)"></Author>

        <button v-bind:class="'btn_new_author'" @click="isCreateAuthor=true">Add new author</button>

        <CreateAuthor 
        v-if="isCreateAuthor"
        @createNewAuthor = "onAuthorCreated"
        :class="'create_author'"></CreateAuthor>

        <UpdateAuthor
        v-if="isAuthorSelected" 
        :author="selectedAuthor"
        @updateAuthor="onAuthorUpdated">
        </UpdateAuthor>
    </div>
</template>
<script>

    import Author from './Author.vue';
    import CreateAuthor from './CreateAuthor.vue';
    import UpdateAuthor from './UpdateAuthor.vue';

    export default {
        name: 'AuthorsList',
        components: {
            Author,
            CreateAuthor,
            UpdateAuthor
        },
        props: {

        },
        data: function () {
            return {
                authors: [
                    {id: 0, name: 'Leo', surname: "Tolstoy", age: 54 },
                    {id: 1, name: 'John', surname: "Doe", age: 33 },
                    {id: 2, name: 'Oscar', surname: "Wilde", age: 22 },
                    {id: 3, name: 'William', surname: "Blake", age: 65 },
                    {id: 4, name: 'John', surname: "Keats", age: 38 },
                    {id: 5, name: 'Anton', surname: "Chekhov", age: 26 }
                ],
                isCreateAuthor: false,
                selectedAuthor: null,
                isAuthorSelected: false
            }
        },
        methods: {
            onRemoveAuthor(authorId) {
                this.authors.splice(authorId, 1);
            },
            onAuthorCreated(author) {
                author.id = this.authors.length;
                this.authors.push(author);
            },
            onAuthorSelected(author) {
                this.isAuthorSelected = true;   
                this.selectedAuthor = author;
            },
            onAuthorUpdated(updatedAuthor) {
                this.isAuthorSelected = false;
                this.authors.splice(updatedAuthor.id, 1, updatedAuthor);
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
</style>