<script setup>
    import { useProfileStore } from '@/stores/profileStore'
    import { reactive } from 'vue'
    import { Button } from '@/components/ui/button'

    import Input from '@/components/form/Input.vue'
    // import Button from '@/components/form/Button.vue'
    import LoadingButton from '@/components/form/LoadingButton.vue'
    import Error from '@/components/form/Error.vue'

    const profile = useProfileStore()

    const updateProfile = () => {
        const updatedProfile = reactive({
            name: profile.user.fullname,
            email: profile.user.email
        })
        
        profile.edit(updatedProfile)
    }

    await profile.get()
</script>

<template>
    <div class="space-y-8">
        <h1 class="text-4xl dark:text-blue-50">Profile</h1>

        <form @submit.prevent="updateProfile" class="space-y-8">
            <div>
                <Input
                    v-model="profile.user.fullname"
                    label="Fullname"
                    type="text"
                    name="fullname"
                    placeholder="Your full name" />
                <Error v-show="profile.errors.fullname">{{ profile.errors.fullname }}</Error>
            </div>
            <div>
                <Input
                    v-model="profile.user.email"
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="name@mail.com" />
                <Error v-show="profile.errors.email">{{ profile.errors.email }}</Error>
            </div>
            <div>
                <Button v-if="profile.isLoading">Loading...</Button>
                <Button v-else>Update Profile</Button>
            </div>
        </form>
    </div>
</template>