<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="d-flex align-center flex-column">
    <v-img class="logoHomePage" src="../../src/assets/img/Logo.png"></v-img>
    <div class="image-container">
      <router-link @click="menuOpen = false" class="overlay-link" to="/order">
        <v-img class="align-center directToOrderImg" :aspect-ratio="1" src="../../src/assets/img/image (4).png" cover>
          <v-card-title><router-link class="overlay-link" to="/order">Plaats een bestelling</router-link></v-card-title>
        </v-img>
      </router-link>
    </div>
    <div class="image2-container">
      <v-card-title>Bekijk<router-link @click="menuOpen = false" class="overlay-link2" to="#"> hier </router-link>ons
        menu</v-card-title>
      <v-img class="menuImg" :aspect-ratio="1" src="../../src/assets/img/highfriet-1.png" cover></v-img>
    </div>
    <div class="bottom-image-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FFB400" fill-opacity="1"
          d="M0,192L26.7,160C53.3,128,107,64,160,58.7C213.3,53,267,107,320,117.3C373.3,128,427,96,480,69.3C533.3,43,587,21,640,53.3C693.3,85,747,171,800,181.3C853.3,192,907,128,960,133.3C1013.3,139,1067,213,1120,208C1173.3,203,1227,117,1280,90.7C1333.3,64,1387,96,1413,112L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
        </path>
      </svg>
      <div class="square">
      </div>
    </div>
  </div>
</template>


<style scoped>@import '../css/homestyling.css';</style>
