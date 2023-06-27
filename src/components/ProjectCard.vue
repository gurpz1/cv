<script lang="js">
import { defineComponent } from 'vue';


export default defineComponent({
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
    
    <div class="flex flex-column w-full">
        <div class="flex text-xl lg:text-xl md:text-lg sm:text-sm">
            {{ this.name }}
        </div>
        
        <div class="flex mt-1
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
    </div>

    <div class="flex 
            flex-column
            lg:flex-row
            md:flex-column
            sm:flex-column
            w-full
            h-full
            gap-4
            mt-4">
        <div class="flex 
                flex-column
                justify-content-center
                w-full">
            <div v-for="(highlight,index) in this.highlights" :key="highlight"
                class="
                flex
                text-sm
                xl:text-sm
                lg:text-sm
                md:text-xs
                sm:text-xs">
                {{ highlight }}
                <br v-if="index < this.highlights.length -1" />
                <br v-if="index < this.highlights.length -1"/>
            </div>
        </div>
        
        <div class="flex
                justify-items-center
                justify-content-center
                w-full
                h-full
                sm:gap-2"
            v-if="this.hasSlots">
            <slot />
        </div>
    </div>

</template>