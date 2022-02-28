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
    }
  },

//TODO: inserire le chiamate axios come metodi computati
  methods: {
    startSearch(searchValue) {
      console.log("Il valore in arrivo dall'header: " + searchValue);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bd267c9a9d1968e91080897efd9d6526&query=${searchValue}&language=it-IT`).then((response) => {
        console.log(response.data.results);
        this.movieFound = response.data.results;

      });
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=bd267c9a9d1968e91080897efd9d6526&query=${searchValue}&language=it-IT`).then((response) => {
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
