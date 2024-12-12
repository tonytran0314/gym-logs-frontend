import { defineStore } from "pinia"

export const useThemeStore = defineStore('themeStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const savedTheme = localStorage.getItem('theme')


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const switchTo = (selectedTheme) => {
        const isDark = document.documentElement.classList.contains('dark')

        if (isDark && selectedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        }

        if(!isDark && selectedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }

        localStorage.setItem('theme', selectedTheme);
    }

    const initialize = () => {
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        switchTo,
        initialize
    }

})