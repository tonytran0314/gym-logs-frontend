<script setup>
    import { useNavigationStore } from '@/stores/navigationStore'
    import { useNotificationStore } from '@/stores/notificationStore'
    import { Bell } from 'lucide-vue-next'
    
    // import Button from '@/components/form/Button.vue'
    import NavBar from '@/components/navigation/NavBar.vue'
    import UserStatus from '@/components/profile/UserStatus.vue'
    import UserStatusLoadingAnimation from '@/components/loading_animation/UserStatus.vue'
    import CloseButton from '@/components/modals/CloseButton.vue'

    const navigation = useNavigationStore()
    const notification = useNotificationStore()

    const openSideMenu = () => {
        navigation.open()
    }

    const closeSideMenu = () => {
        navigation.close()
    }

    const toggleNotification = () => {
        notification.toggle()
    }
</script>

<template>
    <div class="flex h-screen relative">

        <!-- LEFT COLUMN -->
        <!-- MENU FOR SMALL SCREENS -->
        <div>
            <Transition name="fade-bg">
                <div 
                    v-if="navigation.isSideNavigationOpen" 
                    class="fixed inset-0 z-[98] bg-black bg-opacity-50 lg:hidden"
                    @click="closeSideMenu">
                </div>
            </Transition>
            
            <Transition name="side-menu">
                <div 
                    v-if="navigation.isSideNavigationOpen" 
                    class="fixed z-[99] top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl p-8 flex flex-col justify-between lg:hidden"
                    @click.stop>
                    <div class="space-y-8">
                        <div class="flex flex-col gap-4">
                            <div class="flex justify-end">
                                <CloseButton  @click="closeSideMenu" />
                            </div>
                            <div class="text-gray-900 dark:text-blue-50 font-bold text-4xl">GYM<span class="text-emerald-600 dark:text-emerald-400">LOGX</span></div>
                        </div>
                        <NavBar />
                    </div>
                </div>
            </Transition>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="flex-grow bg-white dark:bg-gray-900">
            <div class="flex justify-between items-center bg-white dark:bg-gray-900 py-5 px-8 shadow-md">
                <div>
                    <div class="text-gray-900 dark:text-blue-50 font-bold text-4xl">GYM<span class="text-emerald-600 dark:text-emerald-400">LOGX</span></div>
                </div>
                <div @click="openSideMenu" 
                    class="lg:hidden size-12 flex justify-center items-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-900 dark:text-blue-50" size="xl" />
                </div>

                <div class="flex items-center gap-4">
                    <router-link to="/dashboard">Dashboard</router-link>
                    <router-link to="/history">Workout History</router-link>
                </div>
                
                <div class="flex items-center gap-1 sm:gap-3 md:gap-5 lg:gap-6">
                    <div @click="toggleNotification" class="relative">
                        <Bell class="cursor-pointer" />
                        <div v-if="notification.isOpen" class="h-auto min-w-56 absolute right-0 top-10 rounded-lg bg-white border border-emerald-600 dark:bg-gray-800 p-4 shadow-lg space-y-4">
                            <div class="text-lg text-gray-900 dark:text-blue-50">Notifications</div>
                            <div class="text-gray-700 dark:text-gray-400">Coming soon ...</div>
                        </div>
                    </div>
                    <Suspense>
                        <UserStatus />
                        <template #fallback>
                            <UserStatusLoadingAnimation />
                        </template>
                    </Suspense>
                </div>
            </div>
            <div class="p-8 bg-white dark:bg-gray-900">
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

    .fade-bg-enter-active,
    .fade-bg-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-bg-enter-from,
    .fade-bg-leave-to {
    opacity: 0;
    }
</style>