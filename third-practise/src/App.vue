<template>
  <v-app class="train-app">
    <v-app-bar app color="primary" dark>
      <v-btn target="_blank" text @click="openStartPage">
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>


    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data: () => ({

    }),
    methods: {
      openStartPage() {
        this.$router.push({name: 'start-page'}).catch(() => {});
      }
    }
  };
</script>