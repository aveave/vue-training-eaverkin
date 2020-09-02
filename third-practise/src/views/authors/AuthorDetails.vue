<template>
    <v-form ref="form" class="author">

        <v-text-field id ="authorName" v-model="author.name" :counter="10" label="Name" required name="name"></v-text-field>

        <v-text-field v-model="author.surname" label="Surname" required name="surname"></v-text-field>

        <v-text-field v-model="author.age" label="Age" required name="age"></v-text-field>

        <v-btn rounded color="primary" class="btn-author" @click="onAuthorCreate" v-if="isAuthorCreated">Create</v-btn>

        <v-btn rounded color="primary" class="btn-author" @click="onAuthorUpdate" v-if="isAuthorUpdated">Update</v-btn>

    </v-form>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'AuthorDetails',
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
            ...mapMutations('author', { createAuthor: 'createAuthor', updateAuthor: 'updateAuthor' }),

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

<style>
    .author {
        display: flex;
        width: 350px;
        height: 270px;
        flex-direction: column;
        justify-content: space-between;
        border: solid;
        margin: auto;
        text-align: center;
        background-color: white;
        color: #000;
        margin-top: 100px;
    }

    .author-row {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .author-row input {
        border-style: solid;
    }

    .btn-author {
        margin: 1% auto;
    }
</style>