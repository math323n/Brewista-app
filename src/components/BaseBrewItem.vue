<template>
  <div :class="computedClass">
    <!-- Icon -->
    <svg v-if="icon !== undefined" class="h-14 w-14 text-black">
      <use :xlink:href="icon"></use>
    </svg>
    <!-- Icon End -->
    <div>
      <!-- Header -->
      <header>
        <h1 class="font-bold">{{ title }}</h1>
        <p
          v-if="location !== undefined"
          class="font-extralight text-xs text-grayed"
        >
          {{ location }}
        </p>
      </header>
      <!-- Header End -->
      <!-- Recipe -->
      <ul class="mt-2 flex flex-row">
        <!-- Beans -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#bean"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{ beanAmount }}g</p>
        </li>
        <!-- Beans End -->
        <!-- Water -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#water"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{ waterAmount }}ml</p>
        </li>
        <!-- Water End -->
        <!-- Grind -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#grind"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{ profile }}</p>
        </li>
        <!-- Grind End -->
        <!-- Time -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#time"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{ time }}</p>
        </li>
        <!-- Time End -->
      </ul>
      <!-- Recipe End -->
    </div>
    <!-- Delete -->
    <span
      v-if="deleteBrew !== null"
      class="flex flex-grow justify-end items-center h-4 mr-3"
    >
      <button @click="deleteBrew(this.id)" class="font-medium text-grayed">X</button>
    </span>
    <!-- Delete End -->
  </div>
</template>
    
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // Spread map action method
    ...mapActions(["deleteLatestBrew"]),
  },
  computed: {
    // Property for the border of the list item
    computedClass() {
      return this.border === true
        ? "flex flex-row border border-gray px-1 py-5 my-3"
        : "";
    },
  },
  props: {
    id: Number,
    icon: String,
    title: String,
    beanAmount: Number,
    waterAmount: Number,
    profile: String,
    time: String,
    location: String,
    border: Boolean,
  },
  inject: {
    // Inject delete method,
    // Set default value for condition checks
    deleteBrew: {
      default: null,
    },
  },
};
</script>
