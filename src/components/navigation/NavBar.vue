<script setup>
    import { useRoute } from 'vue-router'
    import { useModalStore } from '@/stores/modalStore'
    import { useNavigationStore } from '@/stores/navigationStore'

    import LogoutModal from '@/components/modals/LogoutModal.vue'

    const route = useRoute()
    const modal = useModalStore()
    const navigation = useNavigationStore()

    const isCurrentRoute = (destination) => route.path === destination

    const logoutConfirmation = () => {
        modal.open(LogoutModal)
    }

    const closeSideMenu = () => {
        navigation.close()
    }
</script>

<template>
    <div class="space-y-2">
        <p class="text-gray-400">Menu</p>
        <nav class="">
            <ul class="space-y-2">
                
                <li v-for="menu in navigation.items" @click="closeSideMenu">
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