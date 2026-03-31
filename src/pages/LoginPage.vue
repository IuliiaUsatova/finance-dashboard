<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "../stores/auth";
import { getUser } from "../api/auth";

const authStore = useAuthStore();
const { login } = authStore;

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref('')

async function handleLogin() {
    if (email.value === '' || password.value === '') {
        error.value = 'Заполните поля'
        return
    }
    const userData = await getUser()
    const { id, name, email: userEmail } = userData
    login({ id, name, email: userEmail });
    router.push('/')
}
</script>
<template>
    <div>
        <div class="email">
            <p>Email</p>
            <input type="email" v-model="email" />
        </div>
        <div class="password">
            <p>Пароль</p>
            <input type="password" v-model="password" />
        </div>
        <button @click="handleLogin">Войти</button>
        <p>{{ error }}</p>
    </div>
</template>
