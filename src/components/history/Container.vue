<script setup>
    import Records from '@/components/history/Records.vue'
    import HistoryLoadingAnimation from '@/components/loading_animation/History.vue'
</script>

<template>
    <div>
        <Suspense>

            <Records />

            <template #fallback>
                <HistoryLoadingAnimation />
            </template>
        </Suspense>
    </div>
</template>

<style>
    
</style>