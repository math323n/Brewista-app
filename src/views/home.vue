<template>
  <!-- Header -->
  <div class="flex flex-row justify-between mt-6 mx-6">
    <!-- Text Start --->
    <h3 class="font-medium text-gray">Brewista</h3>
    <!-- Text End --->
    <!-- Icon Start --->
    <svg class="h-8 w-8 text-grayed">
      <use xlink:href="#user" />
    </svg>
    <!-- Icon End --->
  </div>
  <!-- Header End -->
  <!-- Content -->
  <div class="flex-grow">
    <h3 class="text-grayed mx-6 mt-8">LATEST BREWS</h3>
    <!-- Brew List -->
    <ul class="mx-6">
      <base-brew-item
        v-for="latest in allLatestBrews"
        :key="latest.id"
        :id="latest.id"
        :icon="latest.icon"
        :title="latest.title"
        :location="latest.location"
        :beanAmount="latest.beanAmount"
        :waterAmount="latest.waterAmount"
        :profile="latest.profile"
        :time="latest.time"
        :border="true"
      >
      </base-brew-item>
    </ul>
    <!-- Brew List End -->
  </div>
  <!-- Content End -->
  <!-- Navigation Start -->
  <the-navigation></the-navigation>
  <!-- Navigation End -->
</template>

<script>
// Import navigation component
import TheNavigation from "../components/TheNavigation.vue";
import { mapGetters, mapActions } from "vuex";
import BaseBrewItem from "../components/BaseBrewItem.vue";

export default {
  name: "Home",
  components: {
    TheNavigation,
    BaseBrewItem,
  },
  provide: {
    // Provide delete method for the base brew item
    deleteBrew: function (id) {
      // This is fucking magic
      // Its not even defined in here
      this.deleteLatestBrew(id);
    },
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchLatestBrews"]),
  },
  computed: {
    // Spread map getters
    ...mapGetters(["allLatestBrews"]),
  },
  created() {
    // Fetch coffees
    this.fetchLatestBrews();
  },
};
</script>
