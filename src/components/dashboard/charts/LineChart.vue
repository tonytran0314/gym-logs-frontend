<script setup>
  import { Line } from 'vue-chartjs'
  import { useChartStore } from '@/stores/chartStore'
  import { ref } from 'vue'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    BarElement,
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);
  
  const chart = useChartStore()
  await chart.getLineData()
  
  const chartData = {
    labels: (chart.lineChartData === null) ? null : chart.lineChartData.dates,
    datasets: [
      {
        label: 'Weight',
        data: (chart.lineChartData === null) ? null : chart.lineChartData.weight_levels,
        borderColor: '#059669',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 3,
        tension: 0.3, // Curved line effect
        fill: true,
        pointBackgroundColor: document.documentElement.classList.contains('dark') ? '#a7f3d0' : '#059669',
        pointBorderColor: document.documentElement.classList.contains('dark') ? '#1f2937' : '#fff',
        pointRadius: 8,
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
        display: true,
        title: {
            display: true
        },
        grid: {
          display: false,
        },
        ticks: {
            display: true,
            color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        title: {
            display: true,
        },
        grid: {
          display: true,
          color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'
        },
        ticks: {
            display: false,
        },
      },
    },
  };

  const chartRef = ref(null)
  const selectedExercise = (chart.lineChartData === null) ? ref(null) : ref(chart.lineChartData.exercise.id)
  const selectedPeriod = ref(1)

  const updateChart = async () => {

    await chart.updateLineChart(selectedExercise.value, selectedPeriod.value)

    chartRef.value.chart.config.data.labels = chart.updatedChart.dates
    chartRef.value.chart.config.data.datasets[0].data = chart.updatedChart.weight_levels

    chartRef.value.chart.update()
  }
</script>
  
<template>
  <div v-if="chart.lineChartData !== null" class="h-full flex flex-col items-center">
    <Line ref="chartRef" :data="chartData" :options="chartOptions" />
    <div class="text-lg flex gap-2 items-center">
      <span class="hidden text-sm text-gray-900 dark:text-blue-50">Total weight lifted in lbs of</span>
      <div class="flex gap-2 items-center">
        <select v-model="selectedExercise" @change="updateChart" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600">
          <option v-for="exercise in chart.lineChartData.exercises" :key="exercise.id" :value="exercise.id">{{ exercise.name }}</option>
        </select>
        <span class="text-sm text-gray-900 dark:text-blue-50">in</span>
        <select v-model="selectedPeriod" @change="updateChart" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600">
          <option v-for="period in chart.lineChartData.periods" :key="period.value" :value="period.value">{{ period.label }}</option>
        </select>
      </div>
    </div>
  </div>
  
  <div v-else class="flex flex-col h-full items-center justify-center gap-8">
    <div class="bg-blue-50 dark:bg-gray-700 rounded-full p-5">
      <font-awesome-icon :icon="['fas', 'chart-line']" class="text-gray-400 dark:text-gray-300 size-11" />
    </div>
    <div class="flex flex-col items-center gap-2">
      <p class="text-gray-900 dark:text-blue-50 text-lg font-bold text-center">Not enough data <br>for Weight Levels Chart</p>
      <p class="hidden xl:block text-gray-500 dark:text-gray-400 text-sm">Please workout by clicking the Workout Now button on the right-top corner.</p>
    </div>
  </div>
</template>
  