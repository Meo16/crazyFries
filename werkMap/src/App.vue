<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HamburgerNav from './components/NavMenu.vue';
import '@mdi/font/css/materialdesignicons.css';
</script>

<template>
    <HamburgerNav />
    <div class="content-wrapper">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">Other Page</RouterLink>
        <RouterView />
    </div>
</template>

<style></style>