import { defineStore } from "pinia"
import { api } from "@/services/axios"
import { ref } from "vue"

export const useHistoryStore = defineStore('historyStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const records = ref(null)
    const details = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const res = await api.get('/history')
            records.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        records,
        details,
        get
    }

})