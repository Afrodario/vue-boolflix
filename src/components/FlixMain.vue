<template>
  <main>
    <FlixMovies :infoMovie="movie"/>
    <FlixSeries :infoSeries="series"/>
  </main>
</template>

<script>
import FlixMovies from './partials/FlixMovies.vue'
import FlixSeries from './partials/FlixSeries.vue'

export default {
    name: "FlixMain",
    props: {
        movie: Array,
        series: Array
    },
    components: {
        FlixMovies,
        FlixSeries
    },
    data() {
        return {
        }
    },
    methods: {
    },
}

</script>

<style scoped lang="scss">
@import "../assets/style/common.scss";
    main {
        background-color: gray;

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        ul.gallery {
            display: flex;
            flex-wrap: wrap;
        }

        .card {
            padding: 10px;
            border: 1px solid black;
            width: calc(100% / 4);
            text-align: center;

            img {
                width: 100%;
                object-fit: contain;
            }
        }
    }
</style>