import { defineStore } from "pinia"
import { quoteApi } from "@/services/axios"
import { ref } from "vue"

export const useQuoteStore = defineStore('quoteStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    let generatedQuote = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const get = async () => {
        try {
            const res = await quoteApi.get()
            
            generatedQuote.value = res.data[0]
        } catch (error) {
            console.log(error)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        generatedQuote,
        get
    }

})