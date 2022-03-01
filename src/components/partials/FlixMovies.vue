<template>
    <section>
        <h1 class="main-title">FILM</h1>
        <div class="container">
            <ul class="gallery">
        
            <FlixCard v-for="(product, index) in infoMovie"
                :key="index"
                :product="product"/>
            </ul>
        </div>
    </section>

</template>

<script>
import FlixCard from './FlixCard.vue'

export default {
    name: "FlixMovies",
    props: {
        infoMovie: Array,
        infoGenre: Array,
    },
    components: {
        FlixCard,
    },
    data () {
        return {
            display: null
        }
    },
    methods: {
        showDetails(index) {
            this.display = index
            console.log(this.display);
        },
        showCover() {
            this.display = null
            console.log(this.display);
        }
    },

}
</script>

<style scoped lang="scss">
@import "../../assets/style/common.scss";
// Inizio container
.container {
    max-width: 1200px;
    margin: 0 auto;

    // Inizio ul
    ul.gallery {
        display: flex;
        flex-wrap: wrap;
    }
    // Fine ul
}
// Fine container
</style>

