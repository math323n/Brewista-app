// Import Vuex
import vuex from "vuex";

// Import module
import coffees from "./modules/coffees";
import brews from "./modules/brews";

// Create store
export default new vuex.Store({
  modules: {
    coffees,
    brews
  },
});
