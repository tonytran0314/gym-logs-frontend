<script setup>
</script>

<template>
    <div class="w-full min-h-dvh pt-16 pl-4 pr-4 lg:flex lg:items-center lg:justify-center bg-white dark:bg-gray-900">
        <div class="space-y-6 w-full flex flex-col items-center bg-white dark:bg-gray-900">
            <p class="uppercase text-3xl leading-9 font-bold text-center text-gray-900 dark:text-blue-50">
                gym<span class="text-emerald-600 dark:text-emerald-400">logx</span>
            </p>
            <div class="w-full h-auto rounded-lg p-4 sm:p-8 border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800 sm:max-w-lg">
                <router-view />
            </div>
        </div>
    </div>
</template>