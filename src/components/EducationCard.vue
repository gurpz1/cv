<script lang="js">
import { ref,defineComponent } from 'vue';

export default defineComponent({
    props: {
        educationProfile: {type: [Object], required: true}
    },
    data: function() {
        return {
            truncateDate: false,
            mediaQuery: window.matchMedia('(max-width:768px)')
        }
    },
    methods: {
        humanReadableDate: function(dateString) {
            let options  = {
                year: "numeric"
            }
            return new Date(dateString).toLocaleDateString(undefined, options)
        },
    },
    computed: {
        latestEducation: function() {
            return this.educationProfile[0];
        }
    }
})
</script>

<template>
    <div class="flex flex-row align-items-center">
        <img
            alt="institute-logo"
            :src="this.latestEducation.picture"
            class="border-circle max-h-2rem mr-2"
        />
        <div class="flex-column">
            <div class="
            font-medium
            line-height-4"> {{ this.latestEducation.institution }}</div>
            <div class="
            line-height-4">{{ this.latestEducation.studyType }} {{ this.latestEducation.area }}</div>
            <div class="
            line-height-4
            font-italic
            ">{{ this.humanReadableDate(this.latestEducation.startDate) }} - 
                {{ this.humanReadableDate(this.latestEducation.endDate) }}</div>
        </div>
    </div>
</template>