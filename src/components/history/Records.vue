<script setup>
    import { useHistoryStore } from '@/stores/historyStore'

    import {
        Card,
        CardContent,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'
    
    import { Button } from '@/components/ui/button'
    import { Badge } from '@/components/ui/badge'

    import Pagination from '@/components/history/Pagination.vue'
    import EmptyHistoryMessage from '@/components/history/EmptyMessage.vue'

    const history = useHistoryStore()

    await history.get()
</script>

<template>
    <div v-if="history.records !== null">
        <div class="flex flex-wrap gap-4">
            <Card v-for="record in history.records.list" class="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>{{ record.time.day }}, {{ record.time.date }}</CardTitle>
                </CardHeader>
                <CardContent class="space-y-3">
                    <div
                        v-for="(exercise, idx) in record.exercises.slice(0, 3)"
                        :key="idx"
                        class="flex items-center gap-3"
                    >
                        <Badge variant="secondary">{{ exercise.muscle }}</Badge>
                        <span class="flex-1 font-medium line-clamp-1">{{ exercise.name }}</span>
                        <span class="text-sm text-muted-foreground">{{ exercise.sets.length }} set</span>
                    </div>
                </CardContent>
                <CardFooter class="flex justify-end">
                <Button variant="outline">Details</Button>
                </CardFooter>
            </Card>
        </div>
        <Pagination />
    </div>

    <EmptyHistoryMessage v-else />
</template>

<style>
    
</style>