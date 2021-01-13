const state = {
  latests: [],
};

const getters = {
  allLatestBrews: (state) => state.latests,
};

const actions = {
  // Create bew
  async addLatestBrew({ commit }, newBrew) {
    // Get local storage array
    const oldBrews = JSON.parse(localStorage.getItem("latestBrews")) || [];

    // Set new ID to latest + 1, not optimal but it works.
    newBrew.id = state.latests.length + 1;

    // Push new brew to the array
    oldBrews.push(newBrew);

    // Save the array to local storage
    localStorage.setItem("latestBrews", JSON.stringify(oldBrews));

    // Commit state change
    commit("newLatestBrew", newBrew);
  },
  // Read
  async fetchLatestBrews({ commit }) {
    // Get local storage array
    const brews = JSON.parse(localStorage.getItem("latestBrews")) || [];

    // Commit state change
    commit("setLatestBrews", brews);
  },
  // Update
  async updateLatestBrew({ commit }, updatedBrew) {
    // Local Storage Code Here ...
    // commit("updateLatestBrew", updatedBrew);
  },
  // Delete
  async deleteLatestBrew({ commit }, id) {
    // Get local storage array
    let brews = JSON.parse(localStorage.getItem("latestBrews")) || [];

    // Push new brew to the array
    brews = brews.filter((brew) => brew.id !== id);
    // Save the array to local storage
    localStorage.setItem("latestBrews", JSON.stringify(brews));

    // Local Storage Code Here
    commit("removeLatestBrew", id);
  },
};

const mutations = {
  setLatestBrews: (state, brews) => (state.latests = brews),
  newLatestBrew: (state, brew) => state.latests.unshift(brew),
  removeLatestBrew: (state, id) =>
    (state.latests = state.latests.filter((brew) => brew.id !== id)),
  updateLatestBrew: (state, updatedBrew) => {
    const index = state.latests.findIndex((brew) => brew.id === updatedBrew.id);
    if (index !== -1) {
      state.latests.splice(index, 1, updatedBrew);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
