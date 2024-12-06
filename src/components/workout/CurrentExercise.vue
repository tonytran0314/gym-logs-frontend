<script setup>
    import { useModalStore } from '@/stores/modalStore'
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { useRouter } from 'vue-router'
    import Button from '@/components/form/Button.vue'
    import EndSetModal from '@/components/modals/EndSetModal.vue'
    
    const exercise = useExerciseStore()
    const modal = useModalStore()
    const router = useRouter()

    const finishSet = () => {
        modal.open(EndSetModal)
    }

    const backToExerciseSelection = () => {
        router.push({ name : 'Exercise Selection Screen' })
    }

    await exercise.getCurrentExercise()
</script>

<template>
    <div class="flex flex-col h-full justify-between">
        <div class="space-y-10">
            <p class="text-4xl font-bold">Working out...</p>
            <div class="flex flex-col gap-6 justify-center items-center">
                <p class="text-3xl">{{ exercise.currentExercise.name }}</p>
                <p class="text-5xl font-bold">Set #{{ exercise.currentExercise.set }}</p>
            </div>
        </div>
        
        <div class="flex gap-4">
            <div @click="backToExerciseSelection" v-if="exercise.currentExercise.set === 1" class="text-gray-900 dark:text-blue-50 cursor-pointer bg-gray-500 px-6 py-2 rounded-lg hover:bg-gray-600">Back</div>
            <Button @click="finishSet" class="w-full">I Have Finished This Set</Button>
        </div>
    </div>
</template>