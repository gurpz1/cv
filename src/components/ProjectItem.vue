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
        name: { type: String, required: true },
        summary: { type: String, required: true },
        highlights: { type: Array, required: true },
    },
    computed: {
        hasSlots: function () {
            return !!this.$slots.default && this.$slots.default()[0].children !== "v-if";
        }
    }
})
</script>

<template>

    <div class="flex
                gap-4
                flex-column
                xl:flex-row
                lg:flex-row
                md:flex-row
                sm:flex-row
                w-full
                print-page">
        <div class="flex flex-column w-full flex-order-0">
            <div class="flex text-xl lg:text-xl md:text-lg sm:text-sm">
                {{ this.name }}
            </div>

            <div class="flex 
                mt-1
                text-sm
                xl:text-sm
                lg:text-sm
                lg:font-normal
                md:text-xs
                md:font-light
                sm:text-xs
                sm:font-light"> 
                {{ this.summary }}
            </div>

            <Divider class="flex w-3rem" />

            <p v-for="highlight in this.highlights" :key="highlight"
                class="
                flex
                text-sm
                mt-1
                mb-1
                line-height-2
                w-full
                xl:text-sm
                lg:text-sm
                md:text-xs
                sm:text-xs">
                {{ highlight }}
            </p>
            
        </div>

        <div class="flex
                align-self-center
                justify-content-center
                w-full
                h-full"
            v-if="this.hasSlots">
            <Card class="no-print">
                <template #content>
                    <slot></slot>
                </template>
            </Card>
            <template class="print-only">
                <slot></slot>
            </template>
        </div>
    </div>

</template>