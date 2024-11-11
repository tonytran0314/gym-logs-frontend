<script setup>
  import { Pie } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  // Register necessary components from Chart.js
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);
  
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 0,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Pie Chart Example',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
      },
    },
  };
</script>

<template>
    <div class="chart-container">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>

<style scoped>
  .chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
  }
  
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
</style>
  