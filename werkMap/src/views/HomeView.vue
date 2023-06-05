<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-img class="logoHomePage" src="../../src/assets/img/Logo.png" width="350px"></v-img>
    <div class="image-container">
      <router-link @click="menuOpen = false" class="overlay-link" to="/order">
        <v-img class="align-center directToOrderImg" width="300" :aspect-ratio="1"
          src="../../src/assets/img/image (4).png" cover>
          <v-card-title><router-link class="overlay-link" to="/order">Plaats een bestelling</router-link></v-card-title>
        </v-img>
      </router-link>
    </div>
    <div class="image2-container">
      <v-card-title>Bekijk<router-link @click="menuOpen = false" class="overlay-link2" to="#"> hier </router-link>ons
        menu</v-card-title>
      <v-img class="menuImg" height="150" width="300" :aspect-ratio="1" src="../../src/assets/img/highfriet-1.png"
        cover></v-img>
    </div>
    <div class="bottom-image-container">
      <v-img class="bottom-image" src="../../src/assets/img/wave (5).png" width=""></v-img>
    </div>
  </div>
</template>

<style scoped>
@import '../css/homestyling.css';
</style>
