<template>
    <div class="update_author">
        <h3 class="update_author_header">Update Author</h3>
        <div class="update_author_row">
            <label>Author name</label>
            <input type="text" v-model="updatedAuthor.name">
        </div>
        <div class="update_author_row">
            <label>Author surname</label>
            <input type="text" v-model="updatedAuthor.surname">
        </div>
        <div class="update_author_row">
            <label>Author age</label>
            <input type="text" v-model="updatedAuthor.age">
        </div>
        <button class="update_btn" @click="updateAuthor">Update</button>
    </div>
</template>

<script>
    export default {
        name: 'UpdateAuthor',
        props: {
            author: Object,
        },
        data() {
            return {
                updatedAuthor: {
                    id: this.author.id,
                    name: this.author.name,
                    surname: this.author.surname,
                    age: this.author.age
                }
            }
        },
        methods: {
            updateAuthor() {
                this.$emit('updateAuthor', this.updatedAuthor);
                this.updatedAuthor = {};
            }
        } 
    }
</script>

<style>
    .update_author {
        width: 350px;
        display: flex;
        flex-direction:column;
        border: solid;
    }
    
    .update_author_header {
        margin-left: 100px;
    }
    
    .update_author_row {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .update_btn {
        width: 100px;
        text-align: center;
        margin: 10px auto;
    }
</style>