<script setup>
import HeroComponent from './components/HeroComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';

</script>

<template>
  <NavigationComponent/>
  <HeroComponent/>
  <div class="appVue">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
