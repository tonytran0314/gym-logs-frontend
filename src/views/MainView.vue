<script setup>
    import { useModalStore } from '@/stores/modalStore'
    import { useAuthStore } from '@/stores/authStore'
    import { ref } from 'vue'
    
    import StartExerciseModal from '@/components/modals/StartExerciseModal.vue'
    import Button from '@/components/form/Button.vue'
    import NavBar from '@/components/navigation/NavBar.vue'

    const auth = useAuthStore()
    const modal = useModalStore()
    const isDropdownOpened = ref(false)

    const startExerciseDay = () => {
        modal.open(StartExerciseModal)
    }

    const toggleDropdown = () => {
        isDropdownOpened.value = !isDropdownOpened.value
    }
</script>

<template>
    <div class="flex h-screen">


    <!-- LEFT COLUMN -->
        <div class="w-64 p-8 flex flex-col justify-between bg-white dark:bg-gray-800">
            <div class="space-y-12">
                <div class="text-emerald-600 font-bold text-4xl">GYMLOGS</div>
                <NavBar />
            </div>
            
            <!-- Put this in the mini navigation on avatar -->
            <div @click="toggleDropdown" @click.self="toggleDropdown" class="flex space-x-2 relative cursor-pointer">
                <div class="size-12 rounded-full bg-gray-500"></div>
                <div>
                    <p class="font-bold pt-1 dark:text-blue-50">Huy Tran</p>
                    <p class="text-sm text-gray-500 dark:text-gray-300 space-x-2 flex items-center">
                        <span>Working out</span>
                        <span class="inline-block size-3 rounded-full bg-emerald-300"></span>
                    </p> 
                    <!-- Sau chữ Đang tập luyện có dấu chấm xanh như FB, suy nghĩ xem không tập thì để chữ gì. Hoặc cho người ta tự custom như liên minh -->
                </div>
                <div v-show="isDropdownOpened" class="bg-white dark:bg-gray-700 text-gray-900 dark:text-blue-50 shadow-md rounded cursor-pointer absolute right-0 bottom-full">
                    <div @click="auth.logout" class="p-2 hover:bg-gray-200 dark:hover:text-gray-900">Logout</div>
                </div>
                <!-- Chỗ này có cái dấu 3 chấm hay mũi tên đi lên hoặc mũi tên chỉ bên phải gì đó, bấm vô nó mở menu nhỏ nhỏ -->
            </div>
        </div>



    <!-- RIGHT COLUMN -->
        <div class="flex-grow overflow-auto bg-blue-50 dark:bg-gray-900">
            <div class="flex justify-end bg-white dark:bg-gray-800 pt-5 pb-5 pr-8">
                <Button @click="startExerciseDay">Workout now</Button>
            </div>
            <div class="p-8 bg-blue-50 dark:bg-gray-900">
                <router-view />
            </div>
        </div>
    </div>
</template>