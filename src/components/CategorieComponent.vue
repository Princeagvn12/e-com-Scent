<script setup>
const emit = defineEmits(['selectCategory', 'selectRating'])
const props = defineProps({
  category: Array,
})

function handleCategoryChange(event) {
  emit('selectCategory', event.target.value)
}

function handleRatingChange(event) {
  emit('selectRating', event.target.value)
}
</script>

<template>
  <div class="categories">
    <div class="container">
      <h2>Filter by category</h2>
      <div>
        <input
          type="radio"
          value="all"
          name="t"
          id="cat-all"
          checked
          @change="handleCategoryChange"
        />
        <label for="cat-all">All</label>
      </div>
      <div v-for="(cat, index) in category" :key="cat">
        <input
          type="radio"
          :value="cat"
          name="t"
          :id="`cat-${index}`"
          @change="handleCategoryChange"
        />
        <label :for="`cat-${index}`">{{ cat }}</label>
      </div>

      <h2>Filter by rating</h2>
      <div>
        <input
          type="radio"
          value="all"
          name="r"
          id="rating-all"
          checked
          @change="handleRatingChange"
        />
        <label for="rating-all">All</label>
      </div>
      <div v-for="star in [5, 4, 3, 2, 1]" :key="star">
        <input
          type="radio"
          :value="star"
          name="r"
          :id="`rating-${star}`"
          @change="handleRatingChange"
        />
        <label :for="`rating-${star}`">
          <span v-for="i in star" :key="i">★</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  position: relative;
}
.container {
  position: sticky;
  top: 30px;
  min-width: 180px;
  max-width: 220px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
  padding: 24px 18px;
  margin: 10px 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
}
.categories h2 {
  color: #222;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}
.categories input[type='radio'] {
  display: none;
}
.categories label {
  display: block;
  cursor: pointer;
  padding: 10px 18px;
  margin-bottom: 8px;
  border-radius: 999px;
  border: 1.5px solid #e0e0e0;
  background: #f7f7f7;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s;
  user-select: none;
}
.categories input[type='radio']:checked + label {
  background: #222;
  color: #fff;
  border-color: #222;
  box-shadow: 0 2px 8px 0 rgba(34, 34, 34, 0.08);
}
.categories label:hover {
  border-color: #a0a0a0;
  background: #eaeaea;
}
.categories label span {
  color: #ffd700;
  font-size: 1.1em;
  margin-right: 2px;
}
</style>
