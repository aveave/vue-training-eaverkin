<template>
    <div class="author">
        <h3 class="author_header" v-if="isAuthorCreated">Create new Author</h3>
        <h3 class="author_header" v-if="isAuthorUpdated">Update Author</h3>
        <div class="author_row">
            <label>Author name</label>
            <input type="text" v-model="author.name">
        </div>

        <div class="author_row">
            <label>Author surname</label>
            <input type="text" v-model="author.surname">
        </div>

        <div class="author_row">
            <label>Author age</label>
            <input type="text" v-model="author.age">
        </div>

        <button :class="'btn_author'" @click="onAuthorCreate" v-if="isAuthorCreated">
            Create</button>

        <button class="btn_author" @click="onAuthorUpdate" v-if="isAuthorUpdated">
            Update</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'NewAuthor',
        computed: {
            ...mapGetters('author', ['getAuthorById']),
            author() {
                if (this.isAuthorUpdated) {
                    return {
                        id: this.getAuthorById(this.$route.params.authorId).id,
                        name: this.getAuthorById(this.$route.params.authorId).name,
                        surname: this.getAuthorById(this.$route.params.authorId).surname,
                        age: this.getAuthorById(this.$route.params.authorId).age
                    }
                } else {
                    return {}
                }
            }
        },
        props: {
            isAuthorCreated: Boolean,
            isAuthorUpdated: Boolean,

        },
        methods: {
            ...mapMutations('author', ['createAuthor']),
            ...mapMutations('author', ['updateAuthor']),

            onAuthorCreate() {
                this.createAuthor(this.author);
                this.$router.push({ name: 'authors' });
            },

            onAuthorUpdate() {
                this.updateAuthor(this.author);
                this.$router.push({ name: 'authors' });
            }
        }
    }
</script>

<style lang="ts">
    .author {
        display: flex;
        width: 350px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
    }

    .author_row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .btn_author {
        width: 100px;
        margin: 10px 120px;
    }
</style>