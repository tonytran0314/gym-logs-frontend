<script setup>
    import { useHistoryStore } from '@/stores/historyStore'
    import CloseButton from '@/components/modals/CloseButton.vue'

    const history = useHistoryStore()
</script>

<template>
    <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-50 p-8 rounded-2xl space-y-8">
        <div class="space-y-2">
            <div class="flex justify-end">
                <CloseButton />
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-bold text-3xl">Workout History Details</div>
                <div class="text-2xl">
                    {{ history.details.time.day }},
                    {{ history.details.time.date }},
                    {{ history.details.time.year }}
                </div>
            </div>
        </div>
        <div class="space-y-6">
            <div v-for="exercise in history.details.exercises" class="flex flex-col gap-6">
                <div class="bg-gray-300 dark:bg-gray-600 w-full h-[1px]"></div>
                <div class="flex items-start gap-6">
                    <div class="flex">
                        <p class="bg-emerald-600 text-white px-4 py-1 rounded-full capitalize">{{ exercise.muscle }}</p>
                    </div>
                    <div class="space-y-3 text-gray-900 dark:text-blue-50">
                        <p class="font-bold">{{ exercise.name }}:</p>
                        <div v-for="set in exercise.sets" class="flex">
                            <p>Set {{ set.set_number }}:&nbsp;</p>
                            <p>{{ set.weight_lbs }} lbs x&nbsp;</p>
                            <p>{{ set.reps }} reps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
