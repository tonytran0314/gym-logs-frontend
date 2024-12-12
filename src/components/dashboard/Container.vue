<script setup>
    import LineChart from '@/components/dashboard/charts/LineChart.vue'
    import PieChart from '@/components/dashboard/charts/PieChart.vue'
    import Archivement from '@/components/dashboard/archivements/Container.vue'
    import DashboardLoadingAnimation from '@/components/loading_animation/Dashboard.vue'
</script>

<template>
    <div>
        <Suspense>
            <div class="space-y-6">
                <Archivement />
                <div class="flex flex-col md:flex-row gap-6 w-full h-80">
                    <div class="w-full md:w-3/4 h-full bg-white dark:bg-gray-800 rounded-2xl pt-8 pr-8 pl-8 pb-14"><LineChart /></div>
                    <div class="w-full md:w-1/4 h-full bg-white dark:bg-gray-800 rounded-2xl p-8"><PieChart /></div>
                </div>
            </div>
            <template #fallback>
                <DashboardLoadingAnimation />
            </template>
        </Suspense>
    </div>
</template>