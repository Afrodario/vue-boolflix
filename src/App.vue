<template>
  <div id="app">
    <FlixHeader @search="startSearch"/>
    <FlixMain/>
  </div>
</template>

<script>
import FlixHeader from './components/FlixHeader.vue'
import FlixMain from './components/FlixMain.vue'

const axios = require("axios");

export default {
  name: 'App',
  components: {
    FlixHeader,
    FlixMain
  },

  methods: {
    startSearch(searchValue) {
      console.log("Il valore in arrivo dall'header: " + searchValue);
    }
  },

  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=bd267c9a9d1968e91080897efd9d6526&query=buffy&language=it-IT')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
}
</script>

<style lang="scss">
@import "./assets/style/common.scss";

</style>
