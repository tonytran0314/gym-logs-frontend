<script setup>
    import { useRoute } from 'vue-router'
    import { useModalStore } from '@/stores/modalStore'

    import LogoutModal from '@/components/modals/LogoutModal.vue'

    const route = useRoute()
    const modal = useModalStore()

    const menus = [
        {
            label: 'Dashboard',
            destination: '/',
            icon: 'home'
        },
        {
            label: 'Profile',
            destination: '/profile',
            icon: 'user'
        },
        {
            label: 'History',
            destination: '/history',
            icon: 'clock-rotate-left'
        },
        {
            label: 'Settings',
            destination: '/settings',
            icon: 'gear'
        }
    ]

    const isCurrentRoute = (destination) => route.path === destination

    const logoutConfirmation = () => {
        modal.open(LogoutModal)
    }
</script>

<template>
    <div class="space-y-2">
        <p class="text-gray-400">Menu</p>
        <nav class="">
            <ul class="space-y-2">
                
                <li v-for="menu in menus">
                    <router-link 
                        :to="menu.destination"
                        class="flex gap-4 items-center text-gray-900 font-bold pl-7 pt-4 pb-4 rounded border-l-4 hover:bg-emerald-100 hover:border-emerald-600 hover:text-emerald-600 dark:text-blue-50 dark:hover:border-emerald-600 dark:hover:text-emerald-600"
                        :class="
                            isCurrentRoute(menu.destination) ? 'bg-emerald-100 text-emerald-600 border-emerald-600 dark:text-emerald-600' : 'border-white dark:border-gray-800'
                        ">
                            <font-awesome-icon :icon="['fas', menu.icon]" class="size-5" />
                            <span>{{ menu.label }}</span>
                    </router-link>
                </li>
                <li @click="logoutConfirmation" class="flex gap-4 items-center text-gray-900 font-bold pl-7 pt-4 pb-4 rounded border-l-4 hover:bg-emerald-100 hover:border-emerald-600 hover:text-emerald-600 dark:text-blue-50 dark:hover:border-emerald-600 dark:hover:text-emerald-600 cursor-pointer border-white dark:border-gray-800">
                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="size-5" />    
                    <span>Logout</span>
                </li>

            </ul>
        </nav>
    </div>
</template>