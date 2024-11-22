<script setup>
    const props = defineProps(['content'])
</script>

<template>
    <div class="flex justify-between flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl text-gray-900 dark:text-blue-50">
        <div class="flex">
            <slot></slot>
            <div v-for="exercise in content">{{ exercise.name }}</div>
        </div>
        <button class="text-gray-900 dark:text-blue-50 px-4 py-2 rounded-2xl border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white dark:hover:text-blue-50">Details</button>
    </div>
</template>
