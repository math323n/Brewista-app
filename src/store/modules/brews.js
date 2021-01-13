// import axios from "axios";

const state = {
  brews: [],
};

const getters = {
  allBrews: (state) => state.brews,
};

const actions = {
  async fetchBrews({ commit }) {
    const brews = [
      {
        id: 1,
        icon: "aeropress",
        title: "AeroPress",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: 1,
        isFavorite: true
      },
      {
        id: 2,
        icon: "french",
        title: "French Press",
        beanAmount: 33,
        waterAmount: 500,
        profile: "Coarse",
        time: 4,
        isFavorite: false
      },
      {
        id: 3,
        icon: "kalita",
        title: "Kalita Wave",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: 5,
        isFavorite: false
      },
      {
        id: 4,
        icon: "infusion",
        title: "Cold Infusion",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: 120,
        isFavorite: false
      },
      {
        id: 5,
        icon: "chemex",
        title: "Chemex",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Fine",
        time: 3,
        isFavorite: false
      },
    ];

    commit("setBrews", brews);
  },
  async addBrew({ commit }, title) {
    // Code here ...
    // commit("newBrew", response.data);
  },
  async deleteBrew({ commit }, id) {
    // Code here ...
    // commit("removeBrew", id);
  },
  async filterBrews({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    // Code here ...
    // commit("setBrews", response.data);
  },
  async updateBrew({ commit }, updatedBrew) {
    // Code here ...
    // commit("updateBrew", response.data);
  },
};

const mutations = {
  setBrews: (state, brews) => (state.brews = brews),
  newBrew: (state, brew) => state.brews.unshift(brew),
  removeBrew: (state, id) =>
    (state.brews = state.brews.filter((brew) => brew.id !== id)),
  updateBrew: (state, updatedBrew) => {
    const index = state.brews.findIndex((brew) => brew.id === updatedBrew.id);
    if (index !== -1) {
      state.brews.splice(index, 1, updatedBrew);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
