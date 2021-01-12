<template>
  <div class="app">
    <router-view></router-view>
    <the-navigation></the-navigation>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  }
}
</script>