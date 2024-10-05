<script setup>
    import { useRoute } from 'vue-router'
    import LoginForm from '@/components/auth/LoginForm.vue'
    import SignupForm from '@/components/auth/SignupForm.vue'

    const route = useRoute()
</script>

<template>
    <div class="w-full h-dvh pt-16 pl-4 pr-4 lg:flex lg:items-center lg:justify-center">
        <div class="space-y-6 w-full flex flex-col items-center">
            <p class="uppercase text-3xl leading-9 font-bold text-center">gymlogs</p>
            <div class="w-full h-auto rounded-lg p-4 sm:p-8 border border-gray-200 sm:max-w-lg">
                <!-- consider using slot -->
                <LoginForm v-if="route.path === '/login'"></LoginForm>
                <SignupForm v-else />
            </div>
        </div>
    </div>
</template>

<style>
    
</style>