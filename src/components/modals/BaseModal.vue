<script setup>
    import { useModalStore } from '@/stores/modalStore'
    import { onMounted, onUnmounted } from 'vue'

    const modal = useModalStore()
    
    const keydownListener = (event) => {
        if (event.key === "Escape") modal.close();
    }

    onMounted(() => {
        document.addEventListener("keydown", keydownListener);
    });

    onUnmounted(() => {
        document.removeEventListener("keydown", keydownListener);
    });
</script>

<template>
    <Teleport to="body">
  
        <Transition name="modal-fade">
        
            <div 
                v-if="modal.content" 
                @click.self="modal.close" 
                aria-modal="true" 
                role="dialog" 
                tabindex="-1"
                class="fixed top-0 left-0 z-[999] w-full h-dvh bg-black bg-opacity-80 flex items-center justify-center">

                <component :is="modal.content" />

            </div>

        </Transition>
  
    </Teleport>
</template>

<style scoped>
    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: 0.25s ease all;
    }
</style>