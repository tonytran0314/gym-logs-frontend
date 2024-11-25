<script setup>
    const props = defineProps(['record'])
</script>

<template>
    <div class="flex justify-between flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl text-gray-900 dark:text-blue-50 items-center">
        <div class="flex gap-8">
            <div class="flex flex-col gap-2 items-center">
                <p class="text-3xl font-bold text-gray-900 dark:text-blue-50">{{ record.time.day }}</p>
                <p class="text-2xl text-gray-500 dark:text-gray-400">{{ record.time.date }}</p>
            </div>
            <div class="bg-gray-300 dark:bg-gray-600 w-[1px]"></div>
            <div class="flex flex-col gap-6">
                <div v-for="exercise in record.exercises" class="flex items-center text-gray-900 dark:text-blue-50 gap-3">
                    <p>{{ exercise.name }}</p>
                    <p>x {{ exercise.sets.length }} set(s)</p>
                    <p class="bg-gray-300 text-gray-700 dark:text-gray-300 dark:bg-gray-600 px-4 py-1 rounded-full capitalize">{{ exercise.muscle }}</p>
                </div>
            </div>
        </div>
        <button @click="showHistoryDetails" class="text-gray-900 dark:text-blue-50 px-4 py-2 rounded-xl border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white dark:hover:text-blue-50 h-auto">Details</button>
    </div>
</template>
