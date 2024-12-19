<script setup>
    import { useHistoryStore } from '@/stores/historyStore'
    import { useRouter } from 'vue-router'

    const history = useHistoryStore()
    const router  = useRouter()

    const toPage = (pageNumber) => {
        history.get(pageNumber)
        router.push({ name : "History", query : { page : pageNumber } })
    }
</script>

<template>
    <div class="flex justify-center">
        <nav aria-label="Page navigation">
            <ul class="flex gap-2 -space-x-px text-base h-10">
                <li v-if="history.records.pagination.previous_page !== null">
                    <div @click="toPage(history.records.pagination.previous_page)" class="cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-700 bg-white rounded-lg hover:bg-emerald-600 hover:text-white dark:bg-gray-800 dark:text-blue-50 dark:hover:bg-emerald-600 shadow-lg"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
                </li>

                <li>
                    <div 
                        class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-700 bg-white dark:bg-gray-800 dark:text-blue-50 rounded-lg shadow-lg cursor-default">
                            Page {{ history.records.pagination.current_page }} of {{ history.records.pagination.total_pages }}
                    </div>
                </li>

                <li v-if="history.records.pagination.next_page !== null">
                    <div @click="toPage(history.records.pagination.next_page)" class="cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-700 bg-white rounded-lg hover:bg-emerald-600 hover:text-white dark:bg-gray-800 dark:text-blue-50 dark:hover:bg-emerald-600 shadow-lg"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
                </li>
            </ul>
        </nav>
    </div>
</template>
