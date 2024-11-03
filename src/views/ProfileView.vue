<script setup>
    import { useAuthStore } from '@/stores/authStore'
    import { useModalStore } from '@/stores/modalStore'
    
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Button from '@/components/form/Button.vue'
    import StartExerciseModal from '@/components/modals/StartExerciseModal.vue'

    const auth = useAuthStore()
    const modal = useModalStore()

    const startExerciseDay = () => {
        modal.open(StartExerciseModal)
    }
</script>

<template>
    <div class="p-8 space-y-8">
        <div class="space-x-8">
            <router-link to="/login" class="text-3xl">Login</router-link>
            <router-link to="/signup" class="text-3xl">Signup</router-link>
        </div>
    
        <form @submit.prevent="auth.logout">
            <LoadingButton v-if="auth.isLoading" />
            <Button v-else>Đăng xuất</Button>
        </form>

        <button @click="startExerciseDay" type="button" class="border py-4 px-8 bg-emerald-600 text-white rounded-lg">Workout now</button>

        <form @submit.prevent="auth.fetchInfo">
            <button type="submit">Fetch Info</button>
        </form>
    </div>
</template>

<style>
    
</style>