import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/axios.js'

export const useArchivementStore = defineStore('archivementStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const streak = ref(null)
    const workoutDays = ref(null)
    const mostPopularExerciseComparison = ref(null)
    const totalExerciseThisWeek = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getStreak = async () => {
        try {
            const res = await api.get('/stats/streak')
            streak.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getWorkoutDays = async () => {
        try {
            const res = await api.get('/stats/workout-days')
            workoutDays.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getMostPopularExerciseComparison = async () => {
        try {
            const res = await api.get('/stats/most-popular-exercise-analysis')
            mostPopularExerciseComparison.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getTotalExerciseThisWeek = async () => {
        try {
            const res = await api.get('/stats/total-exercise-this-week')
            totalExerciseThisWeek.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        streak,
        workoutDays,
        mostPopularExerciseComparison,
        totalExerciseThisWeek,
        getStreak,
        getWorkoutDays,
        getMostPopularExerciseComparison,
        getTotalExerciseThisWeek
    }
})