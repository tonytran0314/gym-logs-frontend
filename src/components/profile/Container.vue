<script setup>    
    import UserProfile from '@/components/profile/UserProfile.vue'
</script>

<template>
    <div class="bg-white p-8 rounded-2xl">
        <Suspense>

            <UserProfile />

            <template #fallback>
                Loading Profile ...
            </template>
        </Suspense>
    </div>
</template>