<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div>
        <v-app>
            <v-app-bar>
                <v-app-bar-nav-icon size="60" style="font-size: 40px; padding: 5px 0 0 5px;"
                    @click="menuOpen = !menuOpen"></v-app-bar-nav-icon>
            </v-app-bar>
            <v-card v-if="menuOpen" class="menu-card" elevation="6">
                <v-card-text style="padding: 0;">
                    <v-list>
                        <v-list-item style="padding: 0;">
                            <v-list-item-content class="item-content">
                                <v-list-item-title>
                                    <RouterLink to="/home">Home</RouterLink>
                                </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content class="item-content">
                                <v-list-item-title>Menu</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content class="item-content">
                                <v-list-item-title>
                                    <RouterLink to="/about">Bestellen</RouterLink>
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
    </div>
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

a {
    text-decoration: none;
    color: black;
}

.menu-card {
    position: fixed;
    left: 0;
    top: 55px;
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
    padding: 15px 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-content:active {
    background-color: #f9c13391;
}

.v-list-item-title {
    font-size: 20px
}

.icon {
    font-size: 100px;
}
</style>
  



