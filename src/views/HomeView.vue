<script setup>
import HeroComponent from '@/components/HeroComponent.vue';


</script>

<template>
<HeroComponent/>
  <div>
    <p>Welcome to our e-commerce site!</p>
    <p>
      Feel free to <router-link :to="{ name: 'Products' }">explore</router-link> our products and
      make a purchase.
    </p>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
  font-size: 70px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
p {
  margin: 0;
  animation: pulse 0.9s infinite;
}
p:nth-of-type(2) {
  font-size: 30px;
}
a {
  /* text-decoration: none; */
  color: rgba(255, 0, 0, 0.747);
}

/* @keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
} */
</style>
