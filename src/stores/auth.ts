import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from '../types'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isAuthenticated = ref(false)

    return { user, isAuthenticated }
})