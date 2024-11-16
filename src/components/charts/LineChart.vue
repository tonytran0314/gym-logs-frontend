<script setup>
  import { Line } from 'vue-chartjs'
  import { useChartStore } from '@/stores/chartStore'
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
  
  const chart = useChartStore()
  await chart.getLineData()
  
  const chartData = {
    labels: chart.lineChartData.dates,
    datasets: [
      {
        label: 'Weight',
        data: chart.lineChartData.weight_levels,
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
        display: false,
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
    <div class="chart-container flex flex-col items-center">
      <Line :data="chartData" :options="chartOptions" />
      <div class="text-lg">
        <span>Total weight lifted of </span>
        <select>
          <option v-for="exercise in chart.lineChartData.exercises" :value="exercise">{{ exercise }}</option>
        </select>
        <span> exercise, in </span>
        <select>
          <option value="asd">asd</option>
        </select>
      </div>
    </div>
</template>

<style scoped>
  .chart-container {
    max-width: 800px;
    margin: 0 auto;
    height: 400px;
  }
</style>
  