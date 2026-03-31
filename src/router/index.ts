import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/auth"

import LoginPage from '../pages/LoginPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TransactionsPage from '../pages/TransactionsPage.vue'


const routes = [
    {
        path: '/',
        component: DashboardPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/transactions',
        component: TransactionsPage
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated && to.path !== '/login') {
        return '/login'
    }
})