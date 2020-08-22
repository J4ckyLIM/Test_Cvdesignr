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

 body {
  background-image: url('https://www.myfrenchstartup.com/logo/5b8641e534e1fcvdesignr_logo_bg-17.png');
  background-size: cover;
}
</style>
