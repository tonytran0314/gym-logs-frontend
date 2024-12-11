<script setup>
    import Quote from '@/components/dashboard/Quote.vue'
    import LineChart from '@/components/dashboard/charts/LineChart.vue'
    import PieChart from '@/components/dashboard/charts/PieChart.vue'
    import Archivement from '@/components/dashboard/archivements/Container.vue'
    import DashboardLoadingAnimation from '@/components/loading_animation/Dashboard.vue'
</script>

<template>
    <div>

    <!-- CHARTS -->
    <!-- Nhìn chart cũng không aesthetic lắm, cân nhắc thay chart khác -->
        <Suspense>
            <div class="space-y-6">
                <Archivement />
                <div class="flex gap-6 w-full ">
                    <div class="w-2/3 bg-white dark:bg-gray-800 rounded-2xl p-8 flex-grow"><LineChart /></div>
                    <div class="w-1/3 bg-white dark:bg-gray-800 rounded-2xl p-8 flex-grow"><PieChart /></div>
                </div>

                <div class="bg-white p-8 rounded-2xl dark:bg-gray-800 dark:text-blue-50">
                    <p>"I do a one-hour workout called Drenched, a cardio-boxing fitness routine, Monday through Friday. There are usually between twenty-five and fifty people there - everyone from stay-at-home moms and professional martial artists to teenagers and seniors. They play great dance music. When I can, I take two classes back-to-back." - Carrie Ann Inaba</p>
                </div>
            </div>
            <template #fallback>
                <DashboardLoadingAnimation />
            </template>
        </Suspense>
    </div>


    <!-- Quote with api -->
    <!-- <Suspense>
        <Quote />

        <template #fallback>
            Loading quote...
        </template>
    </Suspense> -->
</template>