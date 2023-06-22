<script lang="js">
import { defineComponent } from 'vue';

import SocialProfileIcon from '@/components/SocialProfileIcon.vue'
import EducationCard from './EducationCard.vue';

import Card from 'primevue/card';
import Divider from 'primevue/divider';


export default defineComponent({
    components: {
    Card,
    Divider,
    SocialProfileIcon,
    EducationCard
},
    props: {
        basicProfile: {type: [Object], required: true},
        educationProfile: {type: [Object], required: true}
    },
    data: function() {
        return {
            cardProperties: {
                root: {
                    class: "flex flex-nowrap flex-column"
                },
                body: {
                    class: "relative h-full text-sm"
                },
                content: {
                    class: '-mt-4'
                },
                footer: {
                    class: "bottom-0  left-0 pb-2 absolute w-full"
                }
            }
        }
    }
})

</script>

<template>
    <Card :pt="this.cardProperties">
        <template #header>
            <div 
                class="flex justify-content-center pt-2"
            >
                <img
                    alt="profile"
                    :src="this.basicProfile.picture"
                    class="border-circle w-6 shadow-3"
                />
            </div>
        </template>
        
        <template #title> {{ this.basicProfile.name }} </template>
        
        
        <template #subtitle>
            {{ this.basicProfile.label }}
            <Divider/>
        </template>
        
        
        <template #content>
            <p v-html="this.basicProfile.summary"></p>
            <Divider />
            <h3>Education</h3>
            <EducationCard class="-mt-2" :education-profile="this.educationProfile" />
        </template>
        
        <template #footer>
            <div class="flex justify-content-center column-gap-3">
                <SocialProfileIcon
                class="text-3xl"
                v-for="profile in this.basicProfile.profiles" 
                :key="profile.network"
                :icon="profile.icon"
                :network="profile.network"
                :url="profile.url"
                :username="profile.username"
                />
            </div>
        </template>
    </Card>
</template>