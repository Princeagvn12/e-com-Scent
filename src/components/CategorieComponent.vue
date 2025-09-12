<script setup>

const props = defineProps({
    category: Array
});

console.log(props.category);

</script>


<template>

    <div class="categories">
    <h2>Categories</h2>
    <input type="radio" value="all" name="t" checked/>All
        <div v-for="(cat , index) in category" :key="cat[index]">
            <input type="radio" value="cat" name="t"/>{{ cat }}
        </div>
    </div>

</template>


<style scoped>
.categories{
    border: 1px solid black;
    padding: 10px;
    background-color: rgba(171, 231, 171, 0.815);
}
.categories h2{
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
}

</style>