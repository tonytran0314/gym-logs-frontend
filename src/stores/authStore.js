import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    const router = useRouter()

    const login = async (email, password) => {
        try {
            await axios.get('/sanctum/csrf-cookie')

            const response = await axios.post('/api/login', { email, password })

            if (response.status === 200) {
                goToProfilePage()
            } 
        } 
        catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            await axios.post('/api/logout')
            goToLoginPage()
        } catch (error) {
            console.log(error)
        }
    }

    const goToProfilePage = () => {
        router.push({ name: 'Profile' })
    }

    const goToLoginPage = () => {
        router.push({ name: 'Login' })
    }

    const fetchInfo = async () => {
        try {
            const res = await axios.get('/api/info')
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        login,
        logout,
        fetchInfo
    }
})