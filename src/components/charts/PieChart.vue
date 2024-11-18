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
    labels: chart.pieChartData.muscle_groups,
    datasets: [
      {
        label: 'My Dataset',
        data: chart.pieChartData.counts,
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
        text: 'The distribution ratio of muscle groups',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
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
    <div class="chart-container">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>
