<script setup>
    import { useAuthStore } from '@/stores/authStore'

    const auth = useAuthStore()
</script>

<template>
    <div class="bg-emerald-600 text-white h-dvh flex justify-center items-center text-center space-x-20">
        <router-link to="/login" class="text-3xl">Login</router-link>
        <router-link to="/signup" class="text-3xl">Signup</router-link>
    </div>
</template>

<style>
    
</style>