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
                    class: "flex w-full surface-200"
                },
                title: {
                    class: "flex w-full surface-300 p-2 border-round-top-lg"
                },
                subtitle: {
                    class: "text-sm sm:text-xs surface-100 p-2 -mt-2 border-round-bottom-lg"
                },
                body: {
                    class: "relative h-full w-full"
                },
                content: {
                    class: "flex h-full  align-items-center surface-200 -mt-2 pl-2 pr-2 sm:text-xs"
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
    <template 
        v-for="(job, index) in workProfile"
        :key="job.endDate">
        <Card
            :pt="this.cardProperties"
            :class="{'mt-4': index !==0 }"
            >
            <template #title>
                <div class="flex-order-1 flex-grow-1 text-lg sm:text-sm">{{ job.company }}</div>
                <div class="flex-order-2
                    align-self-end
                    text-sm
                    font-normal
                    sm:text-xs sm:font-light
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
</template>