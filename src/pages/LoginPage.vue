<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const { user, isAuthenticated } = storeToRefs(authStore);
const { login, logout } = authStore;
const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref('')

function handleLogin() {
    if (email.value === '' || password.value === '') {
        error.value = 'Заполните поля'
        return
    }
    const userData = {
        id: 1,
        name: "Юля",
        email: email.value,
    };
    login(userData);
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
