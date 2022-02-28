<template>
    <div class="container">
        <h1>FILM</h1>
        <ul class="gallery">
            <li v-for="(item, index) in infoMovie"
                :key="index" 
                class="card">

                <div class="flip-card">
                    <!-- Inizio flip card inner -->
                    <div class="flip-card-inner">
                        <!-- Inizio front -->
                        <div class="flip-card-front">
                            <img :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path">
                        </div>
                        <!-- Fine front -->
                        <!-- Inizio back -->
                        <div class="flip-card-back">
                            <div class="card-details">
                                <h1>{{item.title}}</h1>
                                <h2>{{item.original_title}}</h2>
                                <lang-flag :iso="item.original_language" />
                                <h4>Voto: {{item.vote_average}}</h4>
                                <p>{{item.overview}}</p>

                                <div class="rating"
                                    v-for="(n, index) in 5"
                                    :key="index">
                                    <font-awesome-icon
                                    :class="n <= Math.round(item.vote_average / 2)?'star-red':''"
                                    :icon="Math.round(item.vote_average / 2) == 0?'fa-solid fa-ban':'fa-solid fa-star'"/>
                                </div>
                            </div>
                        </div>
                        <!-- Fine back -->
                    </div>
                    <!-- Fine flip card inner -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FlixMovies",
    props: {
        infoMovie: Array,
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
    }

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

        // Inizio card
        .card {
            width: calc(100% / 4 - 20px);
            text-align: center;
            margin: 10px;
            background-color: transparent;

                &:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }

                img {
                width: 100%;
                object-fit: contain;
                display: block;
                }

                // Inizio rating
                .rating {
                    display: inline-block;

                    .star-red {color: red;}
                }
                // Fine rating

            // Inizio flip card
            .flip-card {
            background-color: transparent;
            perspective: 1000px;

                // Inizio flip card inner
                .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.8s;
                transform-style: preserve-3d;

                    // Inizio flip card front e back
                    .flip-card-front, .flip-card-back {
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden; /* Safari */
                    backface-visibility: hidden;
                    background-color: black;
                    color: white;
                    }
              
                    .flip-card-back {
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: rotateY(180deg);
                    overflow-y: auto;

                        .card-details * {
                            padding: 5px;
                        }

                    }
                    // Fine flip card front e back

                }
                // Fine flip card inner

            }
            // Fine flip card
        }
        // Fine card
    }
    // Fine ul
}
// Fine container
</style>

