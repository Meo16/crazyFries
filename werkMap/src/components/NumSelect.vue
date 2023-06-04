<template>
    <v-select class="numSelect" :items="quantityOptions"></v-select>
</template>
  
<script>
export default {
    data() {
        return {
            selectedQuantity: 1,
            quantityOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        };
    }
};
</script>

<style scoped>
.numSelect {
    text-align: center;
    width: 20px;
}
</style>