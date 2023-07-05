<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        institution: {type: String, required: true},
        studyType: {type: String, required: true},
        area: {type: String, required: true},
        startDate: {type: Date},
        endDate: {type: Date},
        picture: {type: String, required: true}
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
        <img
            alt="institute-logo"
            :src="this.picture"
            class="border-round 
                w-3rem
                mr-2"
        />
        <div class="flex-column">
            
            <div class="flex font-medium line-height-4">
                {{ this.institution }}
            </div>
            
            <div class="flex line-height-4">
                {{ this.studyType }} {{ this.area }}
            </div>
            

            <template class="flex line-height-4 font-italic">
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