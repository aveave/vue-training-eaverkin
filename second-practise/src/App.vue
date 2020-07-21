<template>
  <div id=" app" class="main_app">    
    <router-link to ="/authors">Authors page</router-link>
    <router-link to ="/books">Books page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'App',
    components: {
    },
    data: function () {
      return {
        newCount: 0
      }
    }
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column; 
  }

  .main_app { 
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font: 14pt caption;
  }
</style>