<script setup>
import { cartCount } from '@/stores/cartStore'
</script>

<template>
  <div class="navigationDiv">
    <img src="/logistics.png" alt="MySite Logo" width="40" />
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Products' }">Products</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Connection' }">Connexion</router-link>
        </li>
      </ul>
    </nav>
    <img src="/bag.png" alt="MySite Logo" width="40" />
    <span class="shopping">{{ cartCount }}</span>
  </div>
  <div class="info">Pré-commandez votre produits<a href="/" id="a"> ici</a></div>
</template>

<style scoped>
.shopping {
  position: absolute;
  top: 33px;
  right: 13.8%;
  border: 1px solid black;
  background-color: rgb(255, 254, 254);
  color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
}
.navigationDiv {
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.info {
  background-color: rgba(211, 211, 211, 0.466);
  text-align: center;
  padding: 5px;
  /* box-shadow: 0px 0px 5px 1px rgba(138, 138, 138, 0.822); */
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 25px;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.904);
  font-weight: 500;
}

#a {
  font-weight: bold;
  color: rgba(255, 23, 7, 0.76);
}

.active-link {
  font-weight: bolder;
  color: rgb(0, 0, 0);
  transition: 0.1s;
}
</style>
