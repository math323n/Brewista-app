// Import Vue
import { createApp } from "vue";

// Import the app
import App from "./App.vue";

// Import Vuex store
import store from "./store/index.js";

// Import Vue Router.
import router from "./router/index.js";

// Import CSS stylesheet for tailwind
import "./index.css";

// Create the vue app
const app = createApp(App);

// Connect the app to the vuex store
app.use(store);

// Connect the app to the router
app.use(router);

// Mount the app.
app.mount("#app");
