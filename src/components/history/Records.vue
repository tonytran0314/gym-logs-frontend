<script setup>
    import { useHistoryStore } from '@/stores/historyStore'

    import Card from '@/components/history/Card.vue'
    import Pagination from '@/components/history/Pagination.vue'
    import EmptyHistoryMessage from '@/components/history/EmptyMessage.vue'

    const history = useHistoryStore()

    await history.get()
</script>

<template>
    <div v-if="history.records !== null" class="flex flex-col flex-wrap gap-6">
        <Card v-for="record in history.records.list" :record="record" />
        <Pagination />
    </div>

    <EmptyHistoryMessage v-else />
</template>

<style>
    
</style>