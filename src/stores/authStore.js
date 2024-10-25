import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"
import { ref } from 'vue'
import axios from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    const router = useRouter()
    const toast = useToast()

    const errors = ref(null)
    const isLoading = ref(false)

    const login = async (email, password) => {
        try {

            isLoading.value = true

            await axios.get('/sanctum/csrf-cookie')

            const response = await axios.post('/api/login', { email, password })

            if (response.status === 200) {
                goToProfilePage()
            } 
        } 
        catch (error) {

            isLoading.value = false

            errors.value = error.response.data.message
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
            toast.success('Correct');
        } catch (error) {
            console.log(error)
        }
    }

    return {
        errors,
        isLoading,
        login,
        logout,
        fetchInfo
    }
})