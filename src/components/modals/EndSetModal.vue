<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import Button from '@/components/form/Button.vue'

  import { useRouter } from 'vue-router'
  import { useModalStore } from '@/stores/modalStore'
  import { useExerciseStore } from '@/stores/exerciseStore'
  import { reactive } from 'vue'

  const router = useRouter()
  const modal = useModalStore()
  const exercise = useExerciseStore()
  const now = new Date()

  const set = reactive({
    exercise: localStorage.getItem('exercise') || null,
    muscle: localStorage.getItem('muscle') || null,
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
    now.setSeconds(now.getSeconds() + 30)
    localStorage.setItem('end_rest_at', now.toISOString())
  }
</script>

<template>
    <div class="bg-white space-y-8 p-8 rounded-xl">
        <form @submit.prevent="saveThisSet">
            <div>
                <input v-model="set.weight_level" type="text" placeholder="weight" required>
            </div>
            <div>
                <input v-model="set.reps" type="text" placeholder="reps" required>
            </div>
            <Button>Take a short break</Button>
        </form>
        <CloseButton />
    </div>
</template>