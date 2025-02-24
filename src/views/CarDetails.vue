
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import {evRangeData} from "@/dummyData/carlist";
import SingleCar from '@/components/SingleCar.vue';
import { CarType } from "@/types/carType";
const route = useRoute();
const carId = route.params.id 
const car = evRangeData.find((car) => car.id === Number(carId)) as CarType; 


</script>
<template>
    <div>
        <SingleCar :car="car" />
    </div>
</template>