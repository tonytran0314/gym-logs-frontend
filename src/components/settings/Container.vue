<script setup>
    import { Button } from '@/components/ui/button'
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
    import { Icon } from '@iconify/vue'
    import { useColorMode } from '@vueuse/core'
    const mode = useColorMode()
</script>

<template>
    <div class="p-8 rounded-2xl space-y-12 bg-white dark:bg-gray-800">
        
        <h1 class="text-4xl">Settings</h1>
        <div class="space-y-8">
            <div class="space-y-6">
                <div class="space-y-1">
                    <p class="text-sm text-muted-foreground">APPEARANCE</p>
                    <div class="h-[1px] w-full border-b"></div>
                </div>
                <div>
                    <div class="flex justify-between items-center">
                        <div>Theme</div>
                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                            <Button variant="outline">
                                <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span class="sr-only">Toggle theme</span>
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuItem @click="mode = 'light'">
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem @click="mode = 'dark'">
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem @click="mode = 'auto'">
                                System
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>