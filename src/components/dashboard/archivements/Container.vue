<script setup>
    import ArchivementItem from '@/components/dashboard/archivements/Item.vue'

    import { useArchivementStore } from '@/stores/archivementStore'

    const archivement = useArchivementStore()

    await archivement.getStreak()
    await archivement.getWorkoutDays()
    await archivement.getMostPopularExerciseComparison()
    await archivement.getTotalExerciseThisWeek()
</script>

<template>
    <div class="flex gap-6 w-full">

        <!-- They should have unit (lbs, days, muscle,...) -->

        <div class="flex gap-6 flex-1">
            <!-- Streak -->
            <ArchivementItem :highlighted="true">
                <template #title>Streak</template>
                <template #icon><font-awesome-icon :icon="['fas', 'fire']" size="xl" /></template>
                <template #content>{{ archivement.streak }}</template>
                <template #unit>days</template>
                <template #description>Your workout streak is {{ archivement.streak }} days</template>
            </ArchivementItem>

            <!-- Workout days this month -->
            <ArchivementItem :highlighted="false">
                <template #title>This Month</template>
                <template #icon><font-awesome-icon :icon="['fas', 'calendar-days']" size="xl" /></template>
                <template #content>{{ archivement.workoutDays }}</template>
                <template #unit>days</template>
                <template #description>This month, you workout {{ archivement.workoutDays }} days</template>
            </ArchivementItem>
        </div>

        <div class="flex gap-6 flex-1">
            <!-- Weight level on ... (the most popular exercise or the most current exercise) -->
            <ArchivementItem :highlighted="false">
                <template #title>{{ archivement.mostPopularExerciseComparison.exerciseName }}</template>
                <template #icon><font-awesome-icon :icon="['fas', 'star']" size="xl" /></template>
                <template #content>
                    <div v-if="archivement.mostPopularExerciseComparison.comparison.direction === 'increase'">
                        <font-awesome-icon :icon="['fas', 'up-long']" size="xs" class="text-emerald-400" />
                    </div>
                    <div v-else-if="archivement.mostPopularExerciseComparison.comparison.direction === 'decrease'">
                        <font-awesome-icon :icon="['fas', 'down-long']" size="xs" class="text-red-400" />
                    </div>
                    <div v-else></div>
                    {{ archivement.mostPopularExerciseComparison.comparison.value }}
                </template>
                <template #unit>{{ archivement.mostPopularExerciseComparison.comparison.metric }}</template>
                <template #description>As the previous result</template>
            </ArchivementItem>

            <ArchivementItem :highlighted="false">
                <template #title>This week</template>
                <template #icon><font-awesome-icon :icon="['fas', 'chart-simple']" size="xl" /></template>
                <template #content>{{ archivement.totalExerciseThisWeek }}</template>
                <template #unit>exercises</template>
                <template #description>This week, you have done {{ archivement.totalExerciseThisWeek }} exercises</template>
            </ArchivementItem>
        </div>
    </div>
</template>