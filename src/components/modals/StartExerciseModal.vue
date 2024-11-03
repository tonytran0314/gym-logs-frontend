<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import Button from '@/components/form/Button.vue'

  import { useExerciseStore } from '@/stores/exerciseStore'
  import { storeToRefs } from 'pinia'
  import { reactive } from 'vue'
  import { useModalStore } from '@/stores/modalStore'

  const modal = useModalStore()

  const exerciseStore = useExerciseStore()
  const { exercises } = storeToRefs(exerciseStore)

  const exerciseRecord = reactive({
    muscle: '',
    exercise: ''
  })

  const selectMuscle = (event) => {
    const muscle = event.target.value
    exerciseStore.getExercises(muscle)
  }

  const startExercise = () => {
    exerciseStore.startExercise(exerciseRecord)
    modal.close()
  }
</script>

<template>
    <div class="bg-white space-y-8 p-8 rounded-xl">
      <CloseButton />

      <h3 class="text-3xl font-bold">Choose your exercises for today</h3>
      
      <form @submit.prevent="" class="flex space-x-8">

        <div class="flex flex-col">
          <select @change="selectMuscle" v-model="exerciseRecord.muscle" class="border" id="muscle">
            <option value="" disabled selected>Choose the muscle</option>
            <option value="abdominals">abdominals</option>
            <option value="abductors">abductors</option>
            <option value="adductors">adductors</option>
            <option value="biceps">biceps</option>
            <option value="calves">calves</option>
            <option value="chest">chest</option>
            <option value="forearms">forearms</option>
            <option value="glutes">glutes</option>
            <option value="hamstrings">hamstrings</option>
            <option value="lats">lats</option>
            <option value="lower_back">lower back</option>
            <option value="middle_back">middle back</option>
            <option value="neck">neck</option>
            <option value="quadriceps">quadriceps</option>
            <option value="traps">traps</option>
            <option value="triceps">triceps</option>
          </select>
        </div>

        <div class="flex flex-col">
          <select v-model="exerciseRecord.exercise" class="border" id="exercise">
            <option value="" disabled selected>Choose the exercise</option>
            <option v-for="exercise in exercises" :value="exercise.name">{{ exercise.name }}</option>
          </select>
        </div>

        <Button @click="startExercise">Start</Button>

      </form>
    </div>
</template>
