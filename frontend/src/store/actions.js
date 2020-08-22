import request from '@/../axios.js'
const actions = {

  setUserToken ({ commit }, payload) {
    commit('SET_USER_TOKEN', payload)
  },
  // /////////////////////
  // Contacts
  // /////////////////////
  getAllContacts: ({ commit }) => {
    request
      .get('users/all/contact')
      .then(response => commit('SET_CONTACTS', response.data))
  }
}

export default actions
