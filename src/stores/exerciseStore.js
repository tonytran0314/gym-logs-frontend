import { defineStore } from "pinia"
import { ref } from "vue"
import { exerciseApi } from "@/services/axios"
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

    const startExercise = (record) => {
        tempStore(record)
        goToOnSetScreen()
    }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */
    const goToOnSetScreen = () => {
        router.push({ name: 'On Set Screen' })
    }

    const tempStore = (record) => {
        localStorage.setItem('muscle', record.muscle)
        localStorage.setItem('exercise', record.exercise)
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        exercises,
        getExercises,
        startExercise
    }

})