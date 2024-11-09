<script setup>
    import { useQuoteStore } from '@/stores/quoteStore'
    import { ref } from 'vue'

    const quote = useQuoteStore()

    await quote.get()

</script>

<template>
    <div>"{{ quote.generatedQuote.quote }}" - {{ quote.generatedQuote.author }}</div>
</template>

<style>
    
</style>