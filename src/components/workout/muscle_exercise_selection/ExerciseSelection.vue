<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'

    const exercise = useExerciseStore()

    const backToPreviousStep = () => {
        exercise.currentStep--
    }

    const startExercise = () => { 
        exercise.start()
    }

    const chooseThisExercise = (exerciseID) => {
      exercise.record.exercise = exerciseID
    }

    const isChosenExercise = (exerciseID) => exercise.record.exercise === exerciseID 

</script>

<template>
  <div class="space-y-12">
    <div class="flex flex-wrap justify-center gap-6 h-72">
      <div v-for="exercise in exercise.exercises" @click="chooseThisExercise(exercise.id)" :key="exercise.id"  class="bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 hover:cursor-pointer border-2 dark:hover:border-emerald-600 capitalize" :class="isChosenExercise(exercise.id) ? 'border-emerald-600' : 'border-gray-800' ">
        {{ exercise.name }}
      </div>
    </div>
    <div class="flex justify-end gap-6">
      <div @click="backToPreviousStep" class="text-gray-900 dark:text-blue-50 cursor-pointer bg-gray-500 px-6 py-2 rounded-lg hover:bg-gray-600">Back</div>
      <div @click="startExercise" class="text-gray-900 dark:text-blue-50 cursor-pointer bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-700 disabled">Start Exercise</div>
    </div>
  </div>
</template>
