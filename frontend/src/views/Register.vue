<template>
  <div class="mt-4">
    <h1>{{ msg }}</h1>
    <div class="container w-25 mt-5">
      <div class="alert alert-danger" v-if="error" role="alert">
        {{ error }}
      </div>
      <div class="alert alert-success" v-if="complete" role="alert">
        {{ complete }}
      </div>
      <div class="card text-center">
        <div class="card-header">
          Inscription
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label >Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
            </div>
            <div class="form-group">
              <label>Mot de passe</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label>Confirmation du mot de passe</label>
              <input type="password" class="form-control" v-model="confirm_password">
            </div>
            <button v-if="!complete" type="submit" class="btn btn-primary" @click="checkForm">Je m'inscris</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Inscrivez-vous pour utiliser l\'application',
      email: null,
      password: null,
      confirm_password: null,
      error: null,
      complete: null
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
      if (this.confirm_password == null || this.confirm_password === '') {
        this.error = 'Le formulaire n\'est pas correctement rempli !'
      }
      if (this.email && this.password && this.confirm_password) {
        if (this.password !== this.confirm_password) {
          this.error = 'Les mots de passes ne correspondent pas.'
        } else {
          this.error = null
          this.register()
        }
      }
    },

    /**
     * Call the API to register the user
     * If The registration is correctly done,
     * Redirect the user to the login page
     */
    register () {
      let ref = this
      this.$http
        .post('user/new', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.complete = 'Inscription réussie, il ne reste plus qu\'à vous connecter. La redirection prendra quelques secondes'
          setTimeout(function () {
            ref.$router.push({name: 'Login'})
          }, 2500)
        })
        .catch(err => console.error(err))
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
</style>
