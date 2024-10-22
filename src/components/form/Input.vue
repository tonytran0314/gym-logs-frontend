<script setup>
    const model = defineModel()
    const props = defineProps({
        label: String,
        type: String,
        name: String,
        placeholder: String
    })
</script>

<template>
    <div>
        <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
        <input v-model="model" :type="type" :name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5" :placeholder="placeholder" required="">
    </div>
</template>
