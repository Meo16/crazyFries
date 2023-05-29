<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HamburgerNav from './components/NavMenu.vue';
import '@mdi/font/css/materialdesignicons.css';
</script>

<template>
    <div class="container">
        <div class="hamburger-container">
            <HamburgerNav />
        </div>
        <RouterView />
    </div>
</template>


  
  

<style></style>