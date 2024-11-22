<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'
    
    const exercise = useExerciseStore()

    await exercise.getCurrentExercise()
</script>

<template>
    <div class="space-y-10">
        <p class="text-4xl font-bold">Working out...</p>
        <div class="flex flex-col gap-6 justify-center items-center">
            <p class="text-3xl">{{ exercise.currentExercise.name }}</p>
            <p class="text-5xl font-bold">Set #{{ exercise.currentExercise.set }}</p>
        </div>
    </div>
</template>