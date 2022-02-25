<template>
  <main>
      <div class="container">
        <div v-for="(item, index) in movie"
                :key="index"
                class="card">
            <h1>{{item.title}}</h1>
            <h2>{{item.original_title}}</h2>
            <h3>{{item.original_language}}</h3>
            <h4>Voto: {{item.vote_average}}</h4>
        </div>
      </div>
  </main>
</template>

<script>
export default {
    name: "FlixMain",
    props: {
        movie: Array
    }
}

</script>

<style scoped lang="scss">
    main {
        background-color: gray;

        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
        }

        .card {
            padding: 10px;
            border: 1px solid black;
            width: calc(100% / 4);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            * {
                padding: 10px 0;
            }
        }
    }
</style>