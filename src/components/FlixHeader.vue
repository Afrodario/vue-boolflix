<template>
  <header>
    <input type="text"
        v-model="inputSearch">
    <button @click="$emit('search', inputSearch)"
    >Cerca</button>
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
    }
</style>