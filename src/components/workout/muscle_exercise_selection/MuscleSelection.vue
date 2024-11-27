<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()
    const storage = import.meta.env.VITE_PUBLIC

    const selectMuscle = (event) => {
        exercise.record.muscle = event.currentTarget.getAttribute('data-muscle-id')
        exercise.getExercises()
        toNextStep()
    }

    
    const toNextStep = () => {
      exercise.currentStep++
    }

    await exercise.getMuscles()
</script>

<template>
    <div class="flex flex-wrap justify-center gap-6 h-80">
      <div v-for="muscle in exercise.muscles" :key="muscle.id" @click="selectMuscle" :data-muscle-id="muscle.id" class="w-40 h-[160px] bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 hover:cursor-pointer dark:hover:bg-emerald-600 flex flex-col items-center justify-center gap-3">
        <div>
          <img class="w-16" :src="storage + muscle.image" alt="muscle image">
        </div>
        <p class="capitalize">{{ muscle.name }}</p>
      </div>
    </div>
</template>
