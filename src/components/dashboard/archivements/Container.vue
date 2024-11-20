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
    <div class="flex gap-6">

        <!-- They should have unit (lbs, days, muscle,...) -->

        <div class="flex gap-6">
            <!-- Streak -->
            <ArchivementItem>
                <template #title>Streak</template>
                <template #content>{{ archivement.streak }}</template>
            </ArchivementItem>

            <!-- Workout days this month -->
            <ArchivementItem>
                <template #title>Workout Days</template>
                <template #content>{{ archivement.workoutDays }}</template>
            </ArchivementItem>
        </div>

        <div class="flex gap-6">
            <!-- Weight level on ... (the most popular exercise or the most current exercise) -->
            <ArchivementItem>
                <template #title>{{ archivement.mostPopularExerciseComparison.exerciseName }}</template>
                <template #content>
                    {{ archivement.mostPopularExerciseComparison.comparison.direction }}
                    {{ archivement.mostPopularExerciseComparison.comparison.value }}
                    {{ archivement.mostPopularExerciseComparison.comparison.metric }}
                </template>
            </ArchivementItem>

            <!--  -->
            <ArchivementItem>
                <template #title>Exercises this week</template>
                <template #content>{{ archivement.totalExerciseThisWeek }}</template>
            </ArchivementItem>
        </div>
    </div>
</template>