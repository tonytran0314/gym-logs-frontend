<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
</script>

<template>
    <form @submit.prevent="">
        <div>
            <input type="text" placeholder="weight">
        </div>
        <div>
            <input type="text" placeholder="sets">
        </div>
        <button type="submit">Take a short break</button>
    </form>
    <CloseButton />
</template>