<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import Button from '@/components/form/Button.vue'
  import Input from '@/components/form/Input.vue'

  import { useRouter } from 'vue-router'
  import { useModalStore } from '@/stores/modalStore'
  import { useExerciseStore } from '@/stores/exerciseStore'
  import { reactive } from 'vue'

  const router = useRouter()
  const modal = useModalStore()
  const exercise = useExerciseStore()
  const now = new Date()

  const set = reactive({
    exercise_id: localStorage.getItem('exercise_id') || null,
    muscle_id: localStorage.getItem('muscle_id') || null,
    weight_level: null,
    reps: null
  })

  const saveThisSet = () => {
    exercise.saveWorkoutSet(set)
    router.push({ name: 'Rest Screen' })
    modal.close()
    setRestTimeEnd()
  }

  const setRestTimeEnd = () => {
    // 1 minute 30 seconds
    now.setMinutes(now.getMinutes() + 1)
    now.setSeconds(now.getSeconds() + 36)
    localStorage.setItem('end_rest_at', now.toISOString())
  }
</script>

<template>
  <div class="bg-white dark:bg-gray-800 space-y-4 p-8 rounded-xl">

    <div class="flex justify-between">
      <p class="text-3xl text-gray-900 dark:text-blue-50">Pounds and reps</p>
      <CloseButton />
    </div>

    <form @submit.prevent="saveThisSet" class="space-y-6">
      <div class="flex flex-col gap-4 sm:flex-row">
        <Input
          v-model="set.weight_level"
          label="Weight level (lbs)"
          type="text"
          name="weightLevel"
          placeholder="25" />
        <Input
            v-model="set.reps"
            label="Reps"
            type="text"
            name="reps"
            placeholder="18" />
      </div>
      <Button class="w-full">Take a short break</Button>
    </form>
  </div>
</template>