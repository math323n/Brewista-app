<template>
  <header class="flex flex-row my-8 ml-3">
    <router-link to="/coffees">
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
    </router-link>
    <h1 class="font-medium ml-4">
      How do you want to brew {{ $route.params.id }}?
    </h1>
  </header>
  <div>
    <section>
      <h2>FAVORITE RECIPE</h2>
      <ul></ul>
    </section>
  </div>
  <p>Brews</p>
</template>