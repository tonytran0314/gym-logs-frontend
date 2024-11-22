<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()
</script>

<template>
    <div class="flex flex-col">
        <select v-model="exercise.record.exercise" class="border bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-50" id="exercise" required>
        <option value="" disabled selected>Choose the exercise</option>
        <option v-for="exercise in exercise.exercises" :key="exercise.key" :value="exercise.id">{{ exercise.name }}</option>
        </select>
    </div>
</template>
