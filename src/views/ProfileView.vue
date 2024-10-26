<script setup>
    import { useAuthStore } from '@/stores/authStore'
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Button from '@/components/form/Button.vue'

    const auth = useAuthStore()
</script>

<template>
    <div>
        <router-link to="/login" class="text-3xl">Login</router-link>
        <router-link to="/signup" class="text-3xl">Signup</router-link>
    </div>
    
    <div class="p-8">
        <form @submit.prevent="auth.logout">
            <LoadingButton v-if="auth.isLoading" />
            <Button v-else>Đăng xuất</Button>
        </form>

        <br>
        
        <form @submit.prevent="auth.fetchInfo">
            <button type="submit">Fetch Info</button>
        </form>
    </div>
</template>

<style>
    
</style>