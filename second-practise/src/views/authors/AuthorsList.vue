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
        @removeAuthor="onAuthorRemoved($event)"
        @selectAuthor="onAuthorSelected($event)"></Author>

        <button v-bind:class="'btn_new_author'" @click="createNewAuthor">Add new author</button>
    </div>
</template>
<script>
import  Author  from "../../components/authors/Author.vue";

import { mapState, mapMutations } from "vuex";

    export default {
        name: 'AuthorsList',
        components: {
            Author,
        },
        props: {

        },
        data() {
            return {
                isCreateAuthor: false,
                selectedAuthor: null,
                isAuthorSelected: false
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