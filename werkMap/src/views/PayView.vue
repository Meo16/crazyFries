<template>
    <div class="d-flex align-center flex-column">
        <v-img class="logo" src="../../src/assets/img/Logo.png"></v-img>
        <h1>Kies je betaalwijze</h1>
        <v-expansion-panels class="pay-method-panels">
            <v-expansion-panel>
                <template #title>
                    <div class="image-container">
                        <v-img class="payment-image" src="../../src/assets/img/paymentLogos/logo1.png"></v-img>
                    </div>
                </template>
                <template #text>
                    <v-select label="Selecteer uw bank"
                        :items="['ING', 'ABN AMRO', 'ASN BANK', 'bunq', 'Knab', 'Rabobank', 'RegioBank', 'Revolut', 'SNS Bank', 'Triodos Bank', 'Van Lanschot']"></v-select>
                </template>
            </v-expansion-panel>
            <v-expansion-panel>
                <template #title>
                    <div class="image-container">
                        <v-img class="payment-image" src="../../src/assets/img/paymentLogos/logo2.png"></v-img>
                    </div>
                </template>
                <template #text>
                    Je wordt doorgestuurd naar PayPal om je betaling te voltooien.
                </template>
            </v-expansion-panel>
            <v-expansion-panel>
                <template #title>
                    <div class="image-container two">
                        <v-img class="payment-image" src="../../src/assets/img/paymentLogos/logo3.png"></v-img>
                        <v-img class="payment-image" src="../../src/assets/img/paymentLogos/logo4.png"></v-img>
                    </div>
                </template>
                <template #text>
                    <v-text-field label="Naam op de kaart"></v-text-field>
                    <v-text-field label="0000 0000 0000 0000"></v-text-field>
                    <v-text-field label="Geldig tot"></v-text-field>
                    <v-text-field label="CVC/CVV"></v-text-field>
                </template>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="pay-complete-button-container">
            <v-btn to="/home" class="pay-complete-button">
                Betalen
            </v-btn>
        </div>

    </div>
</template>

<style scoped>
@import '../css/paystyling.css';
</style>