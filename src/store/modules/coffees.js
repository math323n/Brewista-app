const state = {
  coffees: [],
};

const getters = {
  allCoffees: (state) => state.coffees,
};

const actions = {
  // Create
  async addCoffee({ commit }, coffee) {
    // Local Storage Code here ...
    // commit("newTodo", coffee);
  },
  // Read
  async fetchCoffees({ commit }) {
    const coffees = [
      {
        id: 1,
        title: "Calahute Alto",
        location: "Nordhavn Coffee",
        description:
          "Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminiscent of tart fruit.",
        process: "Washed",
        varieties: "Castilo, Caturra",
        roastProfile: "Medium",
        country: "Guatemala",
      },
      {
        id: 2,
        title: "Beza",
        location: "Impact Roasters",
        description:
          "Strong, rich taste combined with a deep spicy, citrus, and floral aroma.",
        process: "Sun dried",
        varieties: "Castilo, Caturra",
        roastProfile: "Medium",
        country: "Ethiopia",
      },
      {
        id: 3,
        title: "Vista Hermosa",
        location: "Coffee collective",
        description:
          "Clean and balanced coffee with an elegant acidity. Aromas of pecan nuts, nougat, and orange blossom.",
        process: "Washed",
        varieties: "Caturra, Pache",
        roastProfile: "Medium",
        country: "Guatemala",
      },
      {
        id: 4,
        title: "Takesi Geisha",
        location: "Coffee collective",
        description:
          "Super intense and complex aroma. Clean honey-sweet with a delicate acidity. Lychee, jasmine and bergamot.",
        process: "Washed",
        varieties: "Geisha",
        roastProfile: "Medium",
        country: "Bolivia",
      },
    ];

    commit("setCoffee", coffees);
  },
  // Update
  async updateCoffee({ commit }, updatedCoffee) {
    // Local Storage Code Here ...
    // commit("updateTodo", updatedCoffee);
  },
  // Delete
  async deleteCoffee({ commit }, id) {
    // Local Storage Code Here ...
    // commit("removeTodo", id);
  },
};

const mutations = {
  setCoffee: (state, coffees) => (state.coffees = coffees),
  newCoffee: (state, coffee) => state.coffees.unshift(coffee),
  removeCoffee: (state, id) =>
    (state.coffees = state.coffees.filter((coffee) => coffee.id !== id)),
  updateCoffee: (state, updatedCoffee) => {
    const index = state.coffees.findIndex(
      (coffee) => coffee.id === updatedCoffee.id
    );
    if (index !== -1) {
      state.coffees.splice(index, 1, updatedCoffee);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
