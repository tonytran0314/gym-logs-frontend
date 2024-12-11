<script setup>
    import { useHistoryStore } from '@/stores/historyStore'
    import Card from '@/components/history/Card.vue'
    import EmptyHistoryMessage from '@/components/history/EmptyMessage.vue'
    
    const history = useHistoryStore()
    await history.get()
</script>

<template>
    <div v-if="history.records !== null" class="flex flex-col flex-wrap gap-6">
        <Card v-for="record in history.records" :record="record" />
    </div>

    <EmptyHistoryMessage v-else />
</template>

<style>
    
</style>