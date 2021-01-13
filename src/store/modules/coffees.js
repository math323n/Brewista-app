// import axios from "axios";

const state = {
  coffees: [],
};

const getters = {
  allCoffees: (state) => state.coffees,
};

const actions = {
  async fetchCoffees({ commit }) {
    const coffees = [
      {
        id: 1,
        title: "Calahute Alto",
        location: "Nordhavn Coffee",
        description:
          "Very smooth with a full and round body accompanied by notes of dried fruit and ripe banan, rounded by a mild acidity reminicent of tart fuit.",
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
    ];

    commit("setCoffee", coffees);
  },
  async addCoffee({ commit }, title) {
    // Code here ...
    // commit("newTodo", response.data);
  },
  async deleteCoffee({ commit }, id) {
    // Code here ...
    // commit("removeTodo", id);
  },
  async filterCoffees({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    // Code here ...
    // commit("setTodos", response.data);
  },
  async updateCoffee({ commit }, updCoffee) {
    // Code here ...
    // commit("updateTodo", response.data);
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
