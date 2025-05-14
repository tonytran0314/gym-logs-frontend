<script setup>
    import LineChart from '@/components/dashboard/charts/LineChart.vue'
    import PieChart from '@/components/dashboard/charts/PieChart.vue'
    import Achievement from '@/components/dashboard/achievements/Container.vue'
    import DashboardLoadingAnimation from '@/components/loading_animation/Dashboard.vue'
    
import { Button } from '@/components/ui/button'
import { MailOpen } from 'lucide-vue-next'
</script>

<template>
    <div>
        <Suspense>
            <div class="space-y-6">
  <Button>
    <MailOpen class="w-4 h-4 mr-2" /> Login with Email
  </Button>
                <Achievement />
                <div class="flex flex-col xl:flex-row gap-6 w-full h-96 text-center">
                    <div class="w-full xl:w-3/4 h-96 bg-white dark:bg-gray-800 rounded-2xl pt-8 pr-8 pl-8 pb-14"><LineChart /></div>
                    <div class="w-full xl:w-1/4 h-96 bg-white dark:bg-gray-800 rounded-2xl p-8"><PieChart /></div>
                </div>
            </div>
            <template #fallback>
                <DashboardLoadingAnimation />
            </template>
        </Suspense>
    </div>
</template>