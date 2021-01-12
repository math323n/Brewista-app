<template>
  <!---->
  <div class="flex flex-row justify-between mt-6 mx-6">
    <!-- Text Start --->
    <h3 class="text-grayed">Brewista</h3>
    <!-- Text End --->
    <!-- Icon Start --->
    <svg class="h-8 w-8 text-grayed">
      <use xlink:href="#user" />
    </svg>
    <!-- Icon End --->
  </div>
  <!-- Navigation Start -->
  <the-navigation></the-navigation>
  <!-- Navigation End -->
</template>

<script>
// Import navigation component
import TheNavigation from "../components/TheNavigation.vue";
export default {
  name: "Home",
  components: {
    TheNavigation,
  },
};
</script>