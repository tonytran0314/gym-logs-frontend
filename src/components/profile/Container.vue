<script setup>    
    import UserProfile from '@/components/profile/UserProfile.vue'
    import ProfileLoadingAnimation from '@/components/loading_animation/Profile.vue'
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl">
        <Suspense>

            <UserProfile />

            <template #fallback>
                <ProfileLoadingAnimation />
            </template>
        </Suspense>
    </div>
</template>