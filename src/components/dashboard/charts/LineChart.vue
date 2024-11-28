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
    labels: chart.lineChartData.dates,
    datasets: [
      {
        label: 'Weight',
        data: chart.lineChartData.weight_levels,
        borderColor: '#059669',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 3,
        tension: 0.3, // Curved line effect
        fill: true,
        pointBackgroundColor: '#059669',
        pointBorderColor: '#fff',
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

  const chartRef = ref(null)
  const selectedExercise = ref(chart.lineChartData.exercise.id)
  const selectedPeriod = ref(1)

  const updateChart = async () => {

    await chart.updateLineChart(selectedExercise.value, selectedPeriod.value)

    chartRef.value.chart.config.data.labels = chart.updatedChart.dates
    chartRef.value.chart.config.data.datasets[0].data = chart.updatedChart.weight_levels

    chartRef.value.chart.update()
  }
</script>
  
<template>
    <div class="h-96 flex flex-col items-center">
      <Line ref="chartRef" :data="chartData" :options="chartOptions" />
      <div class="text-lg flex gap-10">
        <!-- <span>Total weight lifted in lbs:</span> -->
        <div class="flex gap-10">
          <select v-model="selectedExercise" @change="updateChart">
            <option v-for="exercise in chart.lineChartData.exercises" :key="exercise.id" :value="exercise.id">{{ exercise.name }}</option>
          </select>
          <select v-model="selectedPeriod" @change="updateChart">
            <option v-for="period in chart.lineChartData.periods" :key="period.value" :value="period.value">{{ period.label }}</option>
          </select>
        </div>
      </div>
    </div>
</template>
  