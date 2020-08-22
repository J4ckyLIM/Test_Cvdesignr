<template>
  <div class="mt-4">
    <h1 class="main-title">{{ msg }}</h1>
    <div class="container w-25 mt-5">
      <div class="alert alert-danger" v-if="error" role="alert">
        {{ error }}
      </div>
      <div class="card text-center bg-style">
        <div class="card-header label">
          Connexion
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="label">Email</label>
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label class="label">Mot de passe</label>
              <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-outline-light" @click="checkForm">Je me connecte</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Bienvenue, veuillez vous connecter pour utiliser l\'application',
      email: null,
      password: null,
      error: null
    }
  },

  methods: {
    /**
     * This method check if the form is complete
     * If not, it sends an error message
     * If the form is complete we call register() to register the user
     */
    checkForm () {
      if (this.email == null || this.email === '') {
        this.error = 'Le formulaire n\'est pas correctement rempli'
      }
      if (this.password == null || this.password === '') {
        this.error = 'Le formulaire n\'est pas correctement rempli'
      }
      if (this.email && this.password) {
        this.login()
      }
    },

    /**
     * Call the API to register the user
     * If The registration is correctly done,
     * Redirect the user to the login page
     */
    login () {
      let ref = this
      this.$http
        .post('user/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          // Set the given token to the store (and local storage)
          ref.$store.dispatch('setUserToken', res.data.data)
          ref.$router.push({name: 'Home'})
        })
        // eslint-disable-next-line handle-callback-err
        .catch(err => {
          this.error = 'Un problème a eu lieu, contactez les développeurs pour en savoir plus'
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bg-style {
  background-image: url('https://www.myfrenchstartup.com/logo/5b8641e534e1fcvdesignr_logo_bg-17.png');
  background-size: cover;
}

.label {
  color: black;
  font-weight: 500;
}

.main-title {
  color: black;
  font-size: 1.5em;
}
</style>
