<script lang="js">
import { defineComponent } from 'vue';

import Divider from 'primevue/divider';

export default defineComponent({
    components: {
        Divider
    },
    props: {
        workItem: {type: [Object], required: true}
    },
    data: function() {
        return {
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
    <div class="flex flex-column w-full">
        <div class="flex flex-row align-items-center">
            <!-- Company image -->
            <div class="flex-order-1">
                <a :href="this.workItem.website" target="_blank" class="mr-2">
                    <img
                        alt="company-logo"
                        :src="this.workItem.picture"
                        class="border-circle max-h-3rem "
                    />
                </a>
            </div>
            <!-- Company name and job title -->
            <div class="flex flex-column flex-grow-1 flex-order-2">
                <div class="text-xl lg:text-xl md:text-lg sm:text-sm">{{ this.workItem.company }}</div>
                <div class=" text-sm
                        xl:text-sm
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
                text-sm
                xl:text-sm
                lg:text-sm
                md:text-xs
                md:font-light
                sm:text-xs
                sm:font-light
            ">
            {{ humanReadableDate(this.workItem.startDate, this.truncateDate) }} - {{ humanReadableDate(this.workItem.endDate, this.truncateDate) }}
            </div>
        </div>
        <Divider class="w-3rem"/>
        <!-- Summary Paragraph -->
        <div class="flex-order-4
            flex-grow-1
            pl-4
            ml-5" style="flex-basis: 100%;"
        >
            <p 
            class="mt-1
            mb-1
            line-height-2
            text-sm
            xl:text-sm
            lg:text-sm
            md:text-xs
            sm:text-xs"
            v-for="highlight in this.workItem.highlights" :key="highlight" v-html="highlight">
            </p>
        </div>
    </div>
</template>