<template>
  <li>
    <!-- Link -->
    <router-link
      :to="{
        path: '/coffees/' + this.coffeeId + '/brews/' + this.id + '/recipe/',
      }"
    >
      <base-brew-item
        :id="id"
        :icon="icon"
        :title="title"
        :beanAmount="beanAmount"
        :waterAmount="waterAmount"
        :profile="profile"
        :time="time"
        :location="location"
        :border="border"
      >
      </base-brew-item>
    </router-link>
    <!-- Link End -->
  </li>
</template>

<script>
import BaseBrewItem from "./BaseBrewItem.vue";

export default {
  components: {
    BaseBrewItem,
  },
  props: {
    id: Number,
    icon: String,
    title: String,
    beanAmount: Number,
    waterAmount: Number,
    profile: String,
    time: String,
    isFavorite: Boolean,
    coffeeId: Number,
    location: String,
    border: Boolean,
  },
};
</script>