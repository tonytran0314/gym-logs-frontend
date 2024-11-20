<script setup>
  import BaseModal from '@/components/modals/BaseModal.vue'
  import { onMounted } from 'vue'
  import { useThemeStore } from '@/stores/themeStore'

  onMounted(() => {
    const theme = useThemeStore()
    theme.initialize()
  })
</script>

<template>
  <RouterView />
  <BaseModal />
</template>