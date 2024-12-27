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
    const currentExercise = ref(null)
    const router = useRouter()

    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getMuscles = async () => {
        try {
            const result = await api.get('/muscles')
            muscles.value = result.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getExercises = async () => {
        try {
            const result = await api.get('/exercises?muscle_id=' + localStorage.getItem('muscle_id'))
            exercises.value = result.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getCurrentExercise = async () => {
        try {
            const exerciseID =  localStorage.getItem('exercise_id')
            const res = await api.get('/current-exercise?exercise_id=' + exerciseID)
            currentExercise.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const start = async () => {
        goToOnSetScreen()
    }

    const stop = async () => {
        goToDashboard()
    }

    const saveWorkoutSet = async (set) => {
        try {
            await api.post('/set', set)
        } catch (error) {
            console.log(error)
        }
        
    }

    const tempStoreMuscle = (muscleID) => {
        localStorage.setItem('muscle_id', muscleID)
    }
    const tempStoreExercise = (exerciseID) => {
        localStorage.setItem('exercise_id', exerciseID)
        record.exercise = exerciseID
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToOnSetScreen = () => {
        router.push({ name: 'On Set Screen' })
    }

    const goToDashboard = () => {
        router.push({ name: 'Dashboard' })
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        muscles,
        exercises,
        record,
        currentExercise,
        getMuscles,
        getExercises,
        getCurrentExercise,
        start,
        stop,
        saveWorkoutSet,
        tempStoreMuscle,
        tempStoreExercise
    }

})