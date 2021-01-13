<template>
  <!-- Header -->
  <header class="flex flex-row my-8 ml-3">
    <!-- Link -->
    <router-link to="/">
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
    </router-link>
    <!-- Link End -->
    
    <!-- Text -->
    <h1 class="font-medium ml-4">Pick your Coffee</h1>
    <!-- Text End -->
  </header>
  <!-- Header End -->

  <!-- Coffees -->
  <ul>
    <coffee-list-item
      v-for="coffee in allCoffees"
      :key="coffee.id"
      :id="coffee.id"
      :title="coffee.title"
      :location="coffee.location"
      :description="coffee.description"
      :process="coffee.process"
      :varieties="coffee.varieties"
      :roastProfile="coffee.roastProfile"
      :country="coffee.country"
    ></coffee-list-item>
  </ul>
  <!-- Coffees End -->
</template>

<script>
import CoffeeListItem from "../components/CoffeeListItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Coffees",
  components: {
    CoffeeListItem,
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchCoffees"]),
  },
  computed: mapGetters(["allCoffees"]),
  created() {
    // Fetch coffees
    this.fetchCoffees();
  },
};
</script>