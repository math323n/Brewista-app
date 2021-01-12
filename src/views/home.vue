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
      <brew-list-item></brew-list-item>
      <brew-list-item></brew-list-item>
      <brew-list-item></brew-list-item>
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
import BrewListItem from "../components/BrewListItem.vue";
export default {
  name: "Home",
  components: {
    TheNavigation,
    BrewListItem,
  },
};
</script>