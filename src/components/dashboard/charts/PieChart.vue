<script setup>
  import { Pie } from 'vue-chartjs'
  import { useChartStore } from '@/stores/chartStore'
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
  
  const chart = useChartStore()
  await chart.getPieData()

  const chartData = {
    labels: (chart.pieChartData === null) ? null : chart.pieChartData.muscle_groups,
    datasets: [
      {
        label: 'My Dataset',
        data: (chart.pieChartData === null) ? null : chart.pieChartData.counts,
        backgroundColor: ['#059669', '#10b981', '#34d399', '#6ee7b7', '#D1FAE5'],
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
        text: 'Muscle Groups',
        font: {
          size: 18,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
        color: document.documentElement.classList.contains('dark') ? '#eff6ff' : '#6b7280'
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const total = dataset.data.reduce((sum, value) => sum + value, 0);
            const percentage = ((currentValue / total) * 100).toFixed(1) + '%';
            return `${tooltipItem.label}: ${percentage}`;
          },
        },
      },
    },
  };
</script>

<template>
    <div v-if="chart.pieChartData !== null" class="flex justify-center items-center h-full">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
    
    <div v-else class="flex flex-col items-center justify-center h-full gap-8">
      <div class="bg-blue-50 dark:bg-gray-700 rounded-full p-4">
        <font-awesome-icon :icon="['fas', 'chart-pie']" class="text-gray-400 dark:text-gray-300 size-12" />
      </div>
      <div class="flex flex-col items-center gap-2 text-center">
        <p class="text-gray-900 dark:text-blue-50 text-lg font-bold">Not enough data <br> for Muscle Groups Chart</p>
        <p class="hidden xl:block text-gray-500 dark:text-gray-400 text-sm">Please workout by clicking the Workout Now button on the right-top corner.</p>
      </div>
    </div>
</template>
