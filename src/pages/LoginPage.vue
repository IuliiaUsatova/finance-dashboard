<script setup lang="ts">
import { ref } from 'vue';
const email = ref('')
const password = ref('')

function handleLogin() {
    console.log(email.value, password.value);
}
</script>
<template>
    <div>
        <div class="email">
            <p>Email</p>
            <input type="email" v-model="email">
        </div>
        <div class="password">
            <p>Пароль</p>
            <input type="password" v-model="password">
        </div>
        <button @click="handleLogin">Войти</button>
    </div>
</template>
