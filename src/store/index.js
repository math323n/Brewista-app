// Import Vuex
import vuex from "vuex";

// Import modules
import coffees from "./modules/coffees";
import latestBrews from "./modules/latestBrews";
import brews from "./modules/brews";

// Create vuex store
export default new vuex.Store({
  modules: {
    coffees,
    latestBrews,
    brews,
  },
});
