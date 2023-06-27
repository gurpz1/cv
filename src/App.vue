<script setup>

import Card from 'primevue/card';


import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import ProfileBar from '@/components/ProfileBar.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import ProjectsProfile from './components/ProjectsProfile.vue';

</script>

<template>
    <div class="grid">
      <aside class="
        col-3
        xl:col-3
        lg:col-4
        md:col-5
        sm:col-5"
        >
        
        <ProfileBar 
          :basic-profile="resume.data.basics"
          :education-profile="resume.data.education"
          class="surface-100 h-full"/>
      </aside>

      <div class="col">
        <Card class="surface-100">
            <template #title>
                Experience
            </template>
            <template #content>
                <WorkExperience :work-profile="resume.data.work" />
            </template>
        </Card>
        
        <Card class="surface-100 mt-6">
          <template #title>
            Projects
          </template>
          <template #content>
            <ProjectsProfile :projects-profile="resume.data.projects" />
          </template>
        </Card>
      </div>
    </div>

</template>