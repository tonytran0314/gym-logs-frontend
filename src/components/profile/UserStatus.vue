<script setup>
    import { useProfileStore } from '@/stores/profileStore'
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
    
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu'
    
    import { useModalStore } from '@/stores/modalStore'
    import LogoutModal from '@/components/modals/LogoutModal.vue'

    const modal = useModalStore()
    const profile = useProfileStore()

    const logoutConfirmation = () => {
        modal.open(LogoutModal)
    }

    await profile.get()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="flex space-x-3">
            <Avatar>
                <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div class="hidden lg:block w-[136px]">
                <p class="font-bold pt-1 dark:text-blue-50 line-clamp-1 text-sm flex justify-start">{{ profile.user.fullname }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-300 space-x-2 flex items-center">
                    <span class="line-clamp-1">Have a good day!</span>
                    <!-- <span class="inline-block size-3 rounded-full bg-emerald-300"></span> -->
                </p> 
                <!-- Sau chữ Đang tập luyện có dấu chấm xanh như FB, suy nghĩ xem không tập thì để chữ gì. Hoặc cho người ta tự custom như liên minh -->
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <router-link to="/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
            </router-link>
            <router-link to="/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
            </router-link>
            <DropdownMenuItem @click="logoutConfirmation">Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
