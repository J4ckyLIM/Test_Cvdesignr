<template>
  <div id="app">
    <MainNavBar />
    <router-view/>
  </div>
</template>

<script>
import MainNavBar from '@/components/navbar/MainNavBar'

export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
