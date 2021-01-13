// Import Web History and Vue Router
import { createWebHistory, createRouter } from "vue-router";

// Import home view
import Home from "../views/home.vue";
import Coffees from "../views/coffees.vue";
import Brews from "../views/brews.vue";

// Create web history variable
const history = createWebHistory();

// Create routes object
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coffees",
    name: "Coffees",
    component: Coffees
  },
  {
    path: "/coffees/brews/:id",
    name: "Brews",
    component: Brews
  }
];

// Create a new router object
const router = createRouter({ history, routes });

// Export router
export default router;
