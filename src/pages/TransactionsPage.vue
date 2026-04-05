<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTransactionsStore } from '../stores/transactions';

const transactionsStore = useTransactionsStore()
const { transactions } = storeToRefs(transactionsStore)

</script>

<template>
  <div>
    <div v-for="transaction in transactions" :key="transaction.id">{{ transaction.sum }} {{ transaction.type }} {{
      transaction.description }}</div>
  </div>
</template>