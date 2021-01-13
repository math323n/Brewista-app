<template>
  <!-- Coffee Item -->
  <li class="border border-gray px-8 pb-7 my-3 mx-4">
    <!-- Link -->
    <router-link :to="{ path: '/coffees/' + this.id + '/brews/' }">
      <!-- Header -->
      <header class="my-9">
        <h1 class="font-bold">{{ title.toUpperCase() }}</h1>
        <p class="text-sm font-thin">{{ location }}</p>
      </header>
      <!-- Header End-->
      <!-- Content -->
      <article>
        <!-- Description -->
        <p class="my-6 text-gray">
          {{ description }}
        </p>
        <!-- Description End -->
        <!-- Details -->
        <section class="flex flex-row pt-5">
          <!-- List -->
          <ul class="flex flex-col mr-12">
            <!-- Process -->
            <li class="mb-4">
              <h2 class="text-grayed">PROCESS</h2>
              <p class="text-base">{{ process }}</p>
            </li>
            <!-- Process End -->
            <!-- Varieties -->
            <li>
              <h2 class="text-grayed">VARIETIES</h2>
              <p>{{ varieties }}</p>
            </li>
            <!-- Varieties End -->
          </ul>
          <!-- List End -->
          <!-- List -->
          <ul class="flex flex-col">
            <!-- Roast Profile -->
            <li class="mb-4">
              <h2 class="text-grayed">ROAST PROFILE</h2>
              <p>{{ roastProfile }}</p>
            </li>
            <!-- Roast Profile End -->
            <!-- Country -->
            <li>
              <h2 class="text-grayed">COUNTRY</h2>
              <p>{{ country }}</p>
            </li>
            <!-- Country End -->
          </ul>
          <!-- List End -->
        </section>
        <!-- Details End -->
      </article>
      <!-- Content End -->
    </router-link>
    <!-- Link End -->
  </li>
  <!-- Coffee Item End -->
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    location: String,
    description: String,
    process: String,
    varieties: String,
    roastProfile: String,
    country: String,
  },
};
</script>