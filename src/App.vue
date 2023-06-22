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
        col-12
        xl:col-3
        lg:col-4
        md:col-5
        sm:col-5"
        style="height: 93vh">
        
        <ProfileBar 
          :basic-profile="resume.data.basics"
          :education-profile="resume.data.education"
          class="surface-100 h-full"/>
      </aside>

      <div class="col-12 xl:col lg:col md:col sm:col">
        <Card class="surface-100">
            <template #title>
                Experience
            </template>
            <template #content>
                <WorkExperience :work-profile="resume.data.work" />
            </template>
        </Card>
      </div>
    </div>

</template>