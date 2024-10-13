import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    const router = useRouter()
    let isAuthenticated = ref(false)

    const login = async () => {
        const email = 'test@example.com'
        const password = 'password'

        try {
            await axios.get('/sanctum/csrf-cookie')

            const response = await axios.post('/api/login', { email, password })

            if (response.status === 200) {
                authenticateUser()
                goToProfilePage()
            } 
        } 
        catch (error) {
            console.log(error);
        }
    }

    const logout = () => {}

    const goToProfilePage = () => {
        router.push({ name: 'Profile' })
    }

    const authenticateUser = () => {
        isAuthenticated.value = true
    }

    return {
        isAuthenticated,
        login,
        logout
    }
})