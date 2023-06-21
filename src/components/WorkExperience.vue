<script lang="js">
import { defineComponent } from 'vue';

import Inplace from 'primevue/inplace';

import WorkCard from '@/components/WorkCard.vue'

export default defineComponent({
    components: {
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
    
        <Inplace :closable="true">
            <template #display>
                Click for more
            </template>
            
            <template #content>
                <WorkCard 
                    v-for="job in this.olderWork"
                    class="mt-4"
                    :key="job.endDate"
                    :work-item="job"/>
            </template>

            <template #closeicon>
                CLOSE ME
            </template>
            
        </Inplace>
    </div>
</template>