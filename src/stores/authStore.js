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
        name: null,
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
                goToHomePage()
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

    const signup = async (form) => {
        try {
            startLoading()
            
            await api.post('/signup', form)

            clearError()
            goToLoginPage()

            signupSuccessNotification()

            stopLoading()
        } catch (error) {
            stopLoading()
            assignError(error.response.data)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToHomePage = () => {
        router.push({ name: 'Home' })
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

        errors.name = response.errors.name ? response.errors.name[0] : null
        errors.email = response.errors.email ? response.errors.email[0] : null
        errors.password = response.errors.password ? response.errors.password[0] : null
    }

    const clearError = () => {
        errors.name = null
        errors.email = null
        errors.password = null
        errors.message = null
    }

    const signupSuccessNotification = () => {
        toast.success('Signup Successfully! You can Login now')
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
        signup,
        fetchInfo
    }
})