import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"
import { ref } from 'vue'
import axios from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const router = useRouter()
    const toast = useToast()

    const errors = ref(null)
    const isLoading = ref(false)



    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const login = async (email, password) => {
        try {
            startLoading()

            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/api/login', { email, password })

            if (response.status === 200) {
                clearError()
                goToProfilePage()
                stopLoading()
            } 
        } 
        catch (error) {
            stopLoading()
            assignError(error.response.data.message)
        }
    }

    const logout = async () => {
        try {
            startLoading()
            
            await axios.post('/api/logout')
            goToLoginPage()

            stopLoading()
        } catch (error) {
            stopLoading()
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToProfilePage = () => {
        router.push({ name: 'Profile' })
    }

    const goToLoginPage = () => {
        router.push({ name: 'Login' })
    }

    const startLoading = () => {
        isLoading.value = true
    }

    const stopLoading = () => {
        isLoading.value = false
    }

    const assignError = (errorMessage) => {
        errors.value = errorMessage
    }

    const clearError = () => {
        errors.value = null
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


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        errors,
        isLoading,
        login,
        logout,
        fetchInfo
    }
})