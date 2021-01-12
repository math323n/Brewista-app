// Import Vue.
import { createApp } from "vue";

// Import the app.
import App from "./App.vue";

// Import Vuex store.
import store from "./store/index.js";

// Import Vue Router.
import router from "./router/index.js";

// Import stylesheet.
import "./index.css";

// Create the app.
const app = createApp(App);

// Connect the app to the store.
app.use(store);

// Connect the app to the router.
app.use(router);

// Mount the app.
app.mount("#app");
