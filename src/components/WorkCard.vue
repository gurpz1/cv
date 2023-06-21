<script lang="js">
import { defineComponent } from 'vue';

import Card from 'primevue/card';
import Divider from 'primevue/divider';

export default defineComponent({
    components: {
        Card,
        Divider
    },
    props: {
        workItem: [Object]
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
                    class: "lg:text-sm md:text-xs surface-100 p-2 -mt-2 border-round-bottom-lg"
                },
                body: {
                    class: "relative h-full w-full"
                },
                content: {
                    class: "flex h-full align-items-center surface-200 -mt-2 pl-2 pr-2 lg:text-sm md:text-xs"
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
        :pt="this.cardProperties"
        >
        <template #title>
            <div class="flex-order-1 flex-grow-1 lg:text-lg md:text-sm">{{ this.workItem.company }}</div>
            <div class="flex-order-2
                align-self-end
                lg:text-sm
                lg:font-normal
                md:text-xs
                md:font-light
            ">
            {{ humanReadableDate(this.workItem.startDate) }} - {{ humanReadableDate(this.workItem.endDate) }}
            </div>
        </template>

        <template #subtitle>
            <span class="font-bold">{{ this.workItem.position }} </span>
            <Divider  class="mt-2 mb-2"/>
            {{ this.workItem.summary }}
        </template>

        <template #content>
            <div class="flex-order-0 vertical-align-middle">
                <img
                    alt="company-logo"
                    :src="this.workItem.picture"
                    class="border-round max-h-3rem "
                />
            </div>
            <div class="flex-order-1 flex-grow-1 ml-3">
                <p v-for="highlight in this.workItem.highlights" :key="highlight">
                {{ highlight }}
            </p>
            </div>
        </template>
    </Card>
</template>