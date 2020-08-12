<template>
    <div>
    <v-data-table
        :headers="headers"
        :items="authors"
        :items-per-page="5"
        clas="elevation-1"    
    >
</v-data-table>
<p>123</p>
</div>
</template>

<script>

    export default {
        data() {
            return {
                headers: [
                    { text: 'Name', value: 'name'},
                    { text: 'Surname', value: 'surname'},
                    { text: 'Age', value: 'age'},
                ],
                authors: [
                    {name: 'Kek', surname: 'fdsfdsf', age: 11},
                    {name: 'asdasxa', surname: 'fdsfdsf', age: 123},
                    {name: 'dsfsd', surname: 'ertrete', age: 145431},
                    {name: 'hgfjfj', surname: 'fdslkjlkjfdsf', age: 36},
                ],
            }
        }
    }
</script>

<style>

</style>