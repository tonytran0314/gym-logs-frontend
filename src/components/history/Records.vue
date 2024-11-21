<script setup>
    import { useHistoryStore } from '@/stores/historyStore'
    import Card from '@/components/history/Card.vue'
    
    const history = useHistoryStore()
    await history.get()
</script>

<template>
    <div class="flex flex-wrap gap-6">
        <Card v-for="record in history.records" :content="record.exercises">{{ record.date }}</Card>
    </div>
</template>

<style>
    
</style>