<script setup>
import { onMounted, ref } from 'vue'
import ProductsListComponent from '@/components/ProductsListComponent.vue'
import CategorieComponent from '@/components/CategorieComponent.vue'

const url = 'https://dummyjson.com/products?limit=10'
let products = ref([])
let filteredCategory = ref([])

onMounted( () => {
 
  async function fetchData() {
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); 
      products.value=data.products
      console.log(products.value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData()
})


function filterCategory (e){
  filteredCategory.value = e
  console.log(filteredCategory.value);
}

</script>

<template>
  <div class="productsView">
   <CategorieComponent  :category="filteredCategory" class="child2"/>
    <ProductsListComponent :products = "products" @filterCategory= "(e)=> {filterCategory(e)}" class="child1"/>
  </div>
</template>

<style scoped>
.productsView{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.child1{
    width: 85%;
}
.child2{
    width: 14%;
}

</style>
