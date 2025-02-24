<template>
  <div class="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
    <div v-for="car in cars" :key="car.id">
      <SingleCar :car="car" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { evRangeData } from "@/dummyData/carlist.js";
import SingleCar from "@/components/SingleCar.vue";
import { CarType } from "@/types/carType";
import {validCars} from "@/utilities/validCars";
export default {
  name: "CarList",
  components: {
    SingleCar,
  },
  setup() {
    const carsList = validCars(evRangeData)
    const cars = ref<CarType[]>(carsList);
    return { cars };
  },
};
</script>
