<template>
    <div class="d-flex align-center flex-column">
        <v-img class="logo" src="../../src/assets/img/Logo.png"></v-img>
        <div class="product-list-container">
            <v-table>
                <thead>
                    <tr>
                        <th>
                            {{ orderId }}
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                            Aantal
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td></td>
                        <td>{{ product.naam }}</td>
                        <td>{{ product.totaalPrijs }}</td>
                        <td>{{ product.aantal }}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
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
        }
    }

};
</script>

<style scoped>
@import '../css/cartstyling.css';
</style>