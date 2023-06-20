<script setup>
import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import SocialProfile from '@/components/SocialProfile.vue'

import Card from 'primevue/card';

</script>

<template>
    <Card>
        <template #header>
            <div 
                class="flex justify-content-center pt-2"
            >
                <img
                    alt="profile"
                    :src="resume.data.basics.picture"
                    class="border-circle w-6 shadow-3"
                />
            </div>
        </template>
        
        <template #title> {{ resume.data.basics.name }} </template>
        
        <template #subtitle> {{ resume.data.basics.label }} </template>
        
        <template #content>
            <p v-html="resume.data.basics.summary"></p>
        </template>

        <template #footer>
            <div class="flex justify-content-center column-gap-3">
                <SocialProfile
                    class="text-3xl"
                    v-for="profile in resume.data.basics.profiles" 
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