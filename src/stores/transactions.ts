import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Transaction } from '../types/index'

export const useTransactionsStore = defineStore('transactions', () => {
    const transactions = ref<Transaction[]>([])
    const balance = computed(() => {
        return transactions.value.reduce((acc, trans) => {
            return acc + trans.sum
        }, 0)
    })

    return { transactions, balance }
})