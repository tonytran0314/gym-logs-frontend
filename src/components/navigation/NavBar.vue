<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const menus = [
        {
            label: 'Dashboard',
            destination: '/'
        },
        {
            label: 'Profile',
            destination: '/profile'
        },
        {
            label: 'History',
            destination: '/history'
        },
        {
            label: 'Utilities',
            destination: '/utilities'
        },
        {
            label: 'Settings',
            destination: '/settings'
        },
    ]

    const isCurrentRoute = (destination) => route.path === destination
</script>

<template>
    <div class="space-y-2">
        <p class="text-gray-400">Menu</p>
        <nav class="">
            <ul class="space-y-2">
                
                <li v-for="menu in menus">
                    <router-link 
                        :to="menu.destination"
                        class="text-gray-900 block font-bold pl-7 pt-4 pb-4 rounded border-l-4 hover:bg-emerald-100 hover:border-emerald-600 hover:text-emerald-600 dark:text-blue-50 dark:hover:border-emerald-600 dark:hover:text-emerald-600"
                        :class="
                            isCurrentRoute(menu.destination) ? 'bg-emerald-100 text-emerald-600 border-emerald-600 dark:text-emerald-600' : 'border-white dark:border-gray-800'
                        ">
                            {{ menu.label }}
                    </router-link>
                </li>

            </ul>
        </nav>
    </div>
</template>