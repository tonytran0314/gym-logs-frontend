import { defineStore } from "pinia"
import { ref } from "vue"
import { api, exerciseApi } from "@/services/axios"
import { useRouter } from 'vue-router'

export const useExerciseStore = defineStore('exerciseStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const exercises = ref(null)
    const router = useRouter()

    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getExercises = async (selectedMuscle) => {
        try {
            const result = await exerciseApi.get('/exercises?muscle=' + selectedMuscle)
            exercises.value = result.data
        } catch (error) {
            console.log(error)
        }
    }

    const startExercise = async (record) => {
        tempStore(record)
        await enableWorkoutStatus()
        goToOnSetScreen()
    }

    const stopExercise = async () => {
        await disableWorkoutStatus()
        goToProfile()
    }

    const saveWorkoutSet = async (set) => {
        try {
            await api.post('/save-set', set)
        } catch (error) {
            console.log(error)
        }
        
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToOnSetScreen = () => {
        router.push({ name: 'On Set Screen' })
    }

    const goToProfile = () => {
        router.push({ name: 'Profile' })
    }

    const tempStore = (record) => {
        localStorage.setItem('muscle', record.muscle)
        localStorage.setItem('exercise', record.exercise)
    }

    const enableWorkoutStatus = async () => {
        try {
            await api.put('/start-workout')
        } catch (error) {
            console.log(error)
        }
    }

    const disableWorkoutStatus = async () => {
        try {
            await api.put('/stop-workout')
        } catch (error) {
            console.log(error)
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        exercises,
        getExercises,
        startExercise,
        stopExercise,
        saveWorkoutSet
    }

})