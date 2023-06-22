<script lang="js">
import { defineComponent } from 'vue';

import Card from 'primevue/card';

export default defineComponent({
    components: {
        Card
    },
    props: {
        workItem: [Object]
    },
    data: function() {
        return {
            cardProperties: {
                root: {
                    class: "flex w-full surface-300"
                },
                title: {
                    class: "w-full surface-400 p-2 border-round-lg"
                },
                subtitle: {
                    class: "lg:text-sm md:text-xs sm:text-xs surface-100 p-2 -mt-2 border-round-bottom-lg"
                },
                body: {
                    class: "relative h-full w-full"
                },
                content: {
                    class: "flex h-full align-items-center surface-300 -mt-2 pl-2 pr-2 lg:text-sm md:text-xs sm:text-xs"
                }
            },
            truncateDate: false,
            mediaQuery: window.matchMedia('(max-width:768px)')
        }
    },
    methods: {
        humanReadableDate: function(dateString, truncateDate) {
            let options  = {
                month: truncateDate ? "short": "long",
                year: "numeric"
            }
            return new Date(dateString).toLocaleDateString(undefined, options)
        },
        dateTruncatedHandler: function(e) {
            this.truncateDate = e.matches ? true : false
        }
    },
    mounted() {
        this.mediaQuery.addEventListener("change", this.dateTruncatedHandler)
        this.dateTruncatedHandler(this.mediaQuery)
    },
    unmounted() {
        this.mediaQuery.removeEventListener("change", this.dateTruncatedHandler)
    }
})
</script>

<template>
    <Card
        :pt="this.cardProperties"
        >
        <template #title>
            <!-- Start with company image -->
            <div class="flex flex-row align-items-center">
                <div class="flex-order-1">
                    <a :href="this.workItem.website" class="mr-2">
                        <img
                            alt="company-logo"
                            :src="this.workItem.picture"
                            class="border-round max-h-3rem "
                        />
                    </a>
                </div>
                <!-- Company name and job title -->
                <div class="flex flex-column flex-grow-1 flex-order-2">
                    <div class="text-xl lg:text-lg md:text-sm sm:text-sm">{{ this.workItem.company }}</div>
                    <div class=" text-xl
                            lg:text-sm
                            lg:font-normal
                            md:text-xs
                            md:font-light
                            sm:text-xs
                            sm:font-light
                            pt-1">
                            {{ this.workItem.position }}
                    </div>
                </div>
                <!-- Date tenured -->
                <div class="flex-order-3
                    text-lg
                    lg:text-sm
                    lg:font-normal
                    md:text-xs
                    md:font-light
                    sm:text-xs
                    sm:font-light
                ">
                {{ humanReadableDate(this.workItem.startDate, this.truncateDate) }} - {{ humanReadableDate(this.workItem.endDate, this.truncateDate) }}
                </div>
            </div>
        </template>

        <!-- <template #subtitle>
            <span class="font-bold">{{ this.workItem.position }} </span>
            <Divider  class="mt-2 mb-2"/>
            {{ this.workItem.summary }}
        </template> -->

        <template #content>
            <div class="flex-order-1 flex-grow-1 ml-3">
                <p v-for="highlight in this.workItem.highlights" :key="highlight">
                {{ highlight }}
            </p>
            </div>
        </template>
    </Card>
</template>