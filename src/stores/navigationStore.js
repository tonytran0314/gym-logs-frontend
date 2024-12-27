import { defineStore } from "pinia"
import { ref } from "vue"

export const useNavigationStore = defineStore('navigationStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const isSideNavigationOpen = ref(false)
    const isGuestSideNavigationOpen = ref(false)
    const items = [
        {
            label: 'Dashboard',
            destination: '/',
            icon: 'home'
        },
        {
            label: 'Profile',
            destination: '/profile',
            icon: 'user'
        },
        {
            label: 'History',
            destination: '/history',
            icon: 'clock-rotate-left'
        },
        {
            label: 'Settings',
            destination: '/settings',
            icon: 'gear'
        }
    ]


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const open = () => {
        isSideNavigationOpen.value = true
    }

    const close = () => {
        isSideNavigationOpen.value = false
    }

    const openGuestSideMenu = () => {
        isGuestSideNavigationOpen.value = true
    }

    const closeGuestSideMenu = () => {
        isGuestSideNavigationOpen.value = false
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        items,
        isSideNavigationOpen,
        isGuestSideNavigationOpen,
        open,
        close,
        openGuestSideMenu,
        closeGuestSideMenu
    }

})