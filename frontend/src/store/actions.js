//import request from "@/axios.js";
const actions = {
  // /////////////////////
  // Contacts
  // /////////////////////
  getAllContacts: ({ commit }) => {
    request
      .get("users/all/contact")
      .then(response => commit("SET_CONTACTS", response.data));
  },

  // /////////////////////
  // Collaborators
  // /////////////////////
  getAllCollaborators: ({ commit }) => {
    request
      .get("users/all/rankwell")
      .then(response => commit("SET_COLLABORATORS", response.data));
  }
};

export default actions;