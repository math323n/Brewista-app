<template>
  <!-- Header -->
  <header class="flex flex-row my-8 ml-5">
    <!-- Link -->
    <router-link to="/coffees">
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
    </router-link>
    <!-- Link End -->
    <!-- Text -->
    <h1 class="font-medium ml-4">How do you want to brew</h1>
    <!-- Text End -->
  </header>
  <!-- Header End -->
  <!-- Brews -->
  <div class="m-5">
    <!-- Favorite Brews -->
    <section class="mb-12">
      <h2 class="text-grayed">FAVORITE RECIPE</h2>
      <ul>
        <brew-list-item
          v-for="brew in favoriteBrews"
          :key="brew.id"
          :id="brew.id"
          :icon="brew.icon"
          :title="brew.title"
          :beanAmount="brew.beanAmount"
          :waterAmount="brew.waterAmount"
          :profile="brew.profile"
          :time="brew.time"
          :isFavorite="brew.isFavorite"
          :coffeeId="coffeeId"
          :border="true"
        ></brew-list-item>
      </ul>
    </section>
    <!-- Favorite Brews End -->
    <!-- Other Brews -->
    <section>
      <h2 class="text-grayed">TRY A NEW RECIPE</h2>
      <ul>
        <brew-list-item
          v-for="brew in brews"
          :key="brew.id"
          :id="brew.id"
          :icon="brew.icon"
          :title="brew.title"
          :beanAmount="brew.beanAmount"
          :waterAmount="brew.waterAmount"
          :profile="brew.profile"
          :time="brew.time"
          :isFavorite="brew.isFavorite"
          :coffeeId="coffeeId"
          :border="true"
        ></brew-list-item>
      </ul>
    </section>
    <!-- Other Brews End -->
  </div>
  <!-- Brews End -->
</template>

<script>
import BrewListItem from "../components/BrewListItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Brews",
  components: {
    BrewListItem,
  },
  data() {
    return {
      coffeeId: parseInt(this.$route.params.coffeeId),
    };
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchBrews"]),
  },
  computed: {
    // Spread map getters
    ...mapGetters(["allBrews"]),
    // Property for getting favorite brews
    favoriteBrews: function () {
      return this.allBrews.filter((brew) => brew.isFavorite === true);
    },
    // Property for getting not favorite brews
    brews: function () {
      return this.allBrews.filter((brew) => brew.isFavorite === false);
    },
  },
  created() {
    // Fetch coffees
    this.fetchBrews();
  },
};
</script>