<script setup>
    import { useModalStore } from '@/stores/modalStore'

    import EndSetModal from '@/components/modals/EndSetModal.vue'
    import Button from '@/components/form/Button.vue'
    import OnSetIllustration from '@/components/workout/illustrations/OnSet.vue'

    const modal = useModalStore()

    const finishSet = () => {
        modal.open(EndSetModal)
    }
</script>

<template>
    <div class="flex gap-8">
        <OnSetIllustration />
        <div class="flex flex-col gap-8 bg-gray-800 p-8 rounded-2xl">
            <div class="text-gray-900 dark:text-blue-50 flex flex-col gap-8 h-full">
                <p class="text-4xl font-bold">Working out...</p>
                <div class="flex flex-col gap-6 justify-center items-center">
                    <p class="text-3xl">Exercise Name</p>
                    <p class="text-5xl font-bold">Set #2</p>
                </div>
            </div>
            <Button @click="finishSet">I Have Finished This Set</Button>
        </div>
    </div>
</template>