<script setup>
    import { useProfileStore } from '@/stores/profileStore'
    
    import Input from '@/components/form/Input.vue'

    const profile = useProfileStore()

    await profile.get()
</script>

<template>
    <div>
        <h1 class="text-5xl">This is Profile View</h1>

        <p>{{ profile.user.fullname }}</p>
        <p>{{ profile.user.email }}</p>

        <form @submit.prevent="" class="space-y-8">
            <!-- <Input
                v-model="fullname"
                label="Fullname"
                type="text"
                name="fullname"
                placeholder="Your full name" />
            <Error v-show="auth.errors.email">{{ auth.errors.email }}</Error>
            <Input
                v-model="email"
                label="Email"
                type="email"
                name="email"
                placeholder="name@mail.com" />
            <Error v-show="auth.errors.email">{{ auth.errors.email }}</Error> -->
        </form>
    </div>
</template>