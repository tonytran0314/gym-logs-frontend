<script setup>
</script>

<template>
    <div class="w-full h-dvh pt-16 pl-4 pr-4 lg:flex lg:items-center lg:justify-center">
        <div class="space-y-6 w-full flex flex-col items-center">
            <p class="uppercase text-3xl leading-9 font-bold text-center">gymlogs</p>
            <div class="w-full h-auto rounded-lg p-4 sm:p-8 border border-gray-200 sm:max-w-lg">
                <router-view />
            </div>
        </div>
    </div>
</template>