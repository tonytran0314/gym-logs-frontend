<script setup>
    import Quote from '@/components/dashboard/Quote.vue'
    import LineChart from '@/components/dashboard/charts/LineChart.vue'
    import PieChart from '@/components/dashboard/charts/PieChart.vue'
    import Archivement from '@/components/dashboard/archivements/Container.vue'
</script>

<template>
    <div class="space-y-6">

    <!-- CHARTS -->
    <!-- Nhìn chart cũng không aesthetic lắm, cân nhắc thay chart khác -->
        <Suspense>
            <Archivement />
            <template #fallback>Loading archievement ...</template>
        </Suspense>
        <!-- <div class="flex gap-6 flex-wrap w-full">
            <div class="w-full lg:flex-[2] bg-white dark:bg-gray-800 p-4 md:p-8 rounded-2xl">
                <Suspense>
                
                    <LineChart />

                    <template #fallback>Loading chart...</template>

                </Suspense>
            </div>
            <div class="w-full flex lg:flex-1 flex-col gap-6">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl">
                    <Suspense>
                    
                        <PieChart />

                        <template #fallback>Loading chart...</template>

                    </Suspense>
                </div>
            </div>
        </div> -->

    

    <!-- QUOTE -->
        <div class="bg-white p-8 rounded-2xl dark:bg-gray-800 dark:text-blue-50">
            <p>"I do a one-hour workout called Drenched, a cardio-boxing fitness routine, Monday through Friday. There are usually between twenty-five and fifty people there - everyone from stay-at-home moms and professional martial artists to teenagers and seniors. They play great dance music. When I can, I take two classes back-to-back." - Carrie Ann Inaba</p>
            <!-- <Suspense>
                <Quote />

                <template #fallback>
                    Loading quote...
                </template>
            </Suspense> -->
        </div>
    </div>
</template>