import { defineStore } from "pinia"
import { api } from "@/services/axios"
import { reactive } from "vue"

export const useProfileStore = defineStore('profileStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    let user = reactive({
        fullname: null,
        email: null,
    })


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const res = await api.get('/profile')
            
            console.log(res.data)
            user.fullname = res.data.name
            user.email = res.data.email
        } catch (error) {
            console.log(error)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        user,
        get
    }

})