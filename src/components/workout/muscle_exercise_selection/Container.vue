<script setup>
  import MuscleSelection from '@/components/workout/muscle_exercise_selection/MuscleSelection.vue'
  import ExerciseSelection from '@/components/workout/muscle_exercise_selection/ExerciseSelection.vue'
  import MuscleLoading from '@/components/loading_animation/MuscleSelection.vue'
  import CloseButton from '@/components/modals/CloseButton.vue'

  import { useExerciseStore } from '@/stores/exerciseStore'
  import { useRouter } from 'vue-router'

  const exercise = useExerciseStore()
  const router = useRouter()

  const exit = () => {
    router.push({ name: 'Home' })
  }
</script>

<template>
    <div class="space-y-12 px-48">

        <div class="flex justify-end">
          <CloseButton @click="exit" />
        </div>

        <h3 class="text-3xl text-center font-bold text-gray-900 dark:text-blue-50">Choose the muscle you want to workout today</h3>
    
        <Suspense>
            <div>
                <MuscleSelection v-if="exercise.currentStep === 1" />
                <ExerciseSelection v-else-if="exercise.currentStep === 2" />
            </div>
            <template #fallback>
              <MuscleLoading />
            </template>
        </Suspense>
    </div>
</template>

<style>
    
</style>