<script setup>
    import { useThemeStore } from '@/stores/themeStore'
    import { ref } from 'vue'

    const theme = useThemeStore()
    const selectedTheme = localStorage.getItem('theme') ? ref(localStorage.getItem('theme')) : null

    const updateThemeMode = () => {
        theme.switchTo(selectedTheme.value)
    }
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl space-y-12">
        <h1 class="text-4xl dark:text-blue-50">Settings</h1>
        <div class="space-y-8">
            <div class="space-y-6">
                <div class="space-y-1">
                    <p class="text-sm text-gray-400">APPEARANCE</p>
                    <div class="h-[1px] w-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div>
                    <div class="flex justify-between items-center">
                        <div class="text-gray-900 dark:text-blue-50">Theme</div>
                        <div>
                            <select v-model="selectedTheme" @change="updateThemeMode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600">
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>