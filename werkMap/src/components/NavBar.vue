<template>
    <v-app>
        <v-app-bar>
            <v-spacer></v-spacer>
            <div class="button-container">
                <v-btn to="/home" exact>Home</v-btn>
                <v-btn>Menu</v-btn>
                <v-btn to="/order">Bestellen</v-btn>
                <v-btn>Contact</v-btn>
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>
    </v-app>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

* {
    font-family: 'Itim', cursive;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-btn {
    font-size: 20px;
    text-transform: none;
    padding: 0 80px 0 80px;
}

.v-application:deep(.v-application__wrap) {
    min-height: unset;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: none !important;
}
</style>
  