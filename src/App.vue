<template>
  <div class="h-full flex flex-col max-w-xl mx-auto">
    <!-- Router View Start -->
    <router-view></router-view>
    <!-- Router View End-->
  </div>
  <the-icons> </the-icons>
</template>

<script>
import TheIcons from './components/TheIcons.vue';

export default {
  components: {
    TheIcons
  }
}
</script>