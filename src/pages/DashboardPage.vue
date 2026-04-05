<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useTransactionsStore } from "../stores/transactions"
import { useRouter } from "vue-router";
// import { onMounted } from "vue";
// import { getTransactions } from '../api/transactions'


const authStore = useAuthStore();
const transactionsStore = useTransactionsStore()
const { user } = storeToRefs(authStore);
const { logout } = authStore;
const { balance } = storeToRefs(transactionsStore)
const router = useRouter()

// onMounted(async () => {
//   const data = await getTransactions()
//   transactionsStore.transactions = data
// })

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
  <div>
    <h1>Привет {{ user?.name }}</h1>
    <p>Баланс: {{ balance }}</p>
    <button @click="handleLogout">Выйти из кабинета</button>
  </div>
</template>