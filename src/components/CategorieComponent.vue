<script setup>

const props = defineProps({
    category: Array
});

console.log(props.category);

</script>


<template>

    <div>
    <h2>Categories</h2>
    <form >
        <div v-for="cat in category" :key="cat">
            <input type="radio" value="cat" id="cat"/>
            <label for="cat">{{ cat }}</label>
        </div>
    </form>
    </div>

</template>


<style scoped>


</style>