<script setup>
    import AchievementItem from '@/components/dashboard/achievements/Item.vue'

    import { useAchievementStore } from '@/stores/achievementStore'

    const achievement = useAchievementStore()

    await achievement.get()
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-6 w-full">

        <!-- They should have unit (lbs, days, muscle,...) -->

        <div class="flex gap-6 w-full">
            <!-- Streak -->
            <AchievementItem :highlighted="true">
                <template #title>Streak</template>
                <template #icon><font-awesome-icon :icon="['fas', 'fire']" class="size-5 2xl:size-7" /></template>
                <template #content>{{ achievement.streak }}</template>
                <template #unit>days</template>
                <template #description>Your workout streak is {{ achievement.streak }} days</template>
            </AchievementItem>

            <!-- Workout days this month -->
            <AchievementItem :highlighted="false">
                <template #title>This Month</template>
                <template #icon><font-awesome-icon :icon="['fas', 'calendar-days']" class="size-5 2xl:size-7" /></template>
                <template #content>{{ achievement.workoutDays }}</template>
                <template #unit>days</template>
                <template #description>This month, you workout {{ achievement.workoutDays }} days</template>
            </AchievementItem>
        </div>

        <div class="flex flex-col xl:flex-row gap-6 flex-1">
            <!-- Weight level on ... (the most popular exercise or the most current exercise) -->
            <AchievementItem v-if="achievement.mostPopularExerciseComparison !== null" :highlighted="false">
                <template #title>{{ achievement.mostPopularExerciseComparison.exerciseName }}</template>
                <template #icon><font-awesome-icon :icon="['fas', 'star']" class="size-5 2xl:size-7" /></template>
                <template #content>
                    <div v-if="achievement.mostPopularExerciseComparison.comparison.direction === 'increase'">
                        <font-awesome-icon :icon="['fas', 'up-long']" size="xs" class="text-emerald-400" />
                    </div>
                    <div v-else-if="achievement.mostPopularExerciseComparison.comparison.direction === 'decrease'">
                        <font-awesome-icon :icon="['fas', 'down-long']" size="xs" class="text-red-400" />
                    </div>
                    <div v-else></div>
                    {{ achievement.mostPopularExerciseComparison.comparison.value }}
                </template>
                <template #unit>{{ achievement.mostPopularExerciseComparison.comparison.metric }}</template>
                <template #description>As the previous result</template>
            </AchievementItem>
            <AchievementItem v-else :highlighted="false">
                <template #title>Biceps Curl</template>
                <template #icon><font-awesome-icon :icon="['fas', 'star']" class="size-5 2xl:size-7" /></template>
                <template #content>
                    <div>
                        <font-awesome-icon :icon="['fas', 'up-long']" size="xs" class="text-emerald-400" />
                    </div>
                    <div>0</div>
                </template>
                <template #unit>reps</template>
                <template #description>As the previous result</template>
            </AchievementItem>

            <AchievementItem :highlighted="false">
                <template #title>This week</template>
                <template #icon><font-awesome-icon :icon="['fas', 'chart-simple']" class="size-5 2xl:size-7" /></template>
                <template #content>{{ achievement.totalExerciseThisWeek }}</template>
                <template #unit>exercises</template>
                <template #description>This week, you have done {{ achievement.totalExerciseThisWeek }} exercises</template>
            </AchievementItem>
        </div>
    </div>
</template>