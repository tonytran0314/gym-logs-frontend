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
                    'rgba(255, 99, 132, 0.6)', // Red
                    'rgba(54, 162, 235, 0.6)', // Blue
                    'rgba(255, 206, 86, 0.6)', // Yellow
                    'rgba(75, 192, 192, 0.6)', // Green
                    'rgba(153, 102, 255, 0.6)', // Purple
                    'rgba(255, 159, 64, 0.6)', // Orange
                    'rgba(201, 203, 207, 0.6)', // Grey
                    'rgba(123, 239, 178, 0.6)', // Light Green
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
                display: true,
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