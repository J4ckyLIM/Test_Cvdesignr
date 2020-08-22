const mutations = {
   
  
    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////
  
    // Updates user info in state and sessionStorage
    UPDATE_USER_INFO(state, payload) {
      // Get Data sessionStorage
      let userInfo =
        JSON.parse(sessionStorage.getItem("userInfo")) || state.activeUser;
  
      for (const property of Object.keys(payload)) {
        if (payload[property] != null) {
          // If some of user property is null - user default property defined in state.activeUser
          state.activeUser = payload[property];
  
          // Update key in sessionStorage
          userInfo[property] = payload[property];
        }
      }
      // Store data in sessionStorage
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
  
    // Update the societies state
    SET_SOCIETIES: (state, data) => (state.societies = data),
  
    // Update the contracts state
    SET_CONTRACTS: (state, data) => (state.contracts = data),
  };
  
  export default mutations;