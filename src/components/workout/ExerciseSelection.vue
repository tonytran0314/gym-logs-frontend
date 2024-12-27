<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { useRouter } from 'vue-router'
    import CloseButton from '@/components/modals/CloseButton.vue'
import { onMounted } from 'vue';

    const exercise = useExerciseStore()
    const router = useRouter()

    const backToPreviousStep = () => {
      router.push({ name: 'Muscle Selection Screen' })
    }

    const startExercise = (exerciseID) => { 
      exercise.tempStoreExercise(exerciseID)
      exercise.start()
    }

    const exit = () => {
      router.push({ name: 'Dashboard' })
    }

    onMounted(() => {
      exercise.record.exercise = localStorage.getItem('exercise_id')
      exercise.getExercises()
    })

</script>

<template>

  <div class="flex flex-col items-center gap-10">
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <div @click="backToPreviousStep" class="size-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-900 dark:text-blue-50" size="lg" />
        </div>
        <CloseButton @click="exit" />
      </div>
      <h3 class="text-3xl text-center font-bold text-gray-900 dark:text-blue-50">Choose the exercise you want to workout today</h3>
    </div>

    <div class="flex flex-wrap justify-center gap-6 h-72">
      <div 
        v-for="exercise in exercise.exercises" 
        @click="startExercise(exercise.id)" 
        :key="exercise.id"  
        class="bg-white shadow-md text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 cursor-pointer capitalize hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white">
        {{ exercise.name }}
      </div>
    </div>
  </div>

</template>
