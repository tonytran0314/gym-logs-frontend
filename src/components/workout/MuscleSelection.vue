<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()

    await exercise.getMuscles()
</script>

<template>
    <div class="flex flex-col">
        <select @change="exercise.getExercises" v-model="exercise.record.muscle" class="border bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-50" id="muscle" required>
            <option value="" disabled selected>Choose the muscle</option>
            <option v-for="muscle in exercise.muscles" :value="muscle.id" :key="muscle.id" class="capitalize">{{ muscle.name }}</option>
        </select>
    </div>
</template>
