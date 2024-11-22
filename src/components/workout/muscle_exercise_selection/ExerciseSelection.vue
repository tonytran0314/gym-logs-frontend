<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()

    const backToPreviousStep = () => {
        exercise.currentStep--
    }

    const startExercise = (event) => {
        exercise.record.exercise = event.currentTarget.getAttribute('data-exercise-id')
        exercise.start()
    }
</script>

<template>
    <div class="flex flex-wrap justify-center gap-6">
      <div v-for="exercise in exercise.exercises" :key="exercise.id" @click="startExercise" :data-exercise-id="exercise.id" class="bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 hover:cursor-pointer dark:hover:bg-emerald-600 capitalize">
        {{ exercise.name }}
      </div>
    </div>
    <div @click="backToPreviousStep" class="text-gray-900 dark:text-blue-50 cursor-pointer hover:underline">Back</div>
</template>
