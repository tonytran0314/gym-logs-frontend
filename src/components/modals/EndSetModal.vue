<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
  import Button from '@/components/form/Button.vue'

  import { useRouter } from 'vue-router'
  import { useModalStore } from '@/stores/modalStore'

  const router = useRouter()
  const modal = useModalStore()

  const handle = () => {
    router.push({ name: 'Rest Screen' })
    modal.close()
  }
</script>

<template>
    <div class="bg-white space-y-8 p-8 rounded-xl">
        <form @submit.prevent="handle">
            <div>
                <input type="text" placeholder="weight">
            </div>
            <div>
                <input type="text" placeholder="sets">
            </div>
            <Button>Take a short break</Button>
        </form>
        <CloseButton />
    </div>
</template>