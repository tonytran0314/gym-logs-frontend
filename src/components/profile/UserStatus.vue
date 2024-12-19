<script setup>
    import { useProfileStore } from '@/stores/profileStore'
    
    const profile = useProfileStore()

    await profile.get()
</script>

<template>
    <div class="flex space-x-3 relative items-center">
        <div class="size-10 rounded-full bg-emerald-600 flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'user']" class="size-6 text-emerald-100" />
        </div>
        <div class="hidden lg:block w-[136px]">
            <p class="font-bold pt-1 dark:text-blue-50 line-clamp-1 text-sm">{{ profile.user.fullname }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-300 space-x-2 flex items-center">
                <span class="line-clamp-1">Have a good day!</span>
                <!-- <span class="inline-block size-3 rounded-full bg-emerald-300"></span> -->
            </p> 
            <!-- Sau chữ Đang tập luyện có dấu chấm xanh như FB, suy nghĩ xem không tập thì để chữ gì. Hoặc cho người ta tự custom như liên minh -->
        </div>
    </div>
</template>
