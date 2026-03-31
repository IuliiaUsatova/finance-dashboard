<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";


const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { logout } = authStore;
const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
  <div>
    <h1>Привет {{ user?.name }}</h1>
    <p>Баланс: 0</p>
    <button @click="handleLogout">Выйти из кабинета</button>
  </div>
</template>