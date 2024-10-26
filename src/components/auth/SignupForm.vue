<script setup>
    import { useAuthStore } from '@/stores/authStore'
    import { reactive } from 'vue'
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Input from '@/components/form/Input.vue'
    import Button from '@/components/form/Button.vue'
    import Error from '@/components/form/Error.vue'

    const auth = useAuthStore()

    const form = reactive({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const signupHandle = () => {
        auth.signup(form)
    }
</script>

<template>
    <div class="space-y-4 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create Account</h1>
        <form @submit.prevent="signupHandle" class="space-y-4 md:space-y-6">
            <Input
                v-model="form.name"
                label="Fullname"
                type="text"
                name="name"
                placeholder="Your name" />
            <Error v-show="auth.errors.name">{{ auth.errors.name }}</Error>

            <Input
                v-model="form.email"
                label="Email"
                type="email"
                name="email"
                placeholder="name@mail.com" />
            <Error v-show="auth.errors.email">{{ auth.errors.email }}</Error>
            
            <Input
                v-model="form.password"
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••" />
            <Error v-show="auth.errors.password">{{ auth.errors.password }}</Error>

            <Input
                v-model="form.password_confirmation"
                label="Confirm Password"
                type="password"
                name="confirm-password"
                placeholder="••••••••" />

            
            <LoadingButton v-if="auth.isLoading" />
            <Button v-else >Create Account</Button>


            <p class="text-sm font-light text-gray-500">
                Bạn đã có tài khoản? 
                <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login Here</router-link>
            </p>
        </form>
    </div>
</template>

<style>
    
</style>