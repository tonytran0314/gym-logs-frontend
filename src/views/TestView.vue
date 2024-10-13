<script setup>
    import axios from '@/services/axios.js';

    const loginHandle = () => {
        const email = 'test@example.com'
        const password = 'password'

        try {
            axios.get('/api/info')
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            }) 

            axios.get('/sanctum/csrf-cookie')
            .then(() => {
                axios.post('/api/login', { email, password })
                .then((response) => {
                    console.log('Login successful! :', response.data);
                    axios.get('/api/info')
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    }) 
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        } 
        catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="bg-emerald-600 text-white h-dvh flex justify-center items-center text-center space-x-20">
        <router-link to="/login" class="text-3xl">Login</router-link>
        <router-link to="/signup" class="text-3xl">Signup</router-link>
        <form @submit.prevent="loginHandle">
            <button type="submit">Send login request</button>
        </form>
    </div>
</template>

<style>
    
</style>