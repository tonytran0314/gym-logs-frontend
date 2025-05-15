<script setup>
    import AchievementItem from '@/components/dashboard/achievements/Item.vue'

    import { useAchievementStore } from '@/stores/achievementStore'
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'

    import { Flame } from 'lucide-vue-next'
    import { CalendarDays } from 'lucide-vue-next'
    import { Star } from 'lucide-vue-next'
    import { ChartNoAxesColumnIncreasing } from 'lucide-vue-next'
    import { MoveDownRight } from 'lucide-vue-next'
    import { MoveUpRight } from 'lucide-vue-next'

    const achievement = useAchievementStore()

    await achievement.get()
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-6 w-full">

        <!-- They should have unit (lbs, days, muscle,...) -->

        <div class="flex gap-6 w-1/2">
            <Card class="w-1/2">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Streak</CardTitle>
                    <Flame class="w-4 h-4" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ achievement.streak }} days</div>
                    <p class="text-xs text-muted-foreground">
                        Your workout streak is {{ achievement.streak }} days
                    </p>
                </CardContent>
            </Card>
            <Card class="w-1/2">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">This Month</CardTitle>
                    <CalendarDays class="w-4 h-4" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ achievement.workoutDays }} days</div>
                    <p class="text-xs text-muted-foreground">
                        This month, you workout {{ achievement.workoutDays }} days
                    </p>
                </CardContent>
            </Card>
        </div>

        
        <div class="flex gap-6 w-1/2">
            <Card class="w-1/2" v-if="achievement.mostPopularExerciseComparison !== null">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium max-w-[75%] line-clamp-1">{{ achievement.mostPopularExerciseComparison.exerciseName }}</CardTitle>
                    <Star class="w-4 h-4" />
                </CardHeader>
                <CardContent>
                    <div class="flex items-center">
                        <MoveUpRight v-if="achievement.mostPopularExerciseComparison.comparison.direction === 'increase'" class="w-4 h-4 mr-2 text-green-500" />
                        <MoveDownRight v-else-if="achievement.mostPopularExerciseComparison.comparison.direction === 'decrease'" class="w-4 h-4 mr-2 text-red-500" />
                        <div class="text-2xl font-bold">{{ achievement.mostPopularExerciseComparison.comparison.value }}</div>
                        <span class="text-xs text-muted-foreground ml-2">{{ achievement.mostPopularExerciseComparison.comparison.metric }}</span>
                    </div>
                    <p class="text-xs text-muted-foreground">Compared to previous result</p>
                </CardContent>
            </Card>
            <Card class="w-1/2" v-else>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Most Popular Exercise</CardTitle>
                    <Star class="w-4 h-4" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">No data</div>
                    <p class="text-xs text-muted-foreground">Start tracking to see your progress</p>
                </CardContent>
            </Card>

            <Card class="w-1/2">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">This Week</CardTitle>
                    <ChartNoAxesColumnIncreasing class="w-4 h-4" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ achievement.totalExerciseThisWeek }} exercises</div>
                    <p class="text-xs text-muted-foreground">
                        This week, you have done {{ achievement.totalExerciseThisWeek }} exercises
                    </p>
                </CardContent>
            </Card>
        </div>
    </div>
</template>