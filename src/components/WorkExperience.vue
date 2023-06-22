<script lang="js">
import { defineComponent } from 'vue';

import Button from 'primevue/button'
import Inplace from 'primevue/inplace';

import WorkCard from '@/components/WorkCard.vue'

export default defineComponent({
    components: {
        Button,
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
        <WorkCard 
            v-for="(job, index) in this.mostRecentWork"
            :key="job.endDate"
            :class="{'mt-4': index !==0 }"
            :work-item="job"/>
    
        <Inplace>
            <template #display>
                <div class="flex justify-content-center w-full">
                    <Button aria-label="Show More" icon="pi pi-plus" severity="help" rounded raised />
                </div>
            </template>
            
            <template #content>
                <WorkCard 
                    v-for="job in this.olderWork"
                    :key="job.endDate"
                    class="mt-4"
                    :work-item="job"/>
            </template>
        </Inplace>
    </div>
</template>