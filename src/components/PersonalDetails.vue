<script setup>
import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import Card from 'primevue/card';

</script>

<template>
    <Card>
        <template #header>
            <div class="flex justify-content-center pt-2">
                <img
                    alt="profile"
                    src="../assets/profile.png"
                    class="border-circle w-11"
                />
            </div>
        </template>
        
        <template #title> {{ resume.data.basics.name }} </template>
        
        <template #subtitle> {{ resume.data.basics.label }} </template>
        
        <template #content>
            <p v-html="resume.data.basics.summary"></p>
        </template>

        <template #footer>
            <div v-for="profile in resume.data.basics.profiles">
                
            </div>
        </template>
    </Card>
</template>