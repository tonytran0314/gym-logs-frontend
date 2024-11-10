<script setup>
    import { ref } from 'vue'
    import { useAuthStore } from '@/stores/authStore'
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Input from '@/components/form/Input.vue'
    import Button from '@/components/form/Button.vue'
    import Error from '@/components/form/Error.vue'

    const email = ref(null)
    const password = ref(null)

    const auth = useAuthStore()

    const loginHandle = () => {
        auth.login(email.value, password.value)
    }
</script>

<template>
    <div class="space-y-4 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Đăng nhập</h1>
        <form @submit.prevent="loginHandle" class="space-y-4 md:space-y-6">
            <Input
                v-model="email"
                label="Email"
                type="email"
                name="email"
                placeholder="name@mail.com" />
            <Error v-show="auth.errors.email">{{ auth.errors.email }}</Error>
            
            <Input
                v-model="password"
                label="Mật khẩu"
                type="password"
                name="password"
                placeholder="••••••••" />
            <Error v-show="auth.errors.password">{{ auth.errors.password }}</Error>


            <Error v-show="auth.errors.message">{{ auth.errors.message }}</Error>

            
            <LoadingButton v-if="auth.isLoading" class="w-full" />
            <Button v-else class="w-full">Đăng nhập</Button>

            <p class="text-sm font-light text-gray-500">
                Bạn chưa có tài khoản? 
                <router-link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Đăng ký ở đây
                </router-link>
            </p>
        </form>
    </div>
</template>

<style>
    
</style>