<script setup>

import Card from 'primevue/card';


import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import ProfileBar from '@/components/ProfileBar.vue'
import WorkExperienceCard from '@/components/WorkExperienceCard.vue'
import ProjectsCard from './components/ProjectsCard.vue';

</script>

<template>
    <div class="grid">
      <aside class="
        col
        profile-bar-print
        xl:col-3
        lg:col-4
        md:col-5
        sm:col-5"
        >
        
        <ProfileBar 
          :basic-profile="resume.data.basics"
          :education-profile="resume.data.education"
          :achievement-profile="resume.data.achievements"
          class="surface-100 h-full"/>
      </aside>

      <div class="col">
        <Card class="surface-100">
            <template #title>
                Experience
            </template>
            <template #content>
                <WorkExperienceCard :work-profile="resume.data.work" />
            </template>
        </Card>
        
        <Card class="surface-100 mt-6">
          <template #title>
            Projects
          </template>
          <template #content>
            <ProjectsCard :projects-profile="resume.data.projects" />
          </template>
        </Card>
      </div>
    </div>

</template>

<style scoped>
@media print {
  .profile-bar-print {
    flex: 0 0 auto !important;
    padding: 0.5rem !important;
    width: 40% !important;
    height: fit-content !important;
  }
}
</style>