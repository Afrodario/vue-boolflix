<template>
    <section>
        <h1 class="main-title">SERIE TV</h1>
        <div class="container">
            <ul class="gallery">
                <FlixCard v-for="(product, index) in infoSeries"
                    :key="index"
                    :product="product"/>
            </ul>
        </div>
    </section>
</template>

<script>
import FlixCard from './FlixCard.vue'
export default {
    name: "FlixSeries",
    props: {
        infoSeries: Array,
    },
    components: {
        FlixCard
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
    }
    // Fine ul
}
// Fine container
</style>