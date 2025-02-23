<template>
  <div class="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
    <div v-for="car in cars" :key="car.id">
      <SingleCar :car="car" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { evRangeData } from "@/dummyData/carlist.js";
import SingleCar from "./SingleCar.vue";
export default {
  name: "CarList",
  components: {
    SingleCar,
  },
  setup() {
    const cars = ref(evRangeData);
    return { cars };
  },
};
</script>
