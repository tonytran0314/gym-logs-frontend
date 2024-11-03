<script setup>
    import { useModalStore } from '@/stores/modalStore'
    import EndSetModal from '@/components/modals/EndSetModal.vue'

    const modal = useModalStore()

    const finishSet = () => {
        modal.open(EndSetModal)
    }
</script>

<template>
    <div>
        <p>This is On Set View. You are on set</p>
        <button @click="finishSet">Finish Set</button>
    </div>
</template>