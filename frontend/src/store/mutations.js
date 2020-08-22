const mutations = {

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  /**
   * Sets a token to identify a user as connected
   * @param {*} state - All state of the app
   * @param {string} payload - Data that will be copied to the state and the local storage
   */
  SET_USER_TOKEN (state, payload) {
    // Store token in locale Storage
    localStorage.setItem('jwt', JSON.stringify(payload))
    state.userToken = payload
  },

  /**
   * Remove the token that identifies a user as connected
   * @param {*} state - All state of the app
   */
  REMOVE_USER_TOKEN: (state) => {
    localStorage.removeItem('jwt')
    state.userToken = null
  },

  /**
   * Sets data in the offers state
   * @param {*} state - All state of the app
   * @param {object[]} data - Data that will be copied to the state
   */
  SET_OFFERS: (state, data) => (state.offers = data)
}

export default mutations
