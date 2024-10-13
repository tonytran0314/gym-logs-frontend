<script setup>
    import { useAuthStore } from '@/stores/authStore'

    const auth = useAuthStore()
</script>

<template>
    <div>
        This is Profile View
    </div>
    
    <form @submit.prevent="auth.logout">
        <button type="submit">Log out</button>
    </form>
</template>

<style>
    
</style>