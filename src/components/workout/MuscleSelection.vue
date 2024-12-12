<script setup>
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { useRouter } from 'vue-router'
    import CloseButton from '@/components/modals/CloseButton.vue'

    const exercise = useExerciseStore()
    const storage = import.meta.env.VITE_PUBLIC
    const router = useRouter()

    const selectMuscle = (muscleID) => {
        exercise.tempStoreMuscle(muscleID) 
        exercise.getExercises()
        router.push({ name: 'Exercise Selection Screen' })
    }

    const exit = () => {
      router.push({ name: 'Home' })
    }

    await exercise.getMuscles()
</script>

<template>
    
    <div class="flex flex-col items-center gap-10">
      <div class="space-y-4">
        <div class="flex justify-end">
          <CloseButton @click="exit" />
        </div>
        <h3 class="text-3xl text-center font-bold text-gray-900 dark:text-blue-50">Choose the muscle you want to workout today</h3>
      </div>

      <div class="flex flex-wrap justify-center gap-6 h-80">
        <div v-for="muscle in exercise.muscles" :key="muscle.id" @click="selectMuscle(muscle.id)" class="w-40 h-[160px] bg-white text-gray-900 dark:text-blue-50 dark:bg-gray-800 rounded-xl py-6 px-10 hover:cursor-pointer hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 flex flex-col items-center justify-center gap-3">
          <div>
            <img class="w-16" :src="storage + '/' + muscle.image" alt="muscle image">
          </div>
          <p class="capitalize">{{ muscle.name }}</p>
        </div>
      </div>
    </div>

</template>
