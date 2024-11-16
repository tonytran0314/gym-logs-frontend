import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/axios.js'

export const useChartStore = defineStore('chartStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const lineChartData = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getLineData = async () => {
        try {
            const res = await api.get('/chart/weight-level')
            lineChartData.value = res.data
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // const changeExercise = async (event) => {
    //     try {
    //         if(lineChartData.value) {
    //             lineChartData.value.destroy()
    //             const newExercise = event.target.value
    //             const path = '/chart/weight-level/' + newExercise
    //             const res = await api.get(path)
    //             lineChartData.value = res.data
    //             console.log(lineChartData.value)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    /* -------------------------------------------------------------------------- */
    /*                                LOCAL METHODS                               */
    /* -------------------------------------------------------------------------- */



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        lineChartData,
        getLineData,
        // changeExercise
    }
})