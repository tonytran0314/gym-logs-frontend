<script setup>
    import Button from '@/components/form/Button.vue'
    import EmptyIllustration from '@/components/history/EmptyIllustration.vue'
    import { useRouter } from 'vue-router'
    
    const router = useRouter()

    const selectMuscleAndExercise = () => {
        router.push({ name: 'Muscle Selection Screen' })
    }
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-8 w-full h-[calc(100vh-152px)] bg-white dark:bg-gray-800 p-8 rounded-2xl text-gray-900 dark:text-blue-50">
        <div class="bg-blue-50 dark:bg-gray-900 rounded-full">
            <EmptyIllustration class="w-96" />
        </div>
        <div class="flex flex-col items-center gap-4">
            <div class="text-3xl font-bold">
                No History Yet
            </div>
            <div class="flex flex-col items-center text-gray-500 dark:text-gray-300">
                <p>You currently do not have a history of workout days.</p>
                <p>You can workout now.</p>
            </div>
        </div>
        
        <Button @click="selectMuscleAndExercise" class="flex gap-2 items-center">
            <font-awesome-icon :icon="['fas', 'dumbbell']" class="size-6" />
            <span>Workout now</span>
        </Button>
    </div>
</template>