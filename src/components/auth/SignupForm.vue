<script setup>
    
</script>

<template>
    <div class="space-y-4 md:space-y-6">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Tạo tài khoản</h1>
        <form class="space-y-4 md:space-y-6">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" placeholder="name@mail.com" required="">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" required="">
            </div>
            <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Nhập lại mật khẩu</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" required="">
            </div>
            <button type="submit" class="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo tài khoản</button>
            <p class="text-sm font-light text-gray-500">
                Bạn đã có tài khoản? 
                <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập ở đây</router-link>
            </p>
        </form>
    </div>
</template>

<style>
    
</style>