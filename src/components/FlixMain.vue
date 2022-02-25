<template>
  <main>
      <div v-for="(item, index) in movie"
            :key="index"
            class="card">
          <h1>{{item.title}}</h1>
          <h2>{{item.original_title}}</h2>
          <h3>{{item.original_language}}</h3>
          <h4>{{item.vote_average}}</h4>
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
        height: 100vh;
        border: 1px solid black;
        background-color: lightgrey;

        .card {
            border: 1px solid black;
            padding: 10px;
        }
    }
</style>