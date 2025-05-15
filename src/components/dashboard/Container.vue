<script setup>
    import ProgressChart from '@/components/dashboard/charts/ProgressChart.vue'
    import MuscleProportionsChart from '@/components/dashboard/charts/MuscleProportionsChart.vue'
    import Achievement from '@/components/dashboard/achievements/Container.vue'
    import DashboardLoadingAnimation from '@/components/loading_animation/Dashboard.vue'
    import { Button } from '@/components/ui/button'
    import { Plus } from 'lucide-vue-next'

    import { useRouter } from 'vue-router'
    import { Calendar } from '@/components/ui/calendar'
    import { getLocalTimeZone, today, parseDate } from '@internationalized/date'
    import { ref, computed } from 'vue'
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
    import { Clock, Dumbbell, Timer } from 'lucide-vue-next'

    // Mock data for workout days with frequency
    const workoutDays = [
        { date: '2025-05-01', count: 2 },
        { date: '2025-05-05', count: 1 },
        { date: '2025-05-10', count: 3 },
        { date: '2025-05-15', count: 1 },
        { date: '2025-05-20', count: 2 },
        { date: '2025-05-25', count: 1 },
    ].map(item => ({
        ...item,
        date: parseDate(item.date)
    }))

    const value = ref(today(getLocalTimeZone()))

    const router = useRouter()

    const selectMuscleAndExercise = () => {
        router.push({ name: 'Muscle Selection Screen' })
    }

    const getWorkoutCount = (date) => {
        const workout = workoutDays.find(workoutDate => 
            workoutDate.date.compare(date) === 0
        )
        return workout ? workout.count : 0
    }

    const getHeatMapColor = (count) => {
        switch(count) {
            case 0: return 'bg-gray-100 dark:bg-gray-800'
            case 1: return 'bg-emerald-100 dark:bg-emerald-900'
            case 2: return 'bg-emerald-300 dark:bg-emerald-700'
            case 3: return 'bg-emerald-500 dark:bg-emerald-500'
            default: return 'bg-emerald-700 dark:bg-emerald-300'
        }
    }

    const calendarModifiers = computed(() => ({
        workout: (date) => getWorkoutCount(date) > 0
    }))

    const calendarModifierStyles = computed(() => ({
        workout: (date) => getHeatMapColor(getWorkoutCount(date))
    }))

    // Mock data for recent workout
    const recentWorkout = {
        date: '2025-05-25',
        duration: 75, // minutes
        exercises: [
            { name: 'Bench Press', sets: 4, reps: 12, weight: 60 },
            { name: 'Squats', sets: 4, reps: 10, weight: 80 },
            { name: 'Deadlift', sets: 3, reps: 8, weight: 100 }
        ],
        totalVolume: 4560 // kg
    }
</script>

<template>
    <div>
        <Suspense>
            <div class="space-y-6">
                <!-- Page Header -->
                <div class="flex justify-between items-center">
                    <h1 class="text-3xl text-gray-900 dark:text-blue-50">Dashboard</h1>
                    
                    <Button @click="selectMuscleAndExercise" class="text-white">
                        <Plus class="size-4" /> Workout now
                    </Button>
                </div>

                <Achievement />
                
                <ProgressChart />

                <div class="flex gap-6">
                    <MuscleProportionsChart />
                
                    <Calendar 
                        v-model="value" 
                        :weekday-format="'short'" 
                        class="rounded-md border"
                        :modifiers="calendarModifiers"
                        :modifiers-styles="calendarModifierStyles"
                    />

                    <!-- Recent Workout Card -->
                    <Card class="flex-1">
                        <CardHeader>
                            <CardTitle class="flex items-center gap-2">
                                <Clock class="w-5 h-5" />
                                Recent Workout
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-4">
                                <div class="text-sm text-muted-foreground">
                                    {{ recentWorkout.date }}
                                </div>
                                <div class="space-y-2">
                                    <div v-for="exercise in recentWorkout.exercises" :key="exercise.name" 
                                        class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div class="flex items-center gap-2">
                                            <Dumbbell class="w-4 h-4" />
                                            <span class="font-medium">{{ exercise.name }}</span>
                                        </div>
                                        <div class="text-sm text-muted-foreground">
                                            {{ exercise.sets }}x{{ exercise.reps }} @ {{ exercise.weight }}kg
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <template #fallback>
                <DashboardLoadingAnimation />
            </template>
        </Suspense>
    </div>
</template>