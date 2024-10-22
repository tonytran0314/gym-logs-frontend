<script setup>
    import { useAuthStore } from '@/stores/authStore'
    import SpinnerButton from '@/components/form/SpinnerButton.vue'

    const auth = useAuthStore()
</script>

<template>
    <!-- <div>
        <router-link to="/login" class="text-3xl">Login</router-link>
        <router-link to="/signup" class="text-3xl">Signup</router-link>
    </div> -->
    
    <div class="p-8">
        <form @submit.prevent="auth.logout">
            <SpinnerButton label="Đăng xuất" />
        </form>

        <br>
        
        <form @submit.prevent="auth.fetchInfo">
            <button type="submit">Fetch Info</button>
        </form>
    </div>
</template>

<style>
    
</style>