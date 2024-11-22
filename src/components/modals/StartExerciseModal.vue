<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import MuscleSelection from '@/components/workout/MuscleSelection.vue'
  import ExerciseSelection from '@/components/workout/ExerciseSelection.vue'

  import { useExerciseStore } from '@/stores/exerciseStore'

  const exercise = useExerciseStore()

</script>

<template>
  <div class="bg-white dark:bg-gray-800 space-y-8 p-8 rounded-xl">
    <CloseButton />

    <h3 class="text-3xl text-center font-bold text-gray-900 dark:text-blue-50">Choose the muscle you want to workout today</h3>
    
    <Suspense>
      <div>
        <MuscleSelection v-if="exercise.currentStep === 1" />
        <ExerciseSelection v-else-if="exercise.currentStep === 2" />
      </div>
      <template #fallback>Loading muscles...</template>
    </Suspense>

  </div>
</template>
