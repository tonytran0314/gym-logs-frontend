<script setup>
    import Button from '@/components/form/Button.vue'
    import { useThemeStore } from '@/stores/themeStore'

    const theme = useThemeStore()
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl space-y-8">
        <h1 class="text-4xl dark:text-blue-50">Settings</h1>
        <div>
            <Button @click="theme.toggle">Toggle Dark/Light mode</Button>
        </div>
    </div>
</template>