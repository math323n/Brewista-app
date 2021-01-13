<template>
  <!-- Step 1 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 1</h3>
    <p class="text-gray text-xl">{{ stepOne }}</p>
  </li>

  <!-- Step 2 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 2</h3>
    <p class="text-gray text-xl">{{ stepTwo }}</p>
  </li>

  <!-- Step 3 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 3</h3>
    <p class="text-gray text-xl">{{ stepThree }}</p>
  </li>

  <!-- Step 4 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 4</h3>
    <p class="text-gray text-xl">{{ stepFour }}</p>
  </li>

  <!-- Step 5 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 5</h3>
    <p class="text-gray text-xl">{{ stepFive }}</p>
  </li>

  <!-- Step 6 -->
  <li class="my-3">
    <h3 class="text-grayer text-xs">STEP 6</h3>
    <p class="text-gray text-xl">{{ stepSix }}</p>
  </li>
</template>

<script>
export default {
  props: {
    stepOne: String,
    stepTwo: String,
    stepThree: String,
    stepFour: String,
    stepFive: String,
    stepSix: String,
  },
};
</script>