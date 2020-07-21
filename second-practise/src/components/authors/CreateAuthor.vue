<template>
    <div class="new_author">
        <h3 class="new_author_header">Create new Author</h3>
        <div class="new_author_row">
            <label>Author name</label>
            <input type="text" v-model="author.name">
        </div>

        <div class="new_author_row">
            <label>Author surname</label>
            <input type="text" v-model="author.surname">
        </div>

        <div class="new_author_row">
            <label>Author age</label>
            <input type="text" v-model="author.age">
        </div>

        <button :class="'btn_create_author'" @click="createNewAuthor">Create</button>
    </div>
</template>

<script>
    export default {
        name: 'NewAuthor',
        data: function () {
            return {
                author: {}
            }
        },
        methods: {
            createNewAuthor() {
                this.$emit('createNewAuthor', this.author);
            }
        }
    }
</script>

<style>
    .new_author {
        display: flex;
        width: 350px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
    }

    .new_author_header {
        margin-left: 100px;
    }

    .new_author_row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .btn_create_author {
        width: 100px;
        margin: 10px 120px;
    }
</style>