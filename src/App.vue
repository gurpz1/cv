<script setup>

import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Image from 'primevue/image';


import { resumeStore } from '@/stores/resume'
const resume = resumeStore()

import ProfileBar from '@/components/ProfileBar.vue'
import ProjectCard from './components/ProjectCard.vue';
import WorkExperience from '@/components/WorkExperience.vue'

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
              <ProjectCard 
                :name="resume.data.projects[0].name"
                :summary="resume.data.projects[0].summary"
                :highlights="resume.data.projects[0].highlights">

                <Image src="/src/assets/network.svg" width="200" alt="Network Diagram" preview />
              </ProjectCard>
              
              <Divider/>
              
              <ProjectCard 
                :name="resume.data.projects[1].name"
                :summary="resume.data.projects[1].summary"
                :highlights="resume.data.projects[1].highlights">

                <iframe
                  :src="resume.data.projects[1].url"
                  :title="resume.data.projects[1].name"
                  style="height:30svh; width: 100%; max-width: 650px;"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </ProjectCard>

          </template>
        </Card>
      </div>
    </div>

</template>