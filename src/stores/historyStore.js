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
    const get = async (page = 1) => {
        try {
            const historyPath = `/history?page=${page}`
            const res = await api.get(historyPath)
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