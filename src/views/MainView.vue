<script setup>
    import { useRouter } from 'vue-router'
    
    import Button from '@/components/form/Button.vue'
    import NavBar from '@/components/navigation/NavBar.vue'

    const router = useRouter()

    const selectMuscleAndExercise = () => {
        router.push({ name: 'Choose Muscle and Exercise Screen' })
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
            <div class="flex space-x-2 relative">
                <div class="size-12 rounded-full bg-gray-500"></div>
                <div>
                    <p class="font-bold pt-1 dark:text-blue-50">Huy Tran</p>
                    <p class="text-sm text-gray-500 dark:text-gray-300 space-x-2 flex items-center">
                        <span>Working out</span>
                        <span class="inline-block size-3 rounded-full bg-emerald-300"></span>
                    </p> 
                    <!-- Sau chữ Đang tập luyện có dấu chấm xanh như FB, suy nghĩ xem không tập thì để chữ gì. Hoặc cho người ta tự custom như liên minh -->
                </div>
                <!-- Chỗ này có cái dấu 3 chấm hay mũi tên đi lên hoặc mũi tên chỉ bên phải gì đó, bấm vô nó mở menu nhỏ nhỏ -->
            </div>
        </div>



    <!-- RIGHT COLUMN -->
        <div class="flex-grow overflow-auto bg-blue-50 dark:bg-gray-900">
            <div class="flex justify-end bg-white dark:bg-gray-800 pt-5 pb-5 pr-8">
                <Button @click="selectMuscleAndExercise" class="flex gap-2 items-center">
                    <font-awesome-icon :icon="['fas', 'dumbbell']" class="size-6" />
                    <span>Workout now</span>
                </Button>
            </div>
            <div class="p-8 bg-blue-50 dark:bg-gray-900">
                <router-view />
            </div>
        </div>
    </div>
</template>