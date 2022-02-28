<template>
    <div class="container">
        <h1>FILM</h1>
        <ul class="gallery">
            <li v-for="(item, index) in infoMovie"
                :key="index"
                @mouseover="showDetails(index)"
                @mouseleave="showCover(index)"
                class="card">
                <img :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path">

                <div
                    class="card-details">
                    <h1>{{item.title}}</h1>
                    <h2>{{item.original_title}}</h2>
                    <lang-flag :iso="item.original_language" />
                    <h4>Voto: {{item.vote_average}}</h4>

                    <div class="rating"
                        v-for="(n, index) in 5"
                        :key="index">
                        <font-awesome-icon
                        :class="n <= Math.round(item.vote_average / 2)?'star-red':''"
                        :icon="Math.round(item.vote_average / 2) == 0?'fa-solid fa-ban':'fa-solid fa-star'"/>
                    </div>

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
            display: true
        }
    },
    methods: {
        showDetails(index) {
            console.log(index);
        },
        showCover(index) {
            console.log(index);
        }
    }

}
</script>

<style scoped lang="scss">
@import "../../assets/style/common.scss";
.container {
            max-width: 1200px;
            margin: 0 auto;
        }

        ul.gallery {
            display: flex;
            flex-wrap: wrap;
        }

        .card {
            border: 1px solid black;
            width: calc(100% / 4);
            text-align: center;

            img {
                width: 100%;
                object-fit: contain;
            }

            .rating {
                display: inline-block;

                .star-red {
                    color: red;
                }
            }
        .card-details {
            padding: 10px;
            }
        }
</style>