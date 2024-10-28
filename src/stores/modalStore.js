import { defineStore } from "pinia"
import { ref, markRaw } from "vue"

export const useModalStore = defineStore('modalStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const content = ref(null)
    const body = document.body


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const open = (modal) => {
        blockScrolling()
        content.value = markRaw(modal)
    }

    const close = () => {
        allowScrolling()
        content.value = null
    }



    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const blockScrolling = () => {
        if (body) body.style.overflow = "hidden"
    }

    const allowScrolling = () => {
        if (body) body.style.overflow = "auto"
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        content,
        open,
        close
    }

})