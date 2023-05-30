<!-- <template>
  <div class="product-cards">
    <h1>Order View</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.naam }}</li>
    </ul>
  </div>
</template> -->
<template>
  <div class="card-grid">
    <v-card v-for="product in products" :key="product.id" class="mx-auto" max-width="200">
      <v-img :src="product.src" height="200px"></v-img>

      <v-card-title>
        {{ product.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ product.subtitle }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon></v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div>
          <v-divider></v-divider>

          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
  <div class="bottom-image-container">
    <v-img class="bottom-image" src="../../src/assets/img/wave (5).png" width=""></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
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
  }
};
</script>

<style scoped>
@import '../css/orderstyling.css';
</style>


