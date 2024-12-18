<script setup>
    import { useRouter } from 'vue-router'
    import { useNavigationStore } from '@/stores/navigationStore'
    
    import Button from '@/components/form/Button.vue'
    import NavBar from '@/components/navigation/NavBar.vue'
    import UserStatus from '@/components/navigation/UserStatus.vue'
    import UserStatusLoadingAnimation from '@/components/loading_animation/UserStatus.vue'
    import CloseButton from '@/components/modals/CloseButton.vue'

    const router = useRouter()
    const navigation = useNavigationStore()

    const selectMuscleAndExercise = () => {
        router.push({ name: 'Muscle Selection Screen' })
    }

    const openSideMenu = () => {
        navigation.open()
    }

    const closeSideMenu = () => {
        navigation.close()
    }
</script>

<template>
    <div class="flex h-screen relative">

        <!-- LEFT COLUMN -->
        <!-- MENU FOR LARGE SCREENS -->
        <div class="hidden w-64 p-8 lg:flex flex-col justify-between bg-white dark:bg-gray-800">
            <div class="space-y-12">
                <div class="flex flex-col gap-4">
                    <div class="text-emerald-600 font-bold text-4xl">GYMLOGS</div>
                </div>
                <NavBar />
            </div>
            <Suspense>
                <UserStatus />
                <template #fallback><UserStatusLoadingAnimation /></template>
            </Suspense>
        </div>
        <!-- MENU FOR SMALL SCREENS -->
        <Transition name="side-menu">
            <div v-if="navigation.isSideNavigationOpen" class="absolute z-[99] lg:static lg:hidden h-screen w-64 p-8 flex flex-col justify-between bg-white dark:bg-gray-800">
                <div class="space-y-8">
                    <div class="flex flex-col gap-4">
                        <div @click="closeSideMenu" class="flex justify-end"><CloseButton /></div>
                        <div class="text-emerald-600 font-bold text-4xl lg:hidden">GYMLOGS</div>
                    </div>
                    <NavBar />
                </div>
                <Suspense>
                    <UserStatus />
                    <template #fallback><UserStatusLoadingAnimation /></template>
                </Suspense>
            </div>
        </Transition>

        <!-- RIGHT COLUMN -->
        <div class="flex-grow overflow-auto bg-blue-50 dark:bg-gray-900">
            <div class="flex justify-between lg:justify-end items-center bg-white dark:bg-gray-800 py-5 px-8">
                <div @click="openSideMenu" 
                    class="lg:hidden size-12 flex justify-center items-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-900 dark:text-blue-50" size="xl" />
                </div>
                <Button @click="selectMuscleAndExercise" class="flex gap-2 items-center">
                    <font-awesome-icon :icon="['fas', 'dumbbell']" class="hidden sm:block md:size-4 lg:size-6" />
                    <span class="text-xs sm:text-sm md:text-md">Workout now</span>
                </Button>
            </div>
            <div class="p-8 bg-blue-50 dark:bg-gray-900">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .side-menu-enter-active, 
    .side-menu-leave-active {
        transition: .5s ease all;
    }

    .side-menu-enter-from,
    .side-menu-leave-to {
        transform: translate(-256px);
    }

    .side-menu-enter-to {
        transform: translate(0);
    }
</style>