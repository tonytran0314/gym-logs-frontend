<script setup>
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'
    import { Bar } from 'vue-chartjs'
  
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
  
    const data = {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
    }

    const options = {
        responsive: true
    }
</script>

<template>
    <Bar :data="data" :options="options" />
</template>