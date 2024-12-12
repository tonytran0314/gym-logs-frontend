<script setup>
    
</script>

<template>
    <div class="w-full h-screen flex items-start lg:items-center justify-center p-4 overflow-y-auto bg-blue-50 dark:bg-gray-900">
        <Suspense>
            <router-view></router-view>

            <template #fallback>
                <div class="text-gray-900 dark:text-blue-50">Loading workout</div>
            </template>
        </Suspense>
    </div>
</template>