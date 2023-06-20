<script lang="js">
import { defineComponent } from 'vue';

import Card from 'primevue/card';

export default defineComponent({
    components: {
        Card
    },
    props: {
        workProfile: [Object]
    },
    data: function() {
        return {
            cardProperties: {
                root: {
                    class: "flex w-full"
                },
                title: {
                    class: "flex w-full"
                },
                subtitle: {
                    class: "text-sm"
                },
                body: {
                    class: "relative h-full w-full"
                },
                content: {
                    class: "flex h-full  align-items-center"
                }
            }
        }
    },
    methods: {
        humanReadableDate: function(dateString) {
            let options  = {
                month:"long",
                year: "numeric"
            }
            return new Date(dateString).toLocaleDateString(undefined, options)
        }
    }
})

</script>

<template>
    <Card 
        v-for="(job, index) in workProfile"
        :key="job.endDate"
        :pt="this.cardProperties"
        :class="{'mt-4': index !==0 }"
        >
        <template #title>
            <div class="flex-order-1 flex-grow-1">{{ job.company }}</div>
            <div class="flex-order-2
                align-self-end
                text-sm
                font-normal
            ">
            {{ humanReadableDate(job.startDate) }} - {{ humanReadableDate(job.endDate) }}
            </div>
        </template>

        <template #subtitle>
            {{ job.summary }}
        </template>

        <template #content>
            <div class="flex-order-0 vertical-align-middle">
                <img
                    alt="company-logo"
                    :src="job.picture"
                    class="border-round max-h-3rem "
                />
            </div>
            <div class="flex-order-1 flex-grow-1 ml-3">
                <p v-for="highlight in job.highlights" :key="highlight">
                {{ highlight }}
            </p>
            </div>
            
        </template>
    </Card>
</template>