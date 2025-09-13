<script setup>
import { useRouter } from 'vue-router'
import { addToCart, removeFromCart, getProductQty } from '@/stores/cartStore'
import { ref, computed } from 'vue'

const props = defineProps({
  products: Array,
  NewCat: String,
})

const router = useRouter()
function goToDetails(id) {
  router.push({ name: 'product-details', params: { id } })
}

// Carousel logic
const currentIndex = ref(0)
const visibleCount = 8 // nombre d'éléments visibles à la fois

const carouselProducts = computed(() => {
  if (!props.products) return []
  return props.products.slice(currentIndex.value, currentIndex.value + visibleCount)
})

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
function next() {
  if (currentIndex.value < props.products.length - visibleCount) currentIndex.value++
}
</script>

<template>
  <div class="products-list">
    <h2>Products View</h2>
    <div  class="carousel-wrapper">
      <button class="carousel-btn left" @click="prev" :disabled="currentIndex === 0">&lt;</button>
      <div class="carousel-viewport">
        <ul v-if="products && products.length" class="products-view">
          <li v-for="product in carouselProducts" :key="product.id" class="list-item">
            <img :src="product.thumbnail" :alt="product.title" width="100" />
            <h5 class="title">
              {{ product.title }} <br />
              <span
                v-if="product.title.includes('Dior') || product.title.includes('Red')"
                class="new"
                >New</span
              >
            </h5>
          </li>
        </ul>
        <div v-else>No products available.</div>
      </div>
      <button
        class="carousel-btn right"
        @click="next"
        :disabled="currentIndex >= products.length - visibleCount"
      >
        &gt;
      </button>
    </div>

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
            @click="goToDetails(product.id)"
          >
            Promo
          </div>
          <img
            :src="product.images[0]"
            :alt="product.title"
            width="150"
            @click="goToDetails(product.id)"
          />
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
            <button class="add" v-if="getProductQty(product.id) === 0" @click="addToCart(product)">
              Add to Cart
            </button>
            <div v-else class="qty-controls">
              <button class="qty-btn" @click="removeFromCart(product)">-</button>
              <span class="qty">{{ getProductQty(product.id) }}</span>
              <button class="qty-btn" @click="addToCart(product)">+</button>
            </div>
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
.products-list {
  margin-block: 10px;
  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
  left: 250px;
}

.carousel-viewport {
  overflow: hidden;
  width: 1300px;
  max-width: 95vw;
  padding: 30px;
}

.products-view {
  display: flex;
  gap: 30px;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  transition: transform 0.3s;
}

.list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 220px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px #e0e0e0;
  padding: 18px 10px;
  margin-right: 10px;
  transition: box-shadow 0.2s;
}

.carousel-btn {
  background: #ff006e;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px #ffb3d9;
  transition: background 0.2s;
  z-index: 10;
  opacity: 0.95;
}
.carousel-btn:disabled {
  background: #eee;
  color: #aaa;
  cursor: not-allowed;
  opacity: 0.7;
}
.carousel-btn.left {
  margin-right: 10px;
}
.carousel-btn.right {
  margin-left: 10px;
  position: absolute;
  top: 175px;
  left:158px
}
.buttonClass {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.qty-btn {
  background: rgb(255, 0, 110);
  color: #fff;
  border: none;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.qty-btn:hover {
  background: rgb(235, 4, 158);
}
.qty {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
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
  color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: inset 0px 0px 20px 10px red;
}
.add {
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  /* box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.493); */
  transition: 0.5s;
}
.add:hover {
  background-color: rgb(255, 0, 110);
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.74);
  transform: scale(1.05);
  color: white;
}
h2 {
  font-size: 40px;
}
.cards {
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
</style>
