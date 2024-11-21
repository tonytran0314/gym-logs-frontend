<script setup>
    import Records from '@/components/history/Records.vue'
</script>

<template>
    <div>
        <Suspense>

            <Records />

            <template #fallback>
                Loading records ...
            </template>
        </Suspense>
    </div>
</template>

<style>
    
</style>