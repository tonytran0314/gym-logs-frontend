import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from '@/services/axios.js'

export const useAuthStore = defineStore('authStore', () => {

    const router = useRouter()

    const login = () => {
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

                    console.log('Login successful! :', response.data)

                    axios.get('/api/info')
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    }) 

                    router.push({ name: 'Profile' })

                }).catch((error) => {
                    console.log(error)
                });

            }).catch((error) => {
                console.log(error);
            });
        } 
        catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        
    }

    return {
        login,
        logout
    }
})