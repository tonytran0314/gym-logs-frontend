<script setup>
    import NotFoundIllustration from '@/components/not_found/Illustration.vue'
    import Button from '@/components/form/Button.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    
    const goHome = () => {
        router.push({ name: 'Home' })
    }
</script>

<template>
    <div class="w-full h-screen bg-white dark:bg-gray-900 flex justify-center items-center gap-10">
        <NotFoundIllustration />
        <div class="flex flex-col gap-10">
            <div class="text-gray-900 dark:text-blue-50 flex flex-col gap-6">
                <p class="text-8xl font-bold">Oops !!!</p>
                <p class="text-3xl">The page you were looking for <br> couldn't be found</p>
            </div>
            <div>
                <Button @click="goHome" class="flex gap-3 items-center">
                    <font-awesome-icon :icon="['fas', 'home']" class="size-5" />
                    <span>Go Home</span>
                </Button>
            </div>
        </div>
    </div>
</template>