<script setup>

</script>

<template>
    <!-- Archivement Item has: Title, Content, and Icon -->
    <div class="bg-emerald-600 text-white p-4 rounded-xl w-full hover:shadow-lg">
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>