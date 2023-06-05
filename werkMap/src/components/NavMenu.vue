<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon size="60" style="font-size: 35px; padding-top: 5px;" @click="menuOpen = !menuOpen"
                ref="hamburgerIcon"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-card v-if="menuOpen" class="menu-card">
            <v-card-text style="padding: 0;">
                <v-list>
                    <v-list-item style="padding: 0;">
                        <v-list-item-content class="item-content">
                            <v-list-item-title>
                                <RouterLink to="/home" @click="menuOpen = false">Home</RouterLink>
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content class="item-content">
                            <v-list-item-title>Menu</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content class="item-content">
                            <v-list-item-title>
                                <RouterLink to="/order" @click="menuOpen = false">Bestellen</RouterLink>
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content class="item-content">
                            <v-list-item-title>Contact</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-app>
</template>
  
  
<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

* {
    font-family: 'Itim', cursive;
}

.v-application:deep(.v-application__wrap) {
    min-height: unset;
}

a {
    text-decoration: none;
    color: black;
}

.menu-card {
    position: fixed;
    left: 0;
    top: 64px;
    height: 100vh;
    width: 100%;
    background-color: white;
    z-index: 999;
    max-height: calc(100vh - 64px);
    overflow-y: auto;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: none !important;
}

.item-content {

    display: flex;
    align-items: center;
    justify-content: center;
}

.v-list-item-title {
    padding: 80px 0 80px 0;
}

.item-content:active {
    background-color: #f9c13391;
}

.v-list-item-title {
    font-size: 34px
}

.icon {
    font-size: 100px;
}
</style>
  



