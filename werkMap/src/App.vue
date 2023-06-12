<script setup>
import { RouterView } from 'vue-router';
import HamburgerNav from './components/NavMenu.vue';
import NormalNavBar from './components/NavBar.vue';
import '@mdi/font/css/materialdesignicons.css';
</script>

<template>
    <div class="container">
        <div class="hamburger-container">
            <HamburgerNav />
        </div>
        <div class="normal-navbar-container">
            <NormalNavBar />

        </div>
        <RouterView />
    </div>
</template>
  
<style>
.normal-navbar-container {
    display: none;
}

@media (min-width: 960px) {
    .hamburger-container {
        display: none;
    }

    .normal-navbar-container {
        display: block;
    }
}
</style>