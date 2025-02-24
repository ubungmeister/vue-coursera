<script>
import CarList from "@/components/CarList.vue";
export default {
  name: "Home",
  components: {
    CarList,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <CarList />
  </div>
</template>
 

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
