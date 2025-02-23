<template>
  <div class="container mx-auto">
    <CarList />
  </div>
</template>

<script>
import CarList from "./components/CarList.vue";
export default {
  name: "App",
  components: {
    CarList,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
