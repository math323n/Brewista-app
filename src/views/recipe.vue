<template>
  <!-- Header -->
  <header class="flex flex-row my-8 ml-3">
    <!-- Link -->
    <router-link
      :to="{ path: '/coffees/' + this.coffeeId + '/brews/' }"
      class="mr-5"
    >
      <!-- Icon -->
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
      <!-- Icon End -->
    </router-link>
    <!-- Link End -->

    <!-- Selected Brew -->
    <base-brew-item
      :title="selectedBrew.title"
      :beanAmount="selectedBrew.beanAmount"
      :waterAmount="selectedBrew.waterAmount"
      :profile="selectedBrew.profile"
      :time="selectedBrew.time"
      :border="false"
    ></base-brew-item>
    <!-- Selected Bred End -->
  </header>
  <!-- Header End -->

  <!-- Recipe -->
  <article class="flex flex-grow">
    <!-- Steps -->
    <ul class="flex flex-col justify-start ml-5 mt-4 pr-16">
      <recipe-list-item
        :stepOne="selectedBrew.recipeSteps.one"
        :stepTwo="selectedBrew.recipeSteps.two"
        :stepThree="selectedBrew.recipeSteps.three"
        :stepFour="selectedBrew.recipeSteps.four"
        :stepFive="selectedBrew.recipeSteps.five"
        :stepSix="selectedBrew.recipeSteps.six"
      >
      </recipe-list-item>
    </ul>
    <!-- Steps End -->
  </article>
  <!-- Recipe End -->
  
  <!-- Footer -->
  <footer class="flex justify-end mr-6 mb-12">
    <!-- Link -->
    <router-link
      :to="{ path: '/' }"
      @click="saveBrew()"
      class="flex flex-row mx-5 my-10"
    >
      <button class="mr-4 font-bold">FINISH</button>
      <!-- Icon -->
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowForward"></use>
      </svg>
      <!-- Icon End -->
    </router-link>
    <!-- Link End -->
  </footer>
  <!-- Footer End -->
</template>


<script>
import BaseBrewItem from "../components/BaseBrewItem.vue";
import RecipeListItem from "../components/RecipeListItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Recipe",
  components: {
    BaseBrewItem,
    RecipeListItem,
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchBrews", "fetchCoffees", "addLatestBrew"]),
    saveBrew() {
      const newLatestBrew = {
        id: 0,
        icon: this.selectedBrew.icon,
        title: this.selectedBrew.title,
        location: this.selectedCoffee.location,
        beanAmount: this.selectedBrew.beanAmount,
        waterAmount: this.selectedBrew.waterAmount,
        profile: this.selectedBrew.profile,
        time: this.selectedBrew.time,
      };

      this.addLatestBrew(newLatestBrew);
    },
  },
  computed: {
    // Spread map getters
    ...mapGetters(["allBrews", "allCoffees"]),
    // Property for getting the selected brews
    selectedBrew: function () {
      // Return the brew which id matches the route parameter
      return this.allBrews.filter(
        (brew) => brew.id === parseInt(this.$route.params.brewId)
      )[0];
    },
    // Property for getting the selected coffee
    selectedCoffee: function () {
      // Return the coffee which id matches the route parameter
      return this.allCoffees.filter(
        (coffee) => coffee.id === parseInt(this.$route.params.coffeeId)
      )[0];
    },
    // CoffeId route parameter
    coffeeId() {
      return parseInt(this.$route.params.coffeeId);
    },
  },
  created() {
    // Fetch brews
    this.fetchBrews();
    // Fetch coffees
    this.fetchCoffees();
  },
};
</script>