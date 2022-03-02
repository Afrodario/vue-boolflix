<template>
  <div id="app">
    <FlixHeader @search="startSearch"
                @selectionEvt="getSelection"
                :genre="allGenres"/>
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

      allGenres: [],

      loopedGenres: [],
      filteredGenres: [],

      selectedGenres: [],
      selectedMovies: [],

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
      //console.log("Il valore in arrivo dall'header: " + searchValue);
      axios.get('https://api.themoviedb.org/3/search/movie', params).then((response) => {
        
          this.movieFound = response.data.results;
        
        //console.log(this.movieFound[0].genre_ids);
      });

      axios.get('https://api.themoviedb.org/3/search/tv', params).then((response) => {
        //console.log(response.data.results);
        this.seriesFound = response.data.results;

      });
    },

    getSelection(selection) {
      this.selectedGenres = selection;
      console.log("Ho ricevuto:" + this.selectedGenres.id)
    },

    loopGenres() {
      this.movieFound.forEach(element => {
          console.log(element.genre_ids);
          if (element.genre_ids.includes(this.selectedGenres.id)) {
            console.log("Il genere ci sta")
            //PUNTO DA RIVEDERE
            this.movieFound.push(element);
            console.log("Ecco i film trovati: " + this.movieFound)
          } else {
            console.log("Il genere non ci sta")
          }
      })
    },

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
        console.log(response.data.genres);

      });
  },

  computed: {
  }
}
</script>

<style lang="scss">
@import "./assets/style/common.scss";

</style>
