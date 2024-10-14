<script setup>
    import { ref } from 'vue'
    import { useAuthStore } from '@/stores/authStore'

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
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" placeholder="name@mail.com" required="">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" required="">
            </div>
            <button type="submit" class="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng nhập</button>
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