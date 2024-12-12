<script setup>
    import { useRouter } from 'vue-router'
    import { useExerciseStore } from '@/stores/exerciseStore'
    import { reactive } from 'vue'

    import RestIllustration from '@/components/workout/illustrations/Rest.vue' 
    
    const restCountdown = reactive({
        minutes: null,
        seconds: null
    })

    const router = useRouter()
    const exercise = useExerciseStore()

    const stopExercise = () => {
        exercise.stop()
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
            restCountdown.minutes = '00'
            restCountdown.seconds = '00'
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
    <div class="flex gap-8 flex-col lg:flex-row items-center">
        <RestIllustration class="w-40 md:w-52 lg:w-96" />
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl flex flex-col items-center gap-10 justify-between">
            <p class="text-gray-900 dark:text-blue-50 text-2xl sm:text-3xl lg:text-4xl font-bold">Take a short break ...</p>
            <p class="text-gray-900 dark:text-blue-50 text-7xl sm:text-8xl lg:text-9xl">{{ restCountdown.minutes }}:{{ restCountdown.seconds }}</p>


            <div class="flex flex-col-reverse md:flex-row gap-4">
                <div @click="stopExercise" class="text-gray-900 dark:text-blue-50 cursor-pointer bg-gray-500 px-6 py-2 rounded-lg hover:bg-gray-600">Stop the Exercise</div>
                <div @click="gotoNextSet" class="text-gray-900 dark:text-blue-50 cursor-pointer bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-700 disabled">Next Set</div>
            </div>
        </div>
    </div>
</template>