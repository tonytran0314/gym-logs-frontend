import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"
import { ref, reactive } from 'vue'
import { api, csrf} from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const router = useRouter()
    const toast = useToast()

    const errors = reactive({
        email: null,
        password: null,
        message: null
    })
    const isLoading = ref(false)



    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const login = async (email, password) => {
        try {
            startLoading()

            await csrf.get()
            const response = await api.post('/login', { email, password })

            if (response.status === 200) {
                clearError()
                goToProfilePage()
                stopLoading()
            } 
        } 
        catch (error) {
            stopLoading()
            assignError(error.response.data)
        }
    }

    const logout = async () => {
        try {
            startLoading()
            
            await api.post('/logout')
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

    const assignError = (response) => {
        clearError()

        if(!response.errors) { 
            errors.message = response.message 
            return
        }

        errors.email = response.errors.email ? response.errors.email[0] : null
        errors.password = response.errors.password ? response.errors.password[0] : null
    }

    const clearError = () => {
        errors.email = null
        errors.password = null
        errors.message = null
    }

    const fetchInfo = async () => {
        try {
            const res = await api.get('/info')
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