<script setup>
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);
  
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 50, 40, 60, 70, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.3, // Curved line effect
        fill: true,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointRadius: 5,
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
        text: 'Monthly Sales Data',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        display: false,
        title: {
            display: false
        },
        grid: {
          display: false,
        },
        ticks: {
            display: false
        },
      },
      y: {
        display: false,
        // beginAtZero: true,
        title: {
            display: false,
        },
        grid: {
          display: false
        },
        ticks: {
            display: false
        },
      },
    },
  };
</script>
  
<template>
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<style scoped>
  .chart-container {
    max-width: 800px;
    margin: 0 auto;
    height: 400px;
  }
</style>
  