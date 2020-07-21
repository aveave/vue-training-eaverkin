<template>
    <div class="book_view" :class="{book_select: isBookSelected}">
        <div 
        class="book_label" 
        @click="selectBook"
        @mouseover="isBookSelected=true"
        @mouseleave="isBookSelected=false">
            <label>{{book.name}}</label>
            <label>{{book.author}}</label>
            <label>{{book.description}}</label>
            <label>{{book.tags}}</label>
            <label>{{book.price}}</label>
            <label>{{book.category}}</label>
        </div>
        <button @click="removeBook"> x </button>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        data: function () {
            return {
                isBookSelected: false
            }
        },
        props: {
            book: {},
            index: Number
        },
        methods: {
            removeBook() {
                this.$emit('removeBook', this.index);
            },
            selectBook() {
                this.$emit('selectBook', this.book);
            }
        }
    }
</script>

<style>
    .book_view {
         border: solid;
        width: 500px; 
        display: flex;
    }

    .book_label {
        display: flex;
        width: 450px;
        justify-content: space-around;
    }

    .book_select {
        background-color: aqua;
    }
</style>