<script setup>
    import Button from '@/components/form/Button.vue'

    import { useRouter } from 'vue-router'
    
    const router = useRouter()

    const stopExercise = () => {
        router.push({ name: 'Profile' })
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