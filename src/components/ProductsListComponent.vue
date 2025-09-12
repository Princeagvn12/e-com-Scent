<script setup>
import { computed, defineProps, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const emit = defineEmits(['filterCategory'])
const props = defineProps({
  products: Array,
  NewCat: String,
})

const router = useRouter()
function goToDetails(id) {
  router.push({ name: 'product-details', params: { id } })
}
</script>

<template>
  <div class="products-list">
    <h2>Products View</h2>
    <ul v-if="products && products.length" class="products-view">
      <li v-for="product in products" :key="product.id" class="list-item">
        <img :src="product.thumbnail" :alt="product.title" width="100" />
        <h5 class="title">
          {{ product.title }} <br />
          <span v-if="product.title.includes('Dior') || product.title.includes('Red')" class="new"
            >New</span
          >
        </h5>
      </li>
    </ul>
    <div v-else>No products available.</div>

    <h2>Explore the lineups</h2>
    <div class="cards">
      <ul class="products-list-list">
        <li v-for="product in products" :key="product.id" class="product-card">
          <div
            v-if="
              product.title.includes('Essence') ||
              product.title.includes('with') ||
              product.title.includes('Powder')
            "
            class="promo"
          >
            Promo
          </div>
          <img :src="product.images[0]" :alt="product.title" width="150" />
          <h5 class="title">
            {{ product.title }} <br />
            <span v-if="product.title.includes('Dior') || product.title.includes('Red')" class="new"
              >New</span
            >
          </h5>
          <div class="description" @click="goToDetails(product.id)">Voir plus</div>
          <div class="price">
            <strong>Price: ${{ product.price }}</strong>
          </div>
          <div class="rating">
            <span v-for="value in Math.floor(product.rating || 0)">★</span>Rating:
            {{ product.rating }}
          </div>
          <div class="buttonClass">
              <button class="add" >Add to Cart</button>
              <button
                v-if="product.title.includes('Dior') || product.title.includes('Red')"
                class="preorder"
              >
                Pre-order
              </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.buttonClass {
  display: flex;
  justify-content: center;
    align-items: center;
  gap: 10px;
}
.preorder {
  margin-top: 5px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  padding: 8px 18px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 10px 1px #1976d2a0;
  transition: 0.3s;
}
.preorder:hover {
  background-color: #0d47a1;
  color: #fff;
  transform: scale(1.05);
}
.title {
  position: relative;
}

.new {
  position: absolute;
  top: 15px;
}

.price {
  font-size: 28px;
  font-weight: bold;
}
.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rating > span {
  color: rgb(255, 208, 0);
  filter: drop-shadow(0 0 5px #ffd700);
}

.promo {
  position: relative;
  top: -3px;
  right: 40%;
  /* background-color: rgb(17, 245, 93); */
  color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: inset 0px 0px 20px 10px red;
}
.add {
  /* background-color: rgb(255, 255, 255); */
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.493);
  transition: 0.5s;
}

.add:hover {
  background-color: rgb(255, 0, 110);
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.74);
  transform: scale(1.05);
  color: white;
}

.list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 40px;
}

.products-view {
  padding: 20px;
  display: flex;
  gap: 30px;
  list-style-type: none;
  justify-content: center;
  align-items: center;
}

.description {
  text-align: center;
  cursor: pointer;
}

.cards {
  /* background-color: rgb(250, 155, 169); */
  margin: 0 50px;
  padding: 50px;
}

.products-list-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  list-style-type: none;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.826);
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0.5px rgb(107, 107, 107);
}

span {
  color: rgb(255, 17, 195);
  font-size: 15px;
  font-weight: bold;
}

.products-list {
  margin-block: 10px;
}
</style>
