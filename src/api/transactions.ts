import { apiClient } from "../api/index";

export const getTransactions = async function () {
    const res = await apiClient.get('/posts')
    return res.data
}