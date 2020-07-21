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
        <button @click="removeAuthor"> x </button>
    </div>
</template>

<script>
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
            removeAuthor() {
                this.$emit('removeAuthor', this.index);
            },
            selectAuthor() {
                this.$emit('selectAuthor', this.author);
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