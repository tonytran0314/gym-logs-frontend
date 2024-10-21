<script setup>
    import { useAuthStore } from '@/stores/authStore'

    const auth = useAuthStore()
</script>

<template>
    <div>
        <router-link to="/login" class="text-3xl">Login</router-link>
        <router-link to="/signup" class="text-3xl">Signup</router-link>
    </div>
    
    <form @submit.prevent="auth.logout">
        <button type="submit">Log out</button>
    </form>
    
    <form @submit.prevent="auth.fetchInfo">
        <button type="submit">Fetch Info</button>
    </form>
</template>

<style>
    
</style>