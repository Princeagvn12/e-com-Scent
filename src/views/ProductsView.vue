<script setup>
import { onMounted, ref, computed } from 'vue'
import ProductsListComponent from '@/components/ProductsListComponent.vue'
import CategorieComponent from '@/components/CategorieComponent.vue'

const url = 'https://dummyjson.com/products?limit=10'
let products = ref([])
let categories = ref([])
let selectedCategory = ref('all')
let selectedRating = ref('all')

onMounted(() => {
  async function fetchData() {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      products.value = data.products
      console.log(products.value)
      categories.value = [...new Set(data.products.map((p) => p.category))]
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  fetchData()
})

const filteredProducts = computed(() => {
  let filtered = products.value
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((p) => p.category === selectedCategory.value)
  }
  if (selectedRating.value !== 'all') {
    filtered = filtered.filter((p) => Math.floor(p.rating) === Number(selectedRating.value))
  }
  return filtered
})

function handleCategorySelect(cat) {
  selectedCategory.value = cat
}
function handleRatingSelect(rating) {
  selectedRating.value = rating
}
</script>

<template>
  <div class="productsView">
    <CategorieComponent
      :category="categories"
      class="child2"
      @selectCategory="handleCategorySelect"
      @selectRating="handleRatingSelect"
    />
    <ProductsListComponent :products="filteredProducts" class="child1" />
  </div>
</template>

<style scoped>
.productsView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.child1 {
  width: 90%;
}

.child2 {
  width: 10%;
}
</style>
