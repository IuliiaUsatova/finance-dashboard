import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: ''
    },
    {
        path: '/login',
        component: ''
    },
    {
        path: '/transactions',
        component: ''
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})