<script setup>
    import { useHistoryStore } from '@/stores/historyStore'
    import { useModalStore } from '@/stores/modalStore'
    import HistoryDetailModal from '@/components/modals/HistoryDetailModal.vue'
    import { Button } from '@/components/ui/button'
    import { Badge } from '@/components/ui/badge'

    const props = defineProps(['record'])
    const history = useHistoryStore()
    const modal = useModalStore()

    const showHistoryDetails = () => {
        history.details = props.record
        modal.open(HistoryDetailModal)
    }
</script>

<template>
    <div class="flex flex-col lg:flex-row lg:justify-between gap-8 bg-white dark:bg-gray-800 p-8 rounded-2xl text-gray-900 dark:text-blue-50">
        <div class="flex flex-col lg:flex-row gap-8 w-full">
            <div class="flex lg:flex-col gap-2 items-center text-2xl text-gray-900 dark:text-blue-50">
                <p class="lg:text-3xl lg:font-bold text-gray-900 dark:text-blue-50">{{ record.time.day }}<span class="lg:hidden">,</span></p>
                <p class="lg:text-2xl text-gray-500 dark:text-gray-400 text-center">{{ record.time.date }}</p>
            </div>
            <div class="hidden lg:block bg-gray-300 dark:bg-gray-600 w-[1px]"></div>
            <div class="flex flex-col gap-6 max-h-36 line-clamp-3 w-full">
                <div v-for="exercise in record.exercises" class="flex items-center text-gray-900 dark:text-blue-50 gap-3">
                    <Badge>{{ exercise.muscle }}</Badge>
                    <div class="flex justify-between w-full">
                        <p class="min-w-24 max-w-28 sm:max-w-48 overflow-hidden whitespace-nowrap text-ellipsis">{{ exercise.name }}</p>
                        <p>x {{ exercise.sets.length }} set(s)</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Button @click="showHistoryDetails" variant="outline">Details</Button>
        </div>
    </div>
</template>
