<script setup>
    import { useThemeStore } from '@/stores/themeStore'
    import { ref } from 'vue'
    import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

    const theme = useThemeStore()
    const selectedTheme = localStorage.getItem('theme') ? ref(localStorage.getItem('theme')) : ref('dark')

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
                            <Select v-model="selectedTheme" @update:modelValue="updateThemeMode">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Theme</SelectLabel>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <!-- <SelectItem value="system">System</SelectItem> -->
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>