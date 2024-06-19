<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import route from './route/route'
export default {
  name: 'App',
  components: {
    route
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
