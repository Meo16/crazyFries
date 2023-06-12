<script setup>
import quantitySelect from '../components/NumSelect.vue';
import checkButton from '../components/CheckButton.vue';
import xButton from '../components/XButton.vue';
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
                        <td>
                            <xButton @click="deleteProduct(product.id)" />
                        </td>
                        <td>{{ product.naam }}</td>
                        <td>{{ product.totaalPrijs }}</td>
                        <td>
                            <quantity-select v-model="product.aantal" />
                        </td>
                        <td>
                            <checkButton
                                @click="updateProductTotalPriceAndQuantity(product.id, product.totaalPrijs, product.aantal)" />
                        </td>
                    </tr>

                </tbody>
            </v-table>
        </div>
        <v-btn :to="{ path: '/pay', param: { totalPrice: calculateTotalPrice() } }" class="go-to-pay-button">
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
            pricePerItemMap: {},
        };
    },
    mounted() {
        this.orderId = this.$route.params.orderId;
        this.fetchProductsBasedOnOrderId();
        this.calculatePricePerItem();

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
                    this.calculatePricePerItem();
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        calculateTotalPrice() {
            let totalOrderPrice = 0;
            for (const product of this.products) {
                totalOrderPrice += parseFloat((product.totaalPrijs / product.aantal) * product.aantal);
            }
            return totalOrderPrice.toFixed(2);
        },
        calculatePricePerItem() {
            for (const product of this.products) {

                const pricePerItem = parseFloat(product.totaalPrijs) / parseFloat(product.aantal);
                this.pricePerItemMap[product.id] = pricePerItem.toFixed(2);
            }
        },
        updateProductTotalPriceAndQuantity(productId, totaalPrijs, quantity) {
            const pricePerItem = this.pricePerItemMap[productId];
            const newTotalPricePerItem = pricePerItem * quantity;

            const productToUpdate = this.products.find((product) => product.id === productId);
            if (productToUpdate) {
                productToUpdate.totaalPrijs = newTotalPricePerItem.toFixed(2);
            }

            fetch(`http://localhost:3000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ totaalPrijs: newTotalPricePerItem.toFixed(2), aantal: quantity }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to update product totalPrice and quantity');
                    }
                })
                .catch(error => {
                    console.error('Error updating product quantity:', error);
                });
        },
        deleteProduct(productId) {
            fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete product');
                    }
                    this.products = this.products.filter(product => product.id !== productId);
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                });
        }
    },
};
</script>
  

<style scoped>
@import '../css/cartstyling.css';
</style>