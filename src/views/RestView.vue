<script setup>
    import Button from '@/components/form/Button.vue'

    import { useRouter } from 'vue-router'
    import { useExerciseStore } from '@/stores/exerciseStore'
    
    const router = useRouter()
    const exercise = useExerciseStore()

    const stopExercise = () => {
        exercise.stopExercise()
    }

    const gotoNextSet = () => {
        router.push({ name: 'On Set Screen' })
    }
</script>

<template>
    <div>
        <p>This is rest view.</p>
        <Button @click="stopExercise">Stop the exercise</Button>
        <Button @click="gotoNextSet">Next set</Button>
    </div>
</template>