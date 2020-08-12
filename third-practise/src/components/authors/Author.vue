<template>
    <div class="author_view" :class="{author_highlight: isAuthorHighlighted}">
        <div class="author_label" 
        @click="selectAuthor"
        @mouseover="isAuthorHighlighted = true"
        @mouseleave="isAuthorHighlighted = false">
            <label>{{author.name}}</label>
            <label>{{author.surname}}</label>
            <label>{{author.age}}</label>
        </div>
        <button @click="deleteAuthor(index)"> x </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        name: 'Author',
        data: function () {
            return {
                isAuthorHighlighted: false
            }
        },
        props: {
            author: {},
            index: Number
        },
        methods: {
            ...mapMutations('author', ['deleteAuthor']),
            selectAuthor() {
                this.$router.push({name: 'author', params: {authorId: this.author.id}});
            },
            authorHighlight() {
                this.isAuthorHighlighted=true;
            }
        }
    }
</script>

<style>
    .author_view {
         border: solid;
        width: 350px; 
        display: flex;
    }
    .author_label {
        display: flex;
        width: 300px;
        justify-content: space-around;
    }

    .author_highlight {
        background-color: aqua;
    }
</style>