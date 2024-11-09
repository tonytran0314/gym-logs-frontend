<script setup>
    import { useModalStore } from '@/stores/modalStore'

    import EndSetModal from '@/components/modals/EndSetModal.vue'
    import Button from '@/components/form/Button.vue'

    const modal = useModalStore()

    const finishSet = () => {
        modal.open(EndSetModal)
    }
</script>

<template>
    <div>
        <p>This is On Set View. You are on set</p>
        <Button @click="finishSet">Finish Set</Button>
    </div>
</template>