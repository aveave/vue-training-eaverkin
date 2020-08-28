<template>
    <v-card height="400" width="256" class="mx-auto v-card-panel">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Train Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Third practise
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link @click="makeRoute(item.route)">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>

    export default {
        name: 'StartView',
        data() {
            return {
                startDialog: false,
                items: [
                    { title: 'Authors', icon: 'mdi-view-dashboard', route: 'authors' },
                    { title: 'Books', icon: 'mdi-image', route: 'books' },
                ],
            }
        },
        methods: {
            makeRoute(route) {
                this.$router.push({ name: route });
            }
        }
    }
</script>

<style>
    .v-card-panel {
        margin-top: 100px;
    }
</style>