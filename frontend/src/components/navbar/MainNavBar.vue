<template>
  <!-- Image and text -->
  <nav class="navbar fixed-top navbar-light">
    <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        Designr
    </a>
    <div class="row justify-content-end mr-4">
      <button type="button" class="btn btn-outline-light mr-4" v-if="currentRoute === 'Home'" @click="redirectToPage('Home')">Annonces</button>
      <button type="button" class="btn btn-outline-light mr-4" v-if="currentRoute === 'Login'" @click="redirectToPage('Register')">Inscription</button>
      <button type="button" class="btn btn-outline-light" v-if="currentRoute === 'Register'" @click="redirectToPage('Login')">Connexion</button>
      <button type="button" class="btn btn-outline-light" v-if="currentRoute === 'Home'" @click="disconnect()">Deconnexion</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
  computed: {
    currentRoute: function () {
      return this.$route.name
    }
  },

  methods: {
    /**
     * Redirect the user to the route given
     * @param {string} routeName - Name of the route to redirect to
     */
    redirectToPage (routeName) {
      this.$router.push({name: routeName})
    },

    disconnect () {
      this.$store.dispatch('removeUserToken')
      this.redirectToPage('Login')
    }
  }
}
</script>

<style>

</style>
