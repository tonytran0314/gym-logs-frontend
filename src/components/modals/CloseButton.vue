<template>
    <button @click="modal.close">
      <font-awesome-icon :icon="['fas', 'xmark']" class="size-6 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" />
    </button>
</template>
  
<script setup>
  import { useModalStore } from "@/stores/modalStore"
  
  const modal = useModalStore()
</script>
  