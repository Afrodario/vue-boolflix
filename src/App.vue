<template>
  <div id="app">
    <FlixHeader @search="startSearch"/>
    <FlixMain :movie="movieFound"
              :series="seriesFound"/>
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
  data () {
    return {
      movieFound: [],
      seriesFound: [],
      apiKey: "bd267c9a9d1968e91080897efd9d6526",
      language: "it-IT"
    }
  },

  methods: {
    startSearch(searchValue) {

      const params = {
        params: {
          "api_key": this.apiKey,
          "query": searchValue,
          "language": this.language
        }
      }
      console.log("Il valore in arrivo dall'header: " + searchValue);
      axios.get('https://api.themoviedb.org/3/search/movie', params).then((response) => {
        console.log(response.data.results);
        this.movieFound = response.data.results;

      });
      axios.get('https://api.themoviedb.org/3/search/tv', params).then((response) => {
        console.log(response.data.results);
        this.seriesFound = response.data.results;

      });
    }
  },

  computed: {
    
  }
}
</script>

<style lang="scss">
@import "./assets/style/common.scss";

</style>
