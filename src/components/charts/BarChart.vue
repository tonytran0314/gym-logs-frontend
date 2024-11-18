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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
            {
                label: 'Set 1',
                data: [40, 20, 28, 35, 20, 50, 55, 38],
                backgroundColor: '#059669',
            },
            {
                label: 'Set 2',
                data: [20, 15, 25, 30, 10, 35, 40, 25],
                backgroundColor: '#10b981',
            },
            {
                label: 'Set 3',
                data: [40, 20, 28, 35, 20, 50, 55, null],
                backgroundColor: '#34d399',
            },
            {
                label: 'Set 4',
                data: [null, 15, 25, 30, 10, 35, 40, null],
                backgroundColor: '#6ee7b7',
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 0
        },
        plugins: {
            title: {
                // display: true,
                text: 'This Is A Test Chart',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                padding: {
                    bottom: 20,
                },
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                stacked: true,
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            }
        }
    }
</script>

<template>
    <Bar :data="data" :options="options" />
</template>