import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/axios.js'

export const useChartStore = defineStore('chartStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const lineChartData = ref(null)
    const pieChartData = ref(null)
    const updatedChart = ref(null)


    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getLineData = async () => {
        try {
            const res = await api.get('/charts/weight-levels?periodInMonths=1')
            lineChartData.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const getPieData = async () => {
        try {
            const res = await api.get('/charts/muscle-proportions')
            pieChartData.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateLineChart = async (newExercise, newPeriod) => {
        try {
            const path = `/charts/weight-levels?exercise=${newExercise}&periodInMonths=${newPeriod}`
            const res = await api.get(path)
            updatedChart.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        lineChartData,
        pieChartData,
        updatedChart,
        getLineData,
        getPieData,
        updateLineChart
    }
})