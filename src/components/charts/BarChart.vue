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
                data: [40, 20, 28, 35, 20, 50, 55, 38],
                backgroundColor: [
                    '#059669',
                    '#34D399'
                ],
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
                display: false,
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            y: {
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