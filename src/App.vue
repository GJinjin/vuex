<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{$store.state.count}}</p>
    <p>getters: {{$store.getters.score}}</p>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>

  export default {
    name: 'App',
    methods: {
    add() {
      this.$store.commit('add', 2);
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', 2);
    }
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
