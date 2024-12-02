<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { useRouter } from 'vue-router'
    import CloseButton from '@/components/modals/CloseButton.vue'

    const exercise = useExerciseStore()
    const router = useRouter()

    const backToPreviousStep = () => {
      router.push({ name: 'Muscle Selection Screen' })
    }

    const startExercise = () => { 
        exercise.start()
    }

    const chooseThisExercise = (exerciseID) => {
      exercise.record.exercise = exerciseID
    }

    const isChosenExercise = (exerciseID) => exercise.record.exercise === exerciseID 

    const exit = () => {
      router.push({ name: 'Home' })
    }

</script>

<template>

  <div class="flex flex-col items-center gap-10">
    <div class="space-y-4">
      <div class="flex justify-end">
        <CloseButton @click="exit" />
      </div>
      <h3 class="text-3xl text-center font-bold text-gray-900 dark:text-blue-50">Choose the exercise you want to workout today</h3>
    </div>

    <div class="space-y-12">
      <div class="flex flex-wrap justify-center gap-6 h-72">
        <div 
          v-for="exercise in exercise.exercises" 
          @click="chooseThisExercise(exercise.id)" 
          :key="exercise.id"  
          class="bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 hover:cursor-pointer border-2 hover:border-emerald-600 dark:hover:border-emerald-600 capitalize" 
          :class="isChosenExercise(exercise.id) ? 'border-emerald-600' : 'border-white dark:border-gray-800' ">
          {{ exercise.name }}
        </div>
      </div>
      <div class="flex justify-end gap-6">
        <div @click="backToPreviousStep" class="text-white dark:text-blue-50 cursor-pointer bg-gray-500 px-6 py-2 rounded-lg hover:bg-gray-600">Back</div>
        <div @click="startExercise" class="text-white dark:text-blue-50 cursor-pointer bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-700">Start Exercise</div>
      </div>
    </div>
  </div>

</template>
