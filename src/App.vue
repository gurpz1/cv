<script setup>

import Card from 'primevue/card';

import * as resume from '@/assets/resume.json';

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
          :basic-profile="resume.basics"
          :education-profile="resume.education"
          :achievement-profile="resume.achievements"
          class="surface-100 h-full"/>
      </aside>

      <div class="col">
        <Card class="surface-100">
            <template #title>
                Experience
            </template>
            <template #content>
                <WorkExperienceCard :work-profile="resume.work" />
            </template>
        </Card>
        
        <Card class="surface-100 mt-6 col-offset-0">
          <template #title>
            Projects
          </template>
          <template #content>
            <ProjectsCard :projects-profile="resume.projects" />
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
  }
}
</style>