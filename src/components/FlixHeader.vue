<template>
  <header>
    <div class="search-panel">
        <input type="text"
            placeholder="Cerca il tuo film preferito"
            v-model="inputSearch">
        <button @click="$emit('search', inputSearch)"
        >Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
    name: "FlixHeader",

    data () {
        return {
            inputSearch: ""
        }
    }
}
    
</script>

<style scoped lang="scss">
    header {
        height: 100px;
        border: 1px solid black;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>