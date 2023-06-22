<script lang="js">
import { defineComponent } from 'vue';

import Button from 'primevue/button'
import Divider from 'primevue/divider';
import Inplace from 'primevue/inplace';

import WorkCard from '@/components/WorkCard.vue'

export default defineComponent({
    components: {
        Button,
        Divider,
        Inplace,
        WorkCard
    },
    data: function() {
        return {
            maxYearsToShowHistory: 10
        }
    },
    props: {
        workProfile: [Object]
    },
    computed: {
        mostRecentWork: function() {
            return this.workProfile.filter(x => this.getYearFromDateString(x.startDate) > this.getCurrentYear() - this.maxYearsToShowHistory)
        },
        olderWork: function() {
            return this.workProfile.filter(x => this.getYearFromDateString(x.startDate) <= this.getCurrentYear() - this.maxYearsToShowHistory)
        }
    },
    methods: {
        getYearFromDateString: function(dateString) {
            return (new Date(dateString)).getFullYear()
        },
        getCurrentYear: function() {
            return (new Date(Date.now())).getFullYear()
        }
    }
})

</script>

<template>
    <div>
        <template v-for="(job, index) in this.mostRecentWork" :key="job.endDate">
        <WorkCard 
            :class="{'mt-4': index !==0 }"
            :work-item="job"/>
        <Divider v-if="index !== this.mostRecentWork.length - 1" />
        </template>

        <Inplace>
            <template #display>
                <div class="flex justify-content-center w-full">
                    <Button aria-label="Show More" icon="pi pi-plus" severity="help" rounded raised />
                </div>
            </template>
            
            <template #content>
                <template v-for="job in this.olderWork" :key="job.endDate">
                    <Divider />
                    <WorkCard 
                        class="mt-4"
                        :work-item="job"/>
                </template>
            </template>
        </Inplace>
    </div>
</template>