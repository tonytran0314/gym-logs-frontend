<script setup>
    import Button from '@/components/form/Button.vue'
    import HeroSectionImage from '@/components/workout/illustrations/OnSet.vue'
    import CloseButton from '@/components/modals/CloseButton.vue'

    import { useNavigationStore } from '@/stores/navigationStore'
    import { useRouter } from 'vue-router'

    const navigation = useNavigationStore()
    const router = useRouter()

    const toSignUp = () => {
        router.push({ name : 'Signup' })
    }

    const toLogIn = () => {
        router.push({ name : 'Login' })
    }

    const openGuestNav = () => {
        navigation.openGuestSideMenu()
    }

    const closeGuestNav = () => {
        navigation.closeGuestSideMenu()
    }
</script>

<template>
    <div class="w-full min-h-screen bg-gray-900 text-blue-50">
        <div class="w-full xl:w-[1280px] m-auto px-5 pb-5 flex flex-col gap-10 md:gap-16 relative">
            <div class="h-20 flex items-center justify-between">
                <div class="text-3xl font-bold text-blue-50">GYM<span class="text-emerald-400">LOGX</span></div>
                <!-- Burger navigation icon -->
                <div class="sm:hidden" @click="openGuestNav"><font-awesome-icon :icon="['fas', 'bars']" class="size-6 cursor-pointer hover:bg-gray-800 p-3 rounded-full" /></div>
                <!-- Navigation -->
                <div class="hidden sm:flex gap-6 text-lg items-center w-48">
                    <div class="flex-1 cursor-pointer hover:underline" @click="toLogIn">Log In</div>
                    <Button class="flex-1 w-full xl:w-auto" @click="toSignUp">Sign Up</Button>
                </div>
            </div>
            <div class="flex flex-col gap-10 md:gap-20">
                <div class="flex flex-col md:flex-row gap-4 items-center">
                    <div class="flex-1 space-y-8 text-center">
                        <div class="space-y-4">
                            <p class="text-4xl sm:text-5xl lg:text-6xl">Never forget <br /> your progress</p>
                            <p class="text-lg sm:text-xl lg:text-2xl">Gym<span class="text-emerald-400">Logx</span> remembers <br /> every set and rep for you!</p>
                        </div>
                        <div>
                            <Button class="w-full xl:w-auto" @click="toSignUp">Get Started</Button>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center items-center"><HeroSectionImage class="size-64 sm:size-96" /></div>
                </div>
                <div class="text-center space-y-4">
                    <div class="text-3xl">What is <br /> Gym<span class="text-emerald-400">Logx</span> ?</div>
                    <div class="sm:px-20 md:px-32 lg:px-56">
                        Gym<span class="text-emerald-400">Logx</span> is an app designed to help users <span class="underline text-emerald-400">track and log their gym workouts</span>. <br /> It allows users to record details such as the exercise name, muscle group, weight lifted, number of sets, and reps, as well as the workout date. <br />GymLogx can visualize the progress <span class="underline text-emerald-400">through dynamic charts, providing users with insights into their performance over time</span>. Gym<span class="text-emerald-400">Logx</span> makes it easy to monitor your fitness journey.
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-xs">&copy; Gym<span class="text-emerald-400">Logx</span> - remembers your workout sets</p>
                </div>
            </div>
            
            <!-- MENU FOR SMALL SCREENS -->
            <div class="sm:hidden">
                <Transition name="fade-bg">
                    <div 
                        v-if="navigation.isGuestSideNavigationOpen" 
                        class="fixed inset-0 z-[98] bg-black bg-opacity-50 lg:hidden"
                        @click="closeGuestNav">
                    </div>
                </Transition>
                
                <Transition name="side-menu">
                    <div 
                        v-if="navigation.isGuestSideNavigationOpen" 
                        class="fixed z-[99] top-0 left-0 h-full w-48 bg-gray-800 shadow-2xl p-8 flex flex-col justify-between lg:hidden"
                        @click.stop>
                        <div class="space-y-8">
                            <div class="flex flex-col gap-4 items-end">
                                <div class="flex justify-center items-center">
                                    <CloseButton class="size-12 bg-gray-700 rounded-full" @click="closeGuestNav" />
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 items-end">
                                <div class="cursor-pointer" @click="toLogIn">Log In</div>
                                <div class="cursor-pointer" @click="toSignUp">Sign Up</div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .side-menu-enter-active, 
    .side-menu-leave-active {
        transition: .5s ease all;
    }

    .side-menu-enter-from,
    .side-menu-leave-to {
        transform: translate(-192px);
    }

    .side-menu-enter-to {
        transform: translate(0);
    }

    .fade-bg-enter-active,
    .fade-bg-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-bg-enter-from,
    .fade-bg-leave-to {
    opacity: 0;
    }
</style>