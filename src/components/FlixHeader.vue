<template>
  <header>
    <h1 id="site-name">BOOLFLIX</h1>
    <form class="search-panel">
        <input type="text"
            placeholder="Cerca il tuo film o la tua serie TV preferita"
            v-model="inputSearch">
        <button type="submit" @click.prevent="$emit('search', inputSearch)">
            Cerca
        </button>
    </form>
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
@import "../assets/style/common.scss";
    header {
        height: 100px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

        input {
            width: 400px;
        }

        input, button {
            padding: 10px;
            font-size: 20px;
            text-align: center;
        }
    }
</style>