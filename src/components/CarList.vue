<script lang="ts">
import { ref, watch } from "vue";
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
    const carsList = validCars(evRangeData) as CarType[];
    const cars = ref<CarType[]>(carsList);
    const search = ref<string>("");

    watch(search, (value: string) => {
      if (value === "") {
        cars.value = carsList;
      } else {
        cars.value = carsList.filter((car) =>
          car.name.toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    return { cars, search };
  },
};
</script>

<template>
  <div>
    <div>
      <h3>Filter</h3>
      <input
        type="text"
        v-model="search"
        placeholder="Search for a car"
        class="border border-gray-300 rounded-lg p-2 w-full"
      />
    </div>
    <div class="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
    <div v-for="car in cars" :key="car.name" @click="() => $router.push(`/car/${car.id}`)">
      <SingleCar :car="car" />
    </div>
  </div>
  </div>
  
</template>