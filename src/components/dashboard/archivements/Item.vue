<script setup>
    const props = defineProps(['highlighted'])
</script>

<template>
    <div class="text-gray-900 dark:text-blue-50 p-4 rounded-xl w-full shadow-lg flex flex-col gap-4"
        :class=" props.highlighted ? 'text-white bg-emerald-600' : 'bg-white dark:bg-gray-800' ">
        <div class="flex justify-between">
            <div class="text-xl line-clamp-2 min-w-44">
                <slot name="title"></slot>
            </div>
            <div class="min-w-16 min-h-16 max-w-16 max-h-16 rounded-2xl flex justify-center items-center"
                :class="props.highlighted ? 'text-emerald-600 bg-emerald-100' : 'bg-emerald-100 text-emerald-600 dark:text-emerald-300 dark:bg-gray-700' ">
                <slot name="icon"></slot>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="flex gap-2 items-end">
                <div class="font-bold text-4xl flex gap-3 items-center">
                    <slot name="content"></slot>
                </div>
                <div class="text-xl">
                    <slot name="unit"></slot>
                </div>
            </div>
            <div class="text-sm">
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>