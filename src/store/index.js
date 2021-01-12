// Import Vuex
import vuex from "vuex";

// Import module
import todos from "./modules/todos";

// Create store
export default new vuex.Store({
  modules: {
    todos,
  },
});
