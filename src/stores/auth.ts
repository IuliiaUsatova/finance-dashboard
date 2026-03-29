import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from '../types/index'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isAuthenticated = ref(false)

    function login(userData: User) {
        user.value = userData
        isAuthenticated.value = true
    }

    function logout() {
        user.value = null
        isAuthenticated.value = false
    }

    return { user, isAuthenticated, login, logout }
})