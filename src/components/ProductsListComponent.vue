<script setup>
import { computed, defineProps, onMounted, ref,watch } from 'vue'

const emit = defineEmits(['filterCategory'])
const props = defineProps({
  products: Array,
})

console.log(props.products)
let Categories = ref([])
let Category = ref([])


watch(()=>props.products,()=> {
  Categories.value = props.products.map((product) => product.category)
  Category.value = [...new Set(Categories.value)]
  console.log(Categories.value)
  console.log(Category.value)
})

watch(
  () => Category.value,
  () => {
    emit('filterCategory', [...new Set(props.products.map((product) => product.category))])
  },
)
</script>

<template>
  {{ props.products.map((product) => product.category) }}
  {{ [...new Set(props.products.map((product) => product.category))] }}
  <div class="products-list">
    <h2>Products View</h2>
    <ul v-if="products && products.length" class="products-view">
      <li v-for="product in products" :key="product.id" class="list-item">
        <img :src="product.thumbnail" :alt="product.title" width="100" />
        <h5>
          {{ product.title }} <br />
          <span v-if="product.title.includes('Dior') || product.title.includes('Red')">New</span>
        </h5>
      </li>
    </ul>
    <div v-else>No products available.</div>

    <h2>Explore the lineups</h2>
    <div class="cards">
      <ul class="products-list-list">
        <li v-for="product in products" :key="product.id" class="product-card">
          <div>Promo</div>
          <img :src="product.images[0]" :alt="product.title" width="350" />
          <h5>
            {{ product.title }} <br />
            <span v-if="product.title.includes('Dior') || product.title.includes('Red')">New</span>
          </h5>
          <div class="description">{{ product.description }}</div>
          <div>Price: ${{ product.price }}</div>
          <div>
            <span v-for="value in Math.floor(product.rating || 0)">⭐</span>Rating:
            {{ product.rating }}
          </div>
          <button class="add">Add to Cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.add {
  background-color: rgb(255, 0, 110);
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgb(0, 0, 0);
  transition: 0.3s;
}

.add:hover {
  background-color: rgb(255, 0, 110);
  box-shadow: 0px 5px 5px 1px rgb(0, 0, 0);
  transform: scale(1.05);
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
}

.cards {
  background-color: rgb(250, 155, 169);
  margin: 0 50px;
  padding: 50px;
}

.products-list-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
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
  border-radius: 20px;
  box-shadow: 11px 11px 10px 1px rgb(107, 107, 107);
}

span {
  color: rgb(255, 17, 195);
  font-size: 15px;
  font-weight: bold;
}
</style>
