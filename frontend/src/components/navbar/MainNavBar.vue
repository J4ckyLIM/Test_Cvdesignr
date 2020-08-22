<template>
  <!-- Image and text -->
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        Bootstrap
    </a>
    <div class="row justify-content-end mr-4">
      <button type="button" class="btn btn-primary mr-4" @click="redirectToPage('Home')">Annonces</button>
      <button type="button" class="btn btn-primary mr-4" @click="redirectToPage('Register')">Inscription</button>
      <button type="button" class="btn btn-primary" @click="redirectToPage('Login')">Connexion</button>
      <button type="button" class="btn btn-primary" @click="redirectToPage('Home')">Deconnexion</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',

  methods: {
    /**
     * Redirect the user to the route given
     * @param {string} routeName - Name of the route to redirect to
     */
    redirectToPage (routeName) {
      this.$router.push({name: routeName})
    }
  }
}
</script>

<style>

</style>
