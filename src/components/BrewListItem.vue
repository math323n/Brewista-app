<template>
  <li class="flex flex-row border border-gray px-3 py-5 my-3">
    <!-- Icon -->
    <svg class="h-14 w-14 text-black">
      <use xlink:href="#infusion"></use>
    </svg>
    <!-- Icon End -->
    <div>
      <!-- Header -->
      <header>
        <h1 class="font-bold">BEZA</h1>
        <p class="font-extralight text-xs text-grayed">Impact Roasters</p>
      </header>
      <!-- Header End -->
      <!-- Recipe -->
      <ul class="mt-1 flex flex-row">
        <!-- Beans -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#bean"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">40g</p>
        </li>
        <!-- Beans End -->
        <!-- Water -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#water"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">500ml</p>
        </li>
        <!-- Water End -->
        <!-- Grind -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#grind"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">Corse</p>
        </li>
        <!-- Grind End -->
        <!-- Time -->
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#time"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">12 timer</p>
        </li>
        <!-- Time End -->
      </ul>
      <!-- Recipe End -->
    </div>
  </li>
</template>