import request from '@/../axios.js'
const actions = {

  setUserToken ({ commit }, payload) {
    commit('SET_USER_TOKEN', payload)
  },

  removeUserToken ({commit}) {
    commit('REMOVE_USER_TOKEN')
  },
  // /////////////////////
  // Contacts
  // /////////////////////
  getAllOffers: ({ commit }) => {
    request
      .get('offer/all')
      .then(response => commit('SET_OFFERS', response.data.data))
  }
}

export default actions
