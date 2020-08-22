const mutations = {

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  // Updates user info in state and sessionStorage
  SET_USER_TOKEN (state, payload) {
    // Store token in locale Storage
    localStorage.setItem('jwt', JSON.stringify(payload))
    state.userToken = payload
  },

  REMOVE_USER_TOKEN (state) {
    localStorage.removeItem('jwt')
    state.userToken = null
  },

  // Update the societies state
  SET_SOCIETIES: (state, data) => (state.societies = data)
}

export default mutations
