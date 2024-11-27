<script setup>
    import { useModalStore } from '@/stores/modalStore'
    import { useAuthStore } from '@/stores/authStore'

    import CloseButton from '@/components/modals/CloseButton.vue'

    const modal = useModalStore()
    const auth = useAuthStore()

    const cancel = () => {
        modal.close()
    }

    const logout = async () => {
        await auth.logout()
        modal.close()
    }
</script>

<template>
    <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-50 p-8 rounded-2xl space-y-8">
        <div class="flex items-center justify-between">
            <div class="text-3xl font-bold">Logout</div>
            <CloseButton />
        </div>
        <div>Are you sure you want to log out?</div>
        <div class="flex justify-end gap-4 text-sm text-white">
            <div @click="cancel" class="bg-gray-500 rounded-lg px-6 py-2 cursor-pointer hover:bg-gray-600">Cancel</div>
            <div @click="logout" class="bg-emerald-600 rounded-lg px-6 py-2 cursor-pointer hover:bg-emerald-700">Logout</div>
        </div>
    </div>
</template>
