<script setup>
    import { useRouter } from 'vue-router'
    
    import Button from '@/components/form/Button.vue'
    import NavBar from '@/components/navigation/NavBar.vue'
    import UserStatus from '@/components/navigation/UserStatus.vue'
    import UserStatusLoadingAnimation from '@/components/loading_animation/UserStatus.vue'

    const router = useRouter()

    const selectMuscleAndExercise = () => {
        router.push({ name: 'Muscle Selection Screen' })
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
            <Suspense>
                <UserStatus />
                <template #fallback><UserStatusLoadingAnimation /></template>
            </Suspense>
            <!-- <UserStatusLoadingAnimation /> -->
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