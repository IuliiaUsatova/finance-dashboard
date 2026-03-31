import { apiClient } from '../api/index'

export const getUser = async function () {
    const res = await apiClient.get('/users/1')
    return res.data
}