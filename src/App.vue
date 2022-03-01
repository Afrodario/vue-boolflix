<template>
  <div id="app">
    <FlixHeader @search="startSearch"/>
    <FlixMain :movie="movieFound"
              :series="seriesFound"
              :genre="allGenres"/>
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
      allGenres: [],
      genresFound: "",
      apiKey: "bd267c9a9d1968e91080897efd9d6526",
      language: "it-IT"
    }
  },

  methods: {
    // Funzione di ricerca
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

        this.filterGenre();

      });
      axios.get('https://api.themoviedb.org/3/search/tv', params).then((response) => {
        console.log(response.data.results);
        this.seriesFound = response.data.results;

      });
    },
    // Funzione di
  },

  created() {
      const paramsGenre = {
        params: {
          "api_key": this.apiKey,
          "language": this.language
        }
      }
      axios.get('https://api.themoviedb.org/3/genre/movie/list', paramsGenre).then((response) => {
        this.allGenres = response.data.genres;
        console.log(this.allGenres);

      });
  },

  computed: {
    filterGenre() {
      return this.movieFound.forEach(element => {
        console.log("I generi trovati sono" + element.genre_ids);
        this.genresFound = element.genre_ids;
        console.log(this.genresFound);
      })
      // return this.movieFound.filter(item =>{
      //   return item.
      // })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/common.scss";

</style>
