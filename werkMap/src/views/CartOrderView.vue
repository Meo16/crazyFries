<script setup>
import quantitySelect from '../components/NumSelect.vue';
import checkButton from '../components/checkButton.vue';
</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-img class="logo" src="../../src/assets/img/Logo.png"></v-img>
        <div class="product-list-container">
            <v-table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Aantal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td></td>
                        <td>{{ product.naam }}</td>
                        <td>{{ product.totaalPrijs }}</td>
                        <td>
                            <quantity-select v-model="product.aantal" />
                        </td>
                        <td>
                            <checkButton @click="updateProductQuantity(product.id, product.aantal)" />
                        </td>
                    </tr>

                </tbody>
            </v-table>
        </div>
        <v-btn class="go-to-pay-button">
            €{{ calculateTotalPrice() }} Bestellen
        </v-btn>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            orderId: null,
            products: [],
        };
    },
    mounted() {
        this.orderId = this.$route.params.orderId;
        this.fetchProductsBasedOnOrderId();
    },
    methods: {
        fetchProductsBasedOnOrderId() {
            fetch(`http://localhost:3000/products/${this.orderId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    return response.json();
                })
                .then(data => {
                    this.products = data;
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        calculateTotalPrice() {
            let totalOrderPrice = 0;
            for (const product of this.products) {
                totalOrderPrice += parseFloat(product.totaalPrijs);
            }
            return totalOrderPrice.toFixed(2);
        },
        updateProductQuantity(productId, quantity) {
            fetch(`http://localhost:3000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ aantal: quantity }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to update product quantity');
                    }
                })
                .catch(error => {
                    console.error('Error updating product quantity:', error);
                });
        },
    },
};
</script>
  

<style scoped>
@import '../css/cartstyling.css';
</style>