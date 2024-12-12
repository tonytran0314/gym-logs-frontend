<script setup>
    import { useProfileStore } from '@/stores/profileStore'
    
    const profile = useProfileStore()

    await profile.get()
</script>

<template>
    <div class="flex space-x-2 relative">
        <div class="size-12 rounded-full bg-emerald-600 flex items-center justify-center">
            <font-awesome-icon :icon="['fas', 'user']" class="size-6 text-emerald-100" />
        </div>
        <div>
            <p class="font-bold pt-1 dark:text-blue-50">{{ profile.user.fullname }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-300 space-x-2 flex items-center">
                <span>Have a good day!</span>
                <!-- <span class="inline-block size-3 rounded-full bg-emerald-300"></span> -->
            </p> 
            <!-- Sau chữ Đang tập luyện có dấu chấm xanh như FB, suy nghĩ xem không tập thì để chữ gì. Hoặc cho người ta tự custom như liên minh -->
        </div>
        <!-- Chỗ này có cái dấu 3 chấm hay mũi tên đi lên hoặc mũi tên chỉ bên phải gì đó, bấm vô nó mở menu nhỏ nhỏ -->
    </div>
</template>
