<script setup>
import addBtn from '../components/AddButton.vue';
import quantitySelect from '../components/NumSelect.vue';
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-img class="logo" src="../../src/assets/img/Logo.png"></v-img>
    <input v-model="searchQuery" type="text" placeholder="Zoek je product..." class="search-bar" />
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(product) in filteredProducts" :key="product.id">
          <v-card class="custom-card">
            <div class="card-image">
              <v-img :src="product.src + [product.id] + '.png'"></v-img>
            </div>
            <div class="card-content">
              <v-card-title class="card-title">
                {{ product.naam }}
              </v-card-title>
              <v-card-subtitle class="card-price">
                €{{ product.prijs }}
              </v-card-subtitle>
              <div class="select-label">Aantal</div>
              <v-card-actions class="card-actions">
                <addBtn @click="addToCart(product)" />
                <v-spacer></v-spacer>
                <quantitySelect v-model="product.aantal" />
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn :to="'/cart/' + this.orderId" class="total-cart-button">
      <font-awesome-icon class="cart-icon" icon="fa-solid fa-cart-shopping" /> Winkelwagen
    </v-btn>
  </div>
</template>



<script>
export default {
  data() {
    return {
      products: [],
      orderId: null,
      searchQuery: '',
    };
  },
  mounted() {
    this.fetchProducts();
    this.updateOrderId();
  },
  methods: {
    fetchProducts() {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
          this.products = data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    },
    addToCart(product) {
      const orderData = {
        orderId: this.orderId,
        productId: product.id,
        productName: product.naam,
        quantity: product.aantal,
        totalPrice: product.prijs * product.aantal,
      };

      fetch('http://localhost:3000/addToCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to add order to cart');
          }
          console.log('Order added to cart');
        })
        .catch(error => {
          console.error('Error adding order to cart:', error);
        });
    },
    updateOrderId() {
      fetch('http://localhost:3000/latestOrderId')
        .then(response => response.json())
        .then(data => {
          const latestOrderId = data.latestOrderId;
          this.orderId = latestOrderId + 1;
        })
        .catch(error => {
          console.error('Error fetching latest orderId:', error);
        });
    },
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.naam.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
@import '../css/orderstyling.css';
</style>



