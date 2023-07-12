<script lang="js">
import { defineComponent } from 'vue';

import AchievementItem from './AchievementItem.vue';
import SocialProfileIcon from '@/components/SocialProfileIcon.vue'
import EducationItem from './EducationItem.vue';

import Card from 'primevue/card';
import Divider from 'primevue/divider';


export default defineComponent({
    components: {
    Card,
    Divider,
    SocialProfileIcon,
    EducationItem,
    AchievementItem,
},
    props: {
        basicProfile: {type: [Object], required: true},
        educationProfile: {type: [Object], required: true},
        achievementProfile: {type: [Object], required: true}
    },
    data: function() {
        return {
            maxEducationItems:2,
            cardProperties: {
                root: {
                    class: "flex flex-nowrap flex-column"
                },
                body: {
                    class: "h-full text-sm"
                },
                content: {
                    class: '-mt-4'
                },
                footer: {
                    class: "pb-2 w-full"
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
            
            <!-- Education -->
            <h3>Education</h3>
            <template 
                v-for="(education, index) in this.educationProfile.slice(0,this.maxEducationItems)"
                :key="education.area">
                <EducationItem
                    :class="{'-mt-2': index === 0}"
                    class="gap-2"
                    :institution="education.institution"
                    :studyType="education.studyType"
                    :area="education.area"
                    :start-date="new Date(education.startDate)"
                    :end-date="new Date(education.endDate)"
                    :picture="education.picture"
                    :url="education.url"
                     />
                <Divider v-if="index < maxEducationItems - 1" class="flex w-3rem"/>
            </template>
                
            <Divider />

            <!-- Achievements -->
            <h3>Achievements</h3>
            <template
                v-for="(achievement, index) in this.achievementProfile"
                :key="achievement.name">
                <AchievementItem
                    :name="achievement.name"
                    :summary="achievement.summary"
                    :picture="achievement.picture"
                    :url="achievement.url"
                />
                <Divider v-if="index < this.achievementProfile.length - 1" class="flex w-3rem"/>
            </template>

            <Divider />

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