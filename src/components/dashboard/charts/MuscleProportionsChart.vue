<script setup>
  import { DonutChart } from '@/components/ui/chart-donut'
  import { useChartStore } from '@/stores/chartStore'
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const chart = useChartStore()
  const hasMuscleData = true // For demo purposes

  const generateColors = (count) => {
    const baseColors = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#D1FAE5', '#a7f3d0']
    const colors = []
    for (let i = 0; i < count; i++) {
        colors.push(baseColors[i % baseColors.length])
    }
    return colors
  }

  await chart.getPieData()
</script>

<template>
  <Card class="h-full">
    <CardHeader>
      <CardTitle class="text-xl font-semibold text-center">Muscle Groups Distribution (%)</CardTitle>
    </CardHeader>
    <CardContent>
      <div v-if="hasMuscleData" class="flex flex-col items-center gap-6">
        <div class="w-full max-w-md">
          <DonutChart
            index="name"
            :category="'total'"
            :data="chart.pieChartData"
            :type="'pie'"
            :colors="generateColors(chart.pieChartData.length)"
          />
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center gap-8 py-12">
        <div class="bg-blue-50 dark:bg-gray-700 rounded-full p-5">
          <font-awesome-icon :icon="['fas', 'chart-pie']" class="text-gray-400 dark:text-gray-300 size-11" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <p class="text-gray-900 dark:text-blue-50 text-lg font-bold text-center">
            Not enough data<br>for Muscle Distribution Chart
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-sm text-center">
            Please workout by clicking the Workout Now button on the top.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
