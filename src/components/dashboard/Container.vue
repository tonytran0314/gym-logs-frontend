<script setup>
    import { useAuthStore } from '@/stores/authStore'
    import { useModalStore } from '@/stores/modalStore'
    
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Button from '@/components/form/Button.vue'
    import StartExerciseModal from '@/components/modals/StartExerciseModal.vue'
    import Quote from '@/components/dashboard/Quote.vue'
    import TestChart from '@/components/charts/TestChart.vue'

    const auth = useAuthStore()
    const modal = useModalStore()

    const startExerciseDay = () => {
        modal.open(StartExerciseModal)
    }
</script>

<template>
    <div>
        <div class="space-y-8">
            <p class="text-5xl">This is Home View</p>
            <router-link :to="{ name: 'Profile' }" class="text-blue">Profile</router-link>
        </div>
        <!-- <Suspense>
            <Quote />

            <template #fallback>
                Loading quote...
            </template>
        </Suspense> -->

        <form @submit.prevent="auth.logout">
            <LoadingButton v-if="auth.isLoading" />
            <Button v-else>Đăng xuất</Button>
        </form>

        <button @click="startExerciseDay" type="button" class="border py-4 px-8 bg-emerald-600 text-white rounded-lg">Workout now</button>

        <form @submit.prevent="auth.fetchInfo">
            <button type="submit">Fetch Info</button>
        </form>

        <TestChart />
    </div>
</template>

<style>
    
</style>