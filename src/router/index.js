// Import Web History and Vue Router
import { createWebHistory, createRouter } from "vue-router";

// Import home view
import Home from "../views/home.vue";

// Create web history variable
const history = createWebHistory();

// Create routes object
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

// Create a new router object
const router = createRouter({ history, routes });

// Export router
export default router;
