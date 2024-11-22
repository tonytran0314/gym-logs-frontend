import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { api } from "@/services/axios"
import { useRouter } from 'vue-router'

export const useExerciseStore = defineStore('exerciseStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const muscles = ref(null)
    const exercises = ref(null)
    const record = reactive({
        muscle: null,
        exercise: null
    })
    const router = useRouter()

    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getMuscles = async () => {
        try {
            const result = await api.get('/muscles')
            muscles.value = result.data
        } catch (error) {
            console.log(error)
        }
    }

    const getExercises = async () => {
        try {
            const result = await api.get('/exercises?muscle_id=' + record.muscle)
            exercises.value = result.data
        } catch (error) {
            console.log(error)
        }
    }

    const start = async () => {
        tempStore()
        await enableWorkoutStatus()
        goToOnSetScreen()
    }

    const stop = async () => {
        await disableWorkoutStatus()
        goToHomePage()
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

    const goToHomePage = () => {
        router.push({ name: 'Home' })
    }

    const tempStore = () => {
        localStorage.setItem('muscle_id', record.muscle)
        localStorage.setItem('exercise_id', record.exercise)
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
        muscles,
        exercises,
        record,
        getMuscles,
        getExercises,
        start,
        stop,
        saveWorkoutSet
    }

})