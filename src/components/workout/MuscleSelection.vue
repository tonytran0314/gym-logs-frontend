<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()

    const selectMuscle = (event) => {
        exercise.record.muscle = event.currentTarget.getAttribute('data-muscle-id')
        exercise.getExercises()
        exercise.currentStep++
    }

    await exercise.getMuscles()
</script>

<template>
    <div class="flex flex-wrap justify-center gap-6">
      <div v-for="muscle in exercise.muscles" :key="muscle.id" @click="selectMuscle" :data-muscle-id="muscle.id" class="bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-900 rounded-xl py-6 px-10 hover:cursor-pointer dark:hover:bg-emerald-600 capitalize">
        {{ muscle.name }}
      </div>
    </div>
</template>
