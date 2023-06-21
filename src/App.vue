<script setup>

import Card from 'primevue/card';


import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import ProfileBar from '@/components/ProfileBar.vue'
import WorkExperience from '@/components/WorkExperience.vue'

</script>

<template>
    <div class="grid">
      <aside class="
        sm:col-5
        md:col-5
        lg:col-4
        xl:col-3"
        style="height: 93vh">
        
        <ProfileBar :basic-profile="resume.data.basics" class="bg-primary h-full"/>
      </aside>

      <div class="col">
        <Card class="bg-primary">
            <template #title>
                Work Experience
            </template>
            <template #content>
                <WorkExperience :work-profile="resume.data.work" />
            </template>
        </Card>
      </div>
    </div>

</template>