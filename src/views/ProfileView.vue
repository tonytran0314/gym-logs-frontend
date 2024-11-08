<script setup>    
    import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
    <div class="p-8 space-y-8 text-5xl">

        <router-link :to="{ name: 'Home'}" class="text-blue">Home page</router-link>

        <Suspense>

            <UserProfile />

            <template #fallback>
                Loading Profile ...
            </template>
        </Suspense>

    </div>
</template>