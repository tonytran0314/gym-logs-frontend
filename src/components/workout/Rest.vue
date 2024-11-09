<script setup>
    import Button from '@/components/form/Button.vue'

    import { useRouter } from 'vue-router'
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { reactive } from 'vue'
    
    const restCountdown = reactive({
        minutes: null,
        seconds: null
    })

    const router = useRouter()
    const exercise = useExerciseStore()

    const stopExercise = () => {
        exercise.stopExercise()
    }

    const gotoNextSet = () => {
        router.push({ name: 'On Set Screen' })
    }

    const updateCountdown = () => {
        const now = new Date()
        const endRestAt = new Date(localStorage.getItem('end_rest_at'))
        const remainingTime = endRestAt - now

        if(remainingTime <= 0) {
            clearInterval(countdownInterval)
            return;
        }

        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

        restCountdown.minutes = (minutes < 10) ? `0${minutes}` : minutes
        restCountdown.seconds = (seconds < 10) ? `0${seconds}` : seconds
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
</script>

<template>
    <div>
        <p>This is rest view.</p>
        <p>{{ restCountdown.minutes }}:{{ restCountdown.seconds }}</p>

        <Button @click="stopExercise">Stop the exercise</Button>
        <Button @click="gotoNextSet">Next set</Button>
    </div>
</template>