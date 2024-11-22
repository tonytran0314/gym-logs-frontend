<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import Button from '@/components/form/Button.vue'
  import MuscleSelection from '@/components/workout/MuscleSelection.vue'
  import ExerciseSelection from '@/components/workout/ExerciseSelection.vue'

  import { useExerciseStore } from '@/stores/exerciseStore'
  import { useModalStore } from '@/stores/modalStore'

  const modal = useModalStore()

  const exercise = useExerciseStore()

  const startExercise = () => {
    exercise.start()
    modal.close()
  }
</script>

<template>
    <div class="bg-white dark:bg-gray-800 space-y-8 p-8 rounded-xl">
      <CloseButton />

      <h3 class="text-3xl font-bold text-gray-900 dark:text-blue-50">Choose your exercises for today</h3>
      
      <form @submit.prevent="startExercise" class="flex space-x-8">

        <Suspense>
          <div>
            <MuscleSelection />
            <ExerciseSelection />
          </div>
          <template #fallback>Loading muscles...</template>
        </Suspense>

        <Button>Start</Button>
      </form>
    </div>
</template>
