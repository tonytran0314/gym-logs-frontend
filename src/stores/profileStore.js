import { defineStore } from "pinia"
import { api } from "@/services/axios"
import { ref, reactive } from "vue"
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"

export const useProfileStore = defineStore('profileStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const isLoading = ref(false)

    const toast = useToast()
    const router = useRouter()

    const user = reactive({
        fullname: null,
        email: null,
    })

    const errors = reactive({
        fullname: null,
        email: null,
    })



    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const res = await api.get('/profile')

            user.fullname = res.data.data.name
            user.email = res.data.data.email
        } catch (error) {
            console.log(error)
        }
    }

    const edit = async (updatedProfile) => {
        try {
            startLoading()

            await api.put('/profile', updatedProfile)
            
            clearError()
            goToProfile()
            stopLoading()
            updatedProfileSuccessNotification()
        } catch (error) {
            stopLoading()
            assignError(error.response.data.errors)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToProfile = () => {
        router.push({ name: 'Profile' })
    }

    const startLoading = () => {
        isLoading.value = true
    }

    const stopLoading = () => {
        isLoading.value = false
    }

    const assignError = (repsonseError) => {
        clearError()

        errors.fullname = repsonseError.name ? repsonseError.name[0] : null
        errors.email = repsonseError.email ? repsonseError.email[0] : null
    }

    const clearError = () => {
        errors.fullname = null
        errors.email = null
    }

    const updatedProfileSuccessNotification = () => {
        toast.success('Updated Profile Successfully !!!')
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        user,
        errors,
        isLoading,
        get,
        edit
    }

})