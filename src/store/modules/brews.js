const state = {
  brews: [],
};

const getters = {
  allBrews: (state) => state.brews,
};

const actions = {
  // Create
  async addBrew({ commit }, brew) {
    // Local Storage Code Here ...
    // commit("newBrew", brew);
  },
  // Read
  async fetchBrews({ commit }) {
    // Hardcoded, sadly...
    const brews = [
      {
        id: 1,
        icon: "#aeropress",
        title: "AeroPress",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: "1 minut",
        isFavorite: true,
        recipeSteps: {
          one: "Add ground coffee to Inverse Aeropress",
          two: "Start timer",
          three: "Add 50g of 93c water to aeropress for 10s",
          four: "Stir five times",
          five: "Add last 180g of water and stir to mix",
          six: "After 1 min gently press coffee into cup",
        },
      },
      {
        id: 2,
        icon: "#french",
        title: "French Press",
        beanAmount: 33,
        waterAmount: 500,
        profile: "Coarse",
        time: "4 min",
        isFavorite: false,
        recipeSteps: {
          one: "Add ground coffee to French Press",
          two: "Start timer and pour water over coffee",
          three: "Stir with a spoon",
          four:
            "After 4 min, break through the crust of the coffee on the top to let the coffee fall to the bottom",
          five: "Remove big particles and foam still floating on top",
          six: "Let coffee sit for 30 sec. Then gently press down the handle",
        },
      },
      {
        id: 3,
        icon: "#kalita",
        title: "Kalita Wave",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: "5 min",
        isFavorite: false,
        recipeSteps: {
          one: "Add ground coffee to Inverse Aeropress",
          two: "Start timer",
          three: "Add 50g of 93c water to aeropress for 10s",
          four: "Stir five times",
          five: "Add last 180g of water and stir to mix",
          six: "After 1 min gently press coffee into cup",
        },
      },
      {
        id: 4,
        icon: "#infusion",
        title: "Cold Infusion",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Medium",
        time: "2 timer",
        isFavorite: false,
        recipeSteps: {
          one: "Add ground coffee to Inverse Aeropress",
          two: "Start timer",
          three: "Add 50g of 93c water to aeropress for 10s",
          four: "Stir five times",
          five: "Add last 180g of water and stir to mix",
          six: "After 1 min gently press coffee into cup",
        },
      },
      {
        id: 5,
        icon: "#chemex",
        title: "Chemex",
        beanAmount: 16,
        waterAmount: 230,
        profile: "Fine",
        time: "3 minut",
        isFavorite: false,
        recipeSteps: {
          one: "Add ground coffee to French Press",
          two: "Start timer and pour water over coffee",
          three: "Stir with a spoon",
          four:
            "After 4 min, break through the crust of the coffee on the top to let the coffee fall to the bottom",
          five: "Remove big particles and foam still floating on top",
          six: "Let coffee sit for 30 sec. Then gently press down the handle",
        },
      },
    ];

    // Commit state change
    commit("setBrews", brews);
  },
  // Update
  async updateBrew({ commit }, updatedBrew) {
    // Local Storage Code Here ...
    // commit("updateBrew", updatedBrew);
  },
  // Delete
  async deleteBrew({ commit }, brew) {
    // Local Storage Code Here ...
    // commit("removeBrew", brew);
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
