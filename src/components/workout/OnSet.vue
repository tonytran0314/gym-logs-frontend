<script setup>
    import OnSetIllustration from '@/components/workout/illustrations/OnSet.vue'
    import CurrentExercise from '@/components/workout/CurrentExercise.vue'
</script>

<template>
    <div class="flex gap-8 flex-col lg:flex-row items-center">
        <OnSetIllustration class="w-40 md:w-52 lg:w-96" />
        <div class="flex flex-col gap-8 bg-white shadow-lg dark:bg-gray-800 p-8 rounded-2xl">
            <div class="text-gray-900 dark:text-blue-50 flex flex-col gap-8 h-full">
                <Suspense>
                    <CurrentExercise />
                    <template #fallback>Loading current exercise...</template>
                </Suspense>
            </div>
        </div>
    </div>
</template>