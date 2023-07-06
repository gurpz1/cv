<script lang="js">
import { defineComponent } from 'vue';

import AssetRegistry from '@/assets/asset_registry';

export default defineComponent({
    props: {
        name: {type: String, required: true},
        summary: {type: String, required: true},
        startDate: {type: Date},
        endDate: {type: Date},
        picture: {type: String},
        url: {type: String}
    },
    data: function() {
        return {
            AssetRegistry
        }
    },
    methods: {
        humanReadableDate: function(date) {
            let options  = {
                year: "numeric"
            }
            return date.toLocaleDateString(undefined, options)
        },
        isValidDate: function(date) {
            return date instanceof Date && !isNaN(date.valueOf());
        }
    }
})
</script>

<template>
       <div class="flex flex-row align-items-center justify-content-start">
            <a :href="this.url" target="_blank">
                <img
                    :alt="this.name.replace(/\s+/g, '-').toLowerCase() + '-picture'"
                    :src="this.AssetRegistry.get(this.picture)"
                    class="border-round 
                        w-3rem
                        mr-2"
                />
            </a>
        <div class="flex-column">
            
            <div class="flex font-medium line-height-4">
                {{ this.name }}
            </div>
            
            <div class="flex line-height-2 text-xs">
                {{ this.summary }}
            </div>
            

            <template class="flex line-height-4 text-xs font-italic">
                <div v-if="isValidDate(this.startDate) && isValidDate(this.endDate)">
                    {{ this.humanReadableDate(this.startDate) }} - {{ this.humanReadableDate(this.endDate) }}
                </div>
                <div v-if="isValidDate(this.startDate) && !isValidDate(this.endDate)">
                    {{ this.humanReadableDate(this.startDate) }}
                </div>
            </template>

        </div>
    </div>
</template>